import * as React from 'react';

interface IListener<T> {
  context: any;
  method: (argument?: T) => void;
  type: string;
  init?: boolean;
}

const events = {};

export default function generateSub<T>(
  fireMethod: (type: string, callback: (argument: T) => void) => void
) {
  let listeners: Array<IListener<T>> = [];

  return class Composer<P = {}, S = {}, SS = never> extends React.Component<
    P,
    S,
    SS
  > {
    componentDidMount() {
      if (super.componentDidMount) {
        super.componentDidMount();
      }

      listeners
        .filter(
          listener =>
            listener.context !== this && listener.init && listener.method
        )
        .forEach(listener => {
          listener.method();
        });
    }

    on(action: string, method: (argument?: T) => void, init?: boolean) {
      const newListener: IListener<T> = {
        context: this,
        init: !!init,
        method,
        type: action
      };

      listeners.push(newListener);

      if (!events[action]) {
        events[action] = true;

        fireMethod(action, (arg: T) => {
          listeners.forEach(listener => {
            if (listener.type === action) {
              listener.method(arg);
            }
          });
        });
      }
    }

    componentWillUnmount() {
      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }

      listeners = listeners.filter(listener => listener.context !== this);
    }
  };
}
