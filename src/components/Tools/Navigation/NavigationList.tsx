import * as React from 'react';

const NavigationList = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[];
}) => <ul className="navigation">{children}</ul>;

export default NavigationList;
