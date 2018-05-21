import * as React from 'react';
import NavigationList from './NavigationList';

interface IProps {
  onClick?: () => void;
  children?: React.ReactNode;
  subList?: React.ReactNode;
}

const NavigationItem = ({ onClick, children, subList }: IProps) => (
  <li className="navigation__item">
    <button className="button navigation__button" onClick={onClick}>
      {children}
    </button>
    {subList ? <NavigationList>{subList}</NavigationList> : null}
  </li>
);

export default NavigationItem;
