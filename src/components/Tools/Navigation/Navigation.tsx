import * as React from 'react';
import Settings from '../../Settings';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';
import NavigationItemToggle from './NavigationItemToggle';
import Icon from '../../util/Icon';

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
          <NavigationItem>
            <Icon name="file" title="Open File" /> Open
          </NavigationItem>
          <NavigationItem>
            <Icon name="save" title="Save File" /> Save
          </NavigationItem>
          <NavigationItem onClick={onToggleModal('export', true)}>
            <Icon name="download" title="Export File" /> Export
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
            <Icon name="zoom-in" title="Zoom In" /> Increase Size
          </NavigationItemToggle>
          <NavigationItemToggle
            settings={settings}
            settingPath="field.grid.size"
            update={(value: number) => value - 0.3}
            onUpdate={onUpdateSettings}>
            <Icon name="zoom-out" title="Zoom Out" /> Decrease Size
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
