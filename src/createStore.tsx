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
  values: T;
  updateField: (key: FieldPath<T>, value: any) => void;
  updateFields: (data: Partial<Record<FieldPath<T>, any>>) => void;
}

export interface StoreProviderProps<T> {
  initialValue: T;
  children: React.ReactNode;
}

export function createStore<T extends Record<string, any>>() {
  const subject = createSubscribe();

  const StoreContext = createContext<StoreContextProps<T> | undefined>(
    undefined,
  );

  function useStoreContext() {
    const ctx = useContext(StoreContext);
    if (!ctx) throw new Error('StoreContext not found!');
    return ctx;
  }

  function StoreProvider({ children, initialValue }: StoreProviderProps<T>) {
    const self = useRef<{ store: T }>({
      store: deepClone(initialValue),
    });

    const updateField = useMemoizedFn((key: FieldPath<T>, value: any) => {
      setValue(self.current.store, key, value);
      subject.notify(self.current.store);
    });

    const updateFields = useMemoizedFn(
      (data: Partial<Record<FieldPath<T>, any>>) => {
        Object.keys(data).forEach((key) => {
          setValue(self.current.store, key, getValue(data, key));
        });
        subject.notify(self.current.store);
      },
    );

    const contextValue = useMemo<StoreContextProps<T>>(() => {
      return { values: self.current.store, updateField, updateFields };
    }, []);

    return (
      <StoreContext.Provider value={contextValue}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStoreData<K extends FieldPath<T>>(fields: K[]) {
    const { values = {}, updateField } = useStoreContext();

    const [data, setData] = useState<Pick<T, K>>(() => {
      return extractFields(values, fields) as Pick<T, K>;
    });

    const updateData = useMemoizedFn((path: K, value: any) => {
      if (!fields.includes(path)) {
        throw new Error(`No update permission for field: ${path}`);
      }
      updateField(path, value);
    });

    useEffect(() => {
      subject.subscribe((storeValues: T) => {
        const newData = extractFields(storeValues, fields) as Pick<T, K>;
        setData(newData);
      });
    }, []);

    return { data, updateData };
  }

  return {
    StoreProvider,
    useStoreData,
  };
}
