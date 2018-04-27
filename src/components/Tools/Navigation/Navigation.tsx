import * as React from 'react';
import Settings from '../Settings';
import CheckMark from '../util/icons/CheckMark';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';

const Navigation = ({
  onUpdateSettings,
  settings
}: {
  onUpdateSettings: (settings: Settings) => void;
  settings: Settings;
}) => (
  <NavigationList>
    <NavigationItem
      subList={
        <React.Fragment>
          <NavigationItem>Open</NavigationItem>
          <NavigationItem>Save</NavigationItem>
          <NavigationItem>Export</NavigationItem>
        </React.Fragment>
      }>
      File
    </NavigationItem>
    <NavigationItem
      subList={
        <React.Fragment>
          <NavigationItem>Increase Size</NavigationItem>
          <NavigationItem>Decrease Size</NavigationItem>
        </React.Fragment>
      }>
      Edit
    </NavigationItem>
    <NavigationItem
      subList={
        <NavigationItem
          onClick={() =>
            onUpdateSettings({ ...settings, grid: !settings.grid })
          }>
          <CheckMark className="navigation__button-toggle" on={settings.grid} />
          Toggle Grid
        </NavigationItem>
      }>
      View
    </NavigationItem>
  </NavigationList>
);

export default Navigation;
