/* tslint:disable:max-line-length */
import * as React from 'react';
import * as classnames from 'classnames';

interface IIcon {
  title?: string;
  className?: string;
  [x: string]: any;
}

export const CrossIcon = ({ title, className, ...props }: IIcon) => (
  <div
    {...props}
    className={classnames('icon icon--cross', className)}
    title={title || 'Close'}>
    <span />
    <span />
  </div>
);

export const CheckIcon = ({ title, className, ...props }: IIcon) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={classnames('icon icon--check', className)}>
    <title>{title || 'Checked'}</title>
    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
  </svg>
);

export const UncheckIcon = ({ title, className, ...props }: IIcon) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={classnames('icon icon--uncheck', className)}>
    <title>{title || 'Unchecked'}</title>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
  </svg>
);

export const LoadingIcon = ({ title, className, ...props }: IIcon) => (
  <div
    {...props}
    className={classnames('icon icon--loading', className)}
    title={title || 'Loading'}>
    <div className="spinner">
      <div />
      <div />
    </div>
  </div>
);
