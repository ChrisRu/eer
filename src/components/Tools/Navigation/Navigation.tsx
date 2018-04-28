import * as React from 'react';
import Settings from '../../Settings';
import { CheckIcon } from '../../util/icons';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';

const toggleVisibility = (bool: boolean) => ({
  visibility: bool ? 'visible' : 'hidden'
});

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
          <CheckIcon style={toggleVisibility(settings.grid)} />
          Toggle Grid
        </NavigationItem>
      }>
      View
    </NavigationItem>
  </NavigationList>
);

export default Navigation;
