import * as React from 'react';
import Settings from '../../Settings';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';
import NavigationItemToggle from './NavigationItemToggle';

interface INavigationProps {
  onUpdateSettings: (settings: Settings) => void;
  settings: Settings;
  onToggleModal: (modalName: string) => () => void;
}

const Navigation = ({
  onUpdateSettings,
  settings,
  onToggleModal
}: INavigationProps) => (
  <NavigationList>
    <NavigationItem
      subList={
        <React.Fragment>
          <NavigationItem>Open</NavigationItem>
          <NavigationItem>Save</NavigationItem>
          <NavigationItem onClick={onToggleModal('export')}>
            Export
          </NavigationItem>
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
          settingPath="field.grid.visible"
          onUpdate={onUpdateSettings}>
          Toggle Grid
        </NavigationItemToggle>
      }>
      View
    </NavigationItem>
  </NavigationList>
);

export default Navigation;
