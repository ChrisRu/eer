import * as React from 'react';
import Settings from '../../Settings';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';
import NavigationItemToggle from './NavigationItemToggle';

interface IProps {
  onUpdateSettings: (settings: Settings) => void;
  settings: Settings;
  onToggleModal: (modalName: string, open?: boolean) => () => void;
}

const Navigation = ({ onUpdateSettings, settings, onToggleModal }: IProps) => (
  <NavigationList>
    <NavigationItem
      subList={
        <React.Fragment>
          <NavigationItem>Open</NavigationItem>
          <NavigationItem>Save</NavigationItem>
          <NavigationItem onClick={onToggleModal('export', true)}>
            Export
          </NavigationItem>
        </React.Fragment>
      }>
      File
    </NavigationItem>
    <NavigationItem
      subList={
        <React.Fragment>
          <NavigationItemToggle
            settings={settings}
            settingPath="field.grid.size"
            update={(value: number) => value + 0.3}
            onUpdate={onUpdateSettings}>
            Increase Size
          </NavigationItemToggle>
          <NavigationItemToggle
            settings={settings}
            settingPath="field.grid.size"
            update={(value: number) => value - 0.3}
            onUpdate={onUpdateSettings}>
            Decrease Size
          </NavigationItemToggle>
        </React.Fragment>
      }>
      Edit
    </NavigationItem>
    <NavigationItem
      subList={
        <NavigationItemToggle
          settings={settings}
          settingPath="field.grid.visible"
          update={(value: boolean) => !value}
          onUpdate={onUpdateSettings}>
          Toggle Grid
        </NavigationItemToggle>
      }>
      View
    </NavigationItem>
  </NavigationList>
);

export default Navigation;
