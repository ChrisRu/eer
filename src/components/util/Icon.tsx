/* tslint:disable:max-line-length */
import * as React from 'react';
import * as cx from 'classnames';

interface IIcon {
  name: string;
  title?: string;
  className?: string;
  [x: string]: any;
}

const Icon = ({ name, className, title, ...props }: IIcon) => (
  <svg
    {...props}
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx('icon', `icon--${name}`, className)}>
    {title ? <title>{title}</title> : null}
    <use xlinkHref={`${process.env.PUBLIC_URL}/feather-sprite.svg#${name}`} />
  </svg>
);

export default Icon;
