import * as React from 'react';

interface IListener<T> {
  context: any;
  method: (argument?: T) => void;
  type: string;
  init?: boolean;
}

const events = {};

type Composers = Array<{ action: string; method: string; init?: boolean }>;

export default function generateSub<T>(
  fireMethod: (type: string, callback: (argument: T) => void) => void
) {
  let listeners: Array<IListener<T>> = [];

  return (composers: Composers) => {
    return function sub<Q>(
      Component: React.ComponentClass<Q>
    ): React.ComponentClass<Q> {
      return class Composer extends Component {
        constructor(props: any, context: any) {
          super(props, context);

          composers.forEach(composer => {
            const newListener: IListener<T> = {
              context: this,
              init: composer.init,
              method: this[composer.method],
              type: composer.action
            };

            listeners.push(newListener);

            if (!events[composer.action]) {
              events[composer.action] = true;

              fireMethod(composer.action, (arg: T) => {
                listeners.forEach(listener => {
                  if (listener.type === composer.action) {
                    listener.method(arg);
                  }
                });
              });
            }
          });
        }

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

        componentWillUnmount() {
          if (super.componentWillUnmount) {
            super.componentWillUnmount();
          }

          listeners = listeners.filter(listener => listener.context !== this);
        }
      };
    };
  };
}
