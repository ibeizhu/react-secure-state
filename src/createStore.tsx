import React, { createContext, useContext, useMemo, useState } from 'react';
import { useExtractFields, useMemoizedFn } from './hooks';
import { getValue, setValue } from './utils';

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
  const StoreContext = createContext<StoreContextProps<T> | undefined>(
    undefined,
  );

  function useStoreContext() {
    const ctx = useContext(StoreContext);
    if (!ctx) throw new Error('StoreContext not found!');
    return ctx;
  }

  function StoreProvider({ children, initialValue }: StoreProviderProps<T>) {
    const [values, setValues] = useState<T>(initialValue);

    const updateField = useMemoizedFn((key: FieldPath<T>, value: any) => {
      setValue(values, key, value);
      setValues({ ...values });
    });

    const updateFields = useMemoizedFn(
      (data: Partial<Record<FieldPath<T>, any>>) => {
        Object.keys(data).forEach((key) => {
          setValue(values, key, getValue(data, key));
        });
        setValues({ ...values });
      },
    );

    const contextValue = useMemo<StoreContextProps<T>>(() => {
      return { values, updateField, updateFields };
    }, [values, updateField, updateFields]);

    return (
      <StoreContext.Provider value={contextValue}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStoreData<K extends FieldPath<T>>(fields: K[]) {
    const { values = {}, updateField } = useStoreContext();

    const data = useExtractFields({
      data: values,
      fields,
    }) as Pick<T, K>;

    const updateData = useMemoizedFn((path: K, value: any) => {
      if (!fields.includes(path)) {
        throw new Error(`No update permission for field: ${path}`);
      }
      updateField(path, value);
    });

    return [data, updateData];
  }

  return {
    StoreProvider,
    useStoreData,
  };
}
