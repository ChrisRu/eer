import * as React from 'react';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const NavigationList = ({ children }: IProps) => (
  <ul className="navigation">{children}</ul>
);

export default NavigationList;
