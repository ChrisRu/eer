import * as React from 'react';
import Settings from '../../Settings';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';
import NavigationItemToggle from './NavigationItemToggle';

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
          <NavigationItemToggle
            settings={settings}
            value="modals.export"
            onUpdate={onUpdateSettings}>
            Export
          </NavigationItemToggle>
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
        <NavigationItemToggle
          settings={settings}
          value="grid"
          onUpdate={onUpdateSettings}>
          Toggle Grid
        </NavigationItemToggle>
      }>
      View
    </NavigationItem>
  </NavigationList>
);

export default Navigation;
