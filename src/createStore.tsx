import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMemoizedFn } from './hooks';
import {
  createSubscribe,
  deepClone,
  extractFields,
  getValue,
  setValue,
} from './utils';

type FieldPath<T> = keyof T & string;

export interface StoreContextProps<T> {
  store: T;
  updateField: (key: FieldPath<T>, value: any) => void;
  updateFields: (data: Partial<Record<FieldPath<T>, any>>) => void;
}

export interface StoreProviderProps<T> {
  initialValue: T;
  children: React.ReactNode;
}

export function createStore<T extends Record<string, any>>() {
  type SubscribeValues = {
    store: T;
    fields: FieldPath<T>[];
  };

  const subject = createSubscribe<SubscribeValues>();

  const StoreContext = createContext<StoreContextProps<T> | undefined>(
    undefined,
  );

  function useStoreContext() {
    const ctx = useContext(StoreContext);
    if (!ctx) throw new Error('StoreContext not found!');
    return ctx;
  }

  function StoreProvider({ children, initialValue }: StoreProviderProps<T>) {
    const cloneValues = useMemo(() => {
      return deepClone(initialValue || {});
    }, []);

    const self = useRef<{ store: T }>({
      store: cloneValues,
    });

    const updateField = useMemoizedFn((key: FieldPath<T>, value: any) => {
      setValue(self.current.store, key, deepClone(value));
      subject.notify({
        store: self.current.store,
        fields: [key],
      });
    });

    const updateFields = useMemoizedFn(
      (data: Partial<Record<FieldPath<T>, any>>) => {
        Object.keys(data).forEach((key) => {
          setValue(self.current.store, key, deepClone(getValue(data, key)));
        });
        subject.notify({
          store: self.current.store,
          fields: Object.keys(data),
        });
      },
    );

    const contextValue = useMemo<StoreContextProps<T>>(() => {
      return { store: self.current.store, updateField, updateFields };
    }, []);

    return (
      <StoreContext.Provider value={contextValue}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStoreValues<K extends FieldPath<T>>(fields: K[]) {
    const { store = {}, updateField, updateFields } = useStoreContext();

    const [values, setValues] = useState<Pick<T, K>>(() => {
      return extractFields(store, fields) as Pick<T, K>;
    });

    const setFieldValue = useMemoizedFn((path: K, value: any) => {
      if (!fields.includes(path)) {
        throw new Error(`No update permission for field: ${path}`);
      }
      updateField(path, value);
    });

    const setFieldsValue = useMemoizedFn(
      (fieldsValue: Partial<Record<FieldPath<T>, any>>) => {
        Object.keys(fieldsValue).forEach((path) => {
          if (!fields.includes(path as K)) {
            throw new Error(`No update permission for field: ${path}`);
          }
        });
        updateFields(fieldsValue);
      },
    );

    useEffect(() => {
      subject.subscribe((params) => {
        let needUpdate = false;

        for (let field of params.fields) {
          if (fields.includes(field as K)) {
            needUpdate = true;
            break;
          }
        }

        if (needUpdate) {
          const newValues = extractFields(params.store, fields) as Pick<T, K>;
          setValues(newValues);
        }
      });
    }, []);

    return {
      values,
      setFieldValue,
      setFieldsValue,
    };
  }

  return {
    StoreProvider,
    useStoreValues,
  };
}
