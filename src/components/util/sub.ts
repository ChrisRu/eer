import * as React from 'react';

interface IListener<T> {
  context: any;
  method: (argument: T) => void;
  type: string;
}

const events = {};

type Composers = Array<{ action: string; method: string }>;

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
            listeners.push({
              context: this,
              method: this[composer.method],
              type: composer.action
            });

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
