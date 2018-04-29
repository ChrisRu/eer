import * as React from 'react';
import NavigationList from './NavigationList';

const NavigationItem = ({
  onClick,
  children,
  subList
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  subList?: React.ReactNode;
}) => (
  <li className="navigation__item">
    <button className="button navigation__button" onClick={onClick}>
      {children}
    </button>
    {subList ? <NavigationList>{subList}</NavigationList> : null}
  </li>
);

export default NavigationItem;
