import * as React from 'react';
import { assocPath, clone, path } from 'ramda';
import NavigationItem from './NavigationItem';
import Settings from '../../Settings';
import { CheckIcon, UncheckIcon } from '../../util/icons';

interface IProps {
  onUpdate: (settings: Settings) => void;
  settings: Settings;
  settingPath: string;
  update: (value: any) => any;
  children: React.ReactNode;
}

const NavigationItemToggle = ({
  onUpdate,
  settings,
  children,
  update,
  settingPath
}: IProps) => {
  const settingPathSplit = settingPath.split('.');
  const value = path(settingPathSplit, settings);
  const showToggle = typeof value === 'boolean';

  return (
    <NavigationItem
      onClick={() =>
        onUpdate(assocPath(settingPathSplit, update(value), clone(settings)))
      }>
      {showToggle &&
        (value ? (
          <CheckIcon className="navigation__button-toggle" />
        ) : (
          <UncheckIcon className="navigation__button-toggle" />
        ))}
      {children}
    </NavigationItem>
  );
};

export default NavigationItemToggle;
