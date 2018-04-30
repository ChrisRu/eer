import * as React from 'react';
import { assocPath, clone, path } from 'ramda';
import NavigationItem from './NavigationItem';
import Settings from '../../Settings';
import { CheckIcon, UncheckIcon } from '../../util/icons';

interface INavigationItemToggleProps {
  onUpdate: (settings: Settings) => void;
  settings: Settings;
  settingPath: string;
  children: React.ReactNode;
}

const NavigationItemToggle = ({
  onUpdate,
  settings,
  children,
  settingPath
}: INavigationItemToggleProps) => {
  const settingPathSplit = settingPath.split('.');

  return (
    <NavigationItem
      onClick={() =>
        onUpdate(
          assocPath(
            settingPathSplit,
            !path(settingPathSplit, settings),
            clone(settings)
          )
        )
      }>
      {path(settingPathSplit, settings) ? (
        <CheckIcon className="navigation__button-toggle" />
      ) : (
        <UncheckIcon className="navigation__button-toggle" />
      )}
      {children}
    </NavigationItem>
  );
};

export default NavigationItemToggle;
