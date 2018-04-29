import * as React from 'react';
import { assocPath, clone, path } from 'ramda';
import NavigationItem from './NavigationItem';
import Settings from '../../Settings';
import { CheckIcon, UncheckIcon } from '../../util/icons';

interface INavigationItemToggleProps {
  onUpdate: (settings: Settings) => void;
  settings: Settings;
  value: string;
  children: React.ReactNode;
}

const NavigationItemToggle = ({
  onUpdate,
  settings,
  children,
  value
}: INavigationItemToggleProps) => (
  <NavigationItem
    onClick={() => {
      const valuePath = value.split('.');
      onUpdate(
        assocPath(valuePath, !path(valuePath, settings), clone(settings))
      );
    }}>
    {settings.grid ? (
      <CheckIcon className="navigation__button-toggle" />
    ) : (
      <UncheckIcon className="navigation__button-toggle" />
    )}
    {children}
  </NavigationItem>
);

export default NavigationItemToggle;
