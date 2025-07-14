export type Callback<T> = (value: T) => void;

export type SubscribeReturn = {
  unsubscribe: () => void;
};

export interface CreateSubscribeReturn<T> {
  subscribe: (callback: Callback<T>) => SubscribeReturn;
  unsubscribe: (callback: Callback<T>) => void;
  notify: (value: T) => void;
}

export function createSubscribe<T>(): CreateSubscribeReturn<T> {
  let callbacks: Callback<T>[] = [];

  const unsubscribe = (callback: Callback<T>) => {
    if (typeof callback !== 'function') {
      throw new Error('callback 必须为函数类型');
    }
    callbacks = callbacks.filter((ob) => ob !== callback);
  };

  const subscribe = (callback: Callback<T>): SubscribeReturn => {
    if (typeof callback !== 'function') {
      throw new Error('callback 必须为函数类型');
    }
    callbacks.push(callback);

    return {
      unsubscribe: () => {
        unsubscribe(callback);
      },
    };
  };

  const notify = (value: T) => {
    callbacks.forEach((callback) => {
      try {
        callback(value);
      } catch (error) {
        console.error('useSubscribe callback 执行出错', error);
      }
    });
  };

  return {
    subscribe,
    unsubscribe,
    notify,
  };
}
