/* tslint:disable:max-line-length */
import * as React from 'react';

interface IIcon {
  onClick?: () => void;
  title?: string;
}

export const SearchIcon = ({ onClick, title }: IIcon) => (
  <svg
    className="icon icon--search"
    width="66"
    height="67"
    viewBox="0 0 66 67"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}>
    <title>{title || 'Search'}</title>
    <g transform="translate(236 57)">
      <mask id="b">
        <use
          xlinkHref="#a"
          fill="#fff"
          transform="rotate(45 -80.198 -226.682)"
        />
      </mask>
      <g mask="url(#b)">
        <use xlinkHref="#c" transform="rotate(45 -80.198 -226.682)" />
      </g>
    </g>
    <g transform="translate(236 57)">
      <mask id="e">
        <use xlinkHref="#d" fill="#fff" transform="translate(-236 -56.25)" />
      </mask>
      <g mask="url(#e)">
        <use xlinkHref="#f" transform="translate(-236 -56.25)" />
      </g>
    </g>
    <defs>
      <path
        id="a"
        d="M0 2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"
      />
      <path
        id="c"
        d="M2 8h16V-8H2V8zm10-6v4h16V2H12zm6-2H2v16h16V0zM8 6V2H-8v4H8zM2-8C-3.523-8-8-3.523-8 2H8a6 6 0 0 1-6 6V-8zM18 8a6 6 0 0 1-6-6h16c0-5.523-4.477-10-10-10V8zm-6-2a6 6 0 0 1 6-6v16c5.523 0 10-4.477 10-10H12zM2 0a6 6 0 0 1 6 6H-8c0 5.523 4.477 10 10 10V0z"
      />
      <path
        id="d"
        d="M60 30c0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30z"
      />
      <path
        id="f"
        d="M52 30c0 12.15-9.85 22-22 22v16c20.987 0 38-17.013 38-38H52zM30 52C17.85 52 8 42.15 8 30H-8c0 20.987 17.013 38 38 38V52zM8 30C8 17.85 17.85 8 30 8V-8C9.013-8-8 9.013-8 30H8zM30 8c12.15 0 22 9.85 22 22h16C68 9.013 50.987-8 30-8V8z"
      />
    </defs>
  </svg>
);

export const FilterIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="198"
    height="198"
    viewBox="0 0 198 198"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--filter"
    onClick={onClick}>
    <title>{title || 'Filter'}</title>
    <path
      fillRule="evenodd"
      d="M190.266 0H7.734A7.736 7.736 0 0 0 0 7.737c0 29.98 8.867 56.226 27.904 82.599 11.877 16.454 33.183 28.568 44.026 33.993v46.976a7.744 7.744 0 0 0 4.33 6.949l38.673 18.956a7.72 7.72 0 0 0 7.496-.382 7.735 7.735 0 0 0 3.641-6.566v-65.546c14.374-6.779 32.933-19.011 44.026-34.38C189.133 63.963 198 37.716 198 7.737A7.736 7.736 0 0 0 190.266 0zm-79.664 177.854v-19.48l-.194-38.91c0-3.184 1.16-4.175 1.16-4.175s2.514-2.214 3.807-2.751c13.932-5.775 32.378-17.681 42.18-31.262 15.367-21.287 23.33-42.381 24.745-65.801H15.7c1.415 23.42 9.378 44.514 24.745 65.801 9.275 12.85 28.009 24.52 42.448 31.158a7.737 7.737 0 0 1 4.505 7.03v47.016l23.204 11.374z"
    />
  </svg>
);

export const CrossIcon = ({ onClick, title }: IIcon) => (
  <div className="icon icon--cross" onClick={onClick} title={title || 'Close'}>
    <span />
    <span />
  </div>
);

export const PlusIcon = ({ onClick, title }: IIcon) => (
  <div className="icon icon--plus" onClick={onClick} title={title || 'Add'}>
    <span />
    <span />
  </div>
);

export const DashboardIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="138"
    height="110"
    viewBox="0 0 138 110"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--dashboard"
    onClick={onClick}>
    <title>{title || 'Dashboard'}</title>
    <path d="M117.285 20.772a5.38 5.38 0 0 0-6.849-.643c-8.065 5.512-48.523 33.234-52.871 37.593-6.305 6.323-6.305 16.61 0 22.934A16.101 16.101 0 0 0 69 85.398c4.141 0 8.283-1.581 11.436-4.742 4.348-4.36 31.993-44.929 37.492-53.017a5.418 5.418 0 0 0-.643-6.867zm-44.473 52.24a5.385 5.385 0 0 1-7.623 0 5.421 5.421 0 0 1-.001-7.644c1.69-1.674 13.176-9.889 27.308-19.74-9.823 14.172-18.015 25.69-19.684 27.383z" />
    <path d="M24.86 94.33l-6.656 3.255c-4.869-8.713-7.423-18.44-7.423-28.396a58.235 58.235 0 0 1 3.79-20.725l7.625 3.667a5.358 5.358 0 0 0 2.328.533 5.39 5.39 0 0 0 4.864-3.069 5.412 5.412 0 0 0-2.53-7.211l-7.528-3.621C28.688 23.46 44.877 12.79 63.61 11.059v8.13c0 2.985 2.413 5.405 5.39 5.405 2.978 0 5.39-2.42 5.39-5.405v-8.134a57.425 57.425 0 0 1 18.537 4.896 5.385 5.385 0 0 0 7.131-2.702 5.412 5.412 0 0 0-2.696-7.15C88.423 2.051 78.881 0 69 0 50.57 0 33.242 7.197 20.21 20.265 7.176 33.333 0 50.708 0 69.189c0 13.657 4.042 26.939 11.69 38.409A5.386 5.386 0 0 0 16.175 110c.796 0 1.603-.177 2.36-.548l11.051-5.405a5.412 5.412 0 0 0 2.482-7.228 5.385 5.385 0 0 0-7.209-2.489zM131.919 40.749a5.384 5.384 0 0 0-7.133-2.703 5.411 5.411 0 0 0-2.695 7.15c3.402 7.557 5.127 15.63 5.127 23.993 0 9.971-2.562 19.713-7.446 28.437l-6.946-3.318a5.384 5.384 0 0 0-7.185 2.558 5.412 5.412 0 0 0 2.55 7.204l11.32 5.406a5.386 5.386 0 0 0 6.799-1.876C133.958 96.129 138 82.846 138 69.19c0-9.908-2.046-19.477-6.081-28.44z" />
  </svg>
);

export const MapsIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="132"
    height="157"
    viewBox="0 0 132 157"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--maps"
    onClick={onClick}>
    <title>{title || 'Map'}</title>
    <path d="M43.051 35.602a6.134 6.134 0 0 0 1.156 8.6 6.14 6.14 0 0 0 8.6-1.166 16.79 16.79 0 0 1 1.484-1.696c6.463-6.463 16.974-6.47 23.43-.013 6.456 6.456 6.45 16.967-.012 23.43-6.463 6.463-16.975 6.469-23.43.013a16.782 16.782 0 0 1-1.751-2.057 6.134 6.134 0 0 0-8.564-1.392 6.137 6.137 0 0 0-1.401 8.565 29.025 29.025 0 0 0 3.033 3.567c11.238 11.239 29.535 11.229 40.786-.022 11.25-11.251 11.26-29.548.022-40.786-11.239-11.239-29.535-11.229-40.786.022a29.315 29.315 0 0 0-2.567 2.935z" />
    <path d="M43.051 35.602a6.134 6.134 0 0 0 1.156 8.6 6.14 6.14 0 0 0 8.6-1.166 16.79 16.79 0 0 1 1.484-1.696c6.463-6.463 16.974-6.47 23.43-.013 6.456 6.456 6.45 16.967-.012 23.43-6.463 6.463-16.975 6.469-23.43.013a16.782 16.782 0 0 1-1.751-2.057 6.134 6.134 0 0 0-8.564-1.392 6.137 6.137 0 0 0-1.401 8.565 29.025 29.025 0 0 0 3.033 3.567c11.238 11.239 29.535 11.229 40.786-.022 11.25-11.251 11.26-29.548.022-40.786-11.239-11.239-29.535-11.229-40.786.022a29.315 29.315 0 0 0-2.567 2.935zM122.105 121.616c-4.723-2.474-11.208-4.559-19.273-6.196a6.14 6.14 0 0 0-7.24 4.788 6.134 6.134 0 0 0 4.795 7.232c12.441 2.525 17.542 5.556 19.013 7.025-1.083 1.085-4.708 3.809-15.356 6.369-10.46 2.515-23.97 3.9-38.044 3.9-14.074 0-27.584-1.385-38.044-3.9-10.648-2.56-14.272-5.284-15.356-6.369 1.471-1.469 6.572-4.5 19.013-7.025a6.134 6.134 0 0 0 4.794-7.232 6.14 6.14 0 0 0-7.239-4.788c-8.065 1.637-14.55 3.722-19.272 6.196C3.329 125.057 0 129.383 0 134.475c0 7.609 7.418 13.499 22.049 17.506C33.869 155.217 49.478 157 66 157c16.522 0 32.131-1.783 43.951-5.019 14.631-4.007 22.049-9.897 22.049-17.506 0-5.092-3.329-9.418-9.895-12.859z" />
    <path d="M60.81 129.613a6.142 6.142 0 0 0 10.38-.001c5.629-8.895 12.955-16.698 20.041-24.244 13.845-14.744 28.161-29.99 28.183-52.633-.017-14.195-5.601-27.484-15.724-37.42C93.629 5.439 80.243 0 66 0 51.766 0 38.428 5.446 28.444 15.335 18.431 25.25 12.91 38.532 12.893 52.747c.022 22.667 14.268 37.94 28.046 52.711 7.012 7.518 14.263 15.291 19.871 24.154zM66 12.266c22.656 0 41.109 18.16 41.135 40.47-.017 17.785-11.53 30.045-24.86 44.24-5.517 5.877-11.173 11.9-16.271 18.624-5.05-6.676-10.634-12.663-16.081-18.503C36.65 82.87 25.19 70.581 25.173 52.75 25.197 30.048 43.131 12.266 66 12.266z" />
    <path d="M83.447 30.1a6.134 6.134 0 0 0-8.6 1.156 6.14 6.14 0 0 0 1.166 8.6c.593.453 1.164.952 1.696 1.484 6.463 6.463 6.469 16.974.013 23.43-6.456 6.456-16.967 6.45-23.43-.013-6.463-6.463-6.47-16.974-.013-23.43.64-.64 1.331-1.228 2.057-1.75a6.134 6.134 0 0 0 1.392-8.564 6.137 6.137 0 0 0-8.566-1.401 29.025 29.025 0 0 0-3.566 3.033c-11.239 11.238-11.229 29.535.022 40.786 11.251 11.25 29.547 11.26 40.786.022 11.239-11.239 11.229-29.535-.022-40.786a29.303 29.303 0 0 0-2.935-2.567z" />
  </svg>
);

export const ListIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="130"
    height="157"
    viewBox="0 0 130 157"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--list"
    onClick={onClick}>
    <title>{title || 'List'}</title>
    <path d="M98.999 33.122H55.495a6.133 6.133 0 0 0-6.132 6.134 6.133 6.133 0 0 0 6.132 6.133H99a6.133 6.133 0 0 0 6.132-6.133A6.133 6.133 0 0 0 99 33.122zM98.999 57.657H55.495a6.133 6.133 0 0 0-6.132 6.133 6.133 6.133 0 0 0 6.132 6.134H99a6.132 6.132 0 0 0 6.132-6.134A6.133 6.133 0 0 0 99 57.657zM74.198 82.192H55.495a6.133 6.133 0 0 0-6.132 6.133 6.133 6.133 0 0 0 6.132 6.134h18.703a6.133 6.133 0 0 0 6.132-6.134 6.133 6.133 0 0 0-6.132-6.133z" />
    <path
      fillRule="evenodd"
      d="M130 24.535C130 11.006 118.996 0 105.472 0H49.057C35.539 0 24.54 10.994 24.528 24.512 11.004 24.512 0 35.518 0 49.047v83.418C0 145.993 11.003 157 24.528 157H84.01c13.525 0 24.529-11.006 24.529-24.535v-.186c12.078-1.514 21.455-11.848 21.462-24.33V24.535zm-24.526 95.667c6.761-.001 12.262-5.505 12.262-12.267v-83.4c0-6.764-5.502-12.268-12.264-12.268H49.057c-6.763 0-12.265 5.504-12.265 12.268v83.414a12.19 12.19 0 0 0 3.594 8.675 12.183 12.183 0 0 0 8.67 3.592l56.418-.014zm-56.417 12.281c-6.552 0-12.71-2.551-17.342-7.184-4.634-4.634-7.186-10.796-7.186-17.351V36.779c-6.763 0-12.264 5.503-12.264 12.267v83.419c0 6.764 5.501 12.267 12.264 12.267h59.48c6.76 0 12.26-5.5 12.264-12.261l-47.216.012z"
    />
  </svg>
);

export const WarningIcon = ({ onClick, title }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 486.463 486.463"
    className="icon icon--warning"
    onClick={onClick}>
    <title>{title || 'Warning'}</title>
    <path d="M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z" />
    <path d="M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z" />
    <path d="M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z" />
  </svg>
);

export const EditIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="158"
    height="158"
    viewBox="0 0 158 158"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--edit"
    onClick={onClick}>
    <title>{title || 'Edit'}</title>
    <path
      fillRule="evenodd"
      d="M156.192 37.871l-35.99-36.06a6.164 6.164 0 0 0-8.723-.006l-95.783 95.66a6.186 6.186 0 0 0-1.59 2.723L.227 150.155a6.2 6.2 0 0 0 1.032 5.401A6.182 6.182 0 0 0 6.174 158c.57 0 1.138-.079 1.686-.236l49.87-14.193a6.167 6.167 0 0 0 2.726-1.624h.103l21.546-21.588 74.072-73.725A6.18 6.18 0 0 0 158 42.255a6.209 6.209 0 0 0-1.808-4.384zm-39.608 12.81l-69.27 69.406 8.787 8.831 17.302-17.336 52.155-51.91-8.974-8.99zm-93.337 62.741l-8.175 29.429 29.191-8.308-21.016-21.121zm5.736-11.758l9.614 9.661 69.257-69.392-9.517-9.535-69.354 69.266zm78.099-78l27.236 27.289 8.763-8.722-27.251-27.304-8.748 8.737z"
    />
  </svg>
);

export const TrashIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="195"
    height="212"
    viewBox="0 0 195 212"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--trash"
    onClick={onClick}>
    <title>{title || 'Remove'}</title>
    <path
      fillRule="evenodd"
      d={`M186.737 34.367h-49.989v-9.523c0-13.7-11.12-24.844-24.788-24.844H83.04C69.372 0 58.252 11.145 58.252 24.844v9.523H8.262C3.7 34.367 0 38.075 0 42.648c0 4.574 3.7 8.282 8.263 8.282h8.557l10.07 130.838.009.115a33.078 33.078 0 0 0 10.63 21.455A32.935 32.935 0 0 0 59.813 212h75.374c17.214 0 31.364-12.849 32.914-29.888l2.924-38.21 7.155-92.972h8.557c4.564 0 8.263-3.708 8.263-8.282 0-4.573-3.699-8.28-8.263-8.28zm-51.55 161.071c8.613 0 15.688-6.376 16.457-14.831l2.905-37.978 7.057-91.7H33.394l9.967 129.502c.804 8.559 7.868 15.007 16.452 15.007h75.374zm-60.41-161.07h45.445v-9.524c0-4.567-3.706-8.282-8.262-8.282H83.04c-4.556 0-8.263 3.715-8.263 8.282v9.523z`}
    />
    <path d="M59.957 67.5c-4.559.2-8.092 4.066-7.894 8.635l4.131 94.793c.194 4.446 3.852 7.92 8.249 7.92.121 0 .244-.002.367-.008 4.559-.2 8.093-4.065 7.894-8.635l-4.131-94.793c-.2-4.569-4.064-8.117-8.616-7.912zm66.47 7.912l-4.13 94.793c-.2 4.57 3.334 8.436 7.893 8.635.123.006.245.009.367.009 4.397 0 8.055-3.474 8.249-7.921l4.131-94.792c.2-4.57-3.335-8.436-7.894-8.635-4.552-.204-8.416 3.342-8.616 7.911zm-37.19.362v94.792c0 4.574 3.7 8.282 8.263 8.282 4.564 0 8.263-3.708 8.263-8.282V75.774c0-4.574-3.7-8.281-8.263-8.281s-8.263 3.707-8.263 8.28z" />
  </svg>
);

export const SaveIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="178"
    height="178"
    viewBox="0 0 178 178"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--save"
    onClick={onClick}>
    <title>{title || 'Save'}</title>
    <path d="M106.035 51.453a6.953 6.953 0 0 0 6.953-6.953V31.29a6.953 6.953 0 1 0-13.906-.001v13.21a6.953 6.953 0 0 0 6.953 6.953z" />
    <path
      fillRule="evenodd"
      d="M178 115.422V35.461a6.96 6.96 0 0 0-2.037-4.917L147.456 2.037A6.953 6.953 0 0 0 142.539 0H27.813C12.476 0 0 12.477 0 27.813v122.375C0 165.523 12.477 178 27.813 178h122.375C165.523 178 178 165.523 178 150.188v-34.766zm-27.812 48.672c7.667 0 13.906-6.239 13.906-13.906V38.341l-24.435-24.435h-.249V54.93c0 11.502-9.357 20.86-20.859 20.86h-69.88c-11.501 0-20.858-9.359-20.858-20.86V13.906c-7.668 0-13.907 6.239-13.907 13.906v122.376c0 7.667 6.239 13.906 13.906 13.906v-55.625a6.953 6.953 0 0 1 6.954-6.953h108.468a6.953 6.953 0 0 1 6.954 6.953v55.625zm-13.907-48.672H41.719v48.672h94.562v-48.672zm-17.73-53.54a6.96 6.96 0 0 0 6.953-6.952V13.906H41.719V54.93a6.961 6.961 0 0 0 6.953 6.953h69.879z"
    />
  </svg>
);

export const CheckIcon = ({ onClick, title }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="icon icon--check"
    onClick={onClick}>
    <title>{title || 'Completed'}</title>
    <path d="M504.527 67.909c-8.611-6.92-21.2-5.547-28.118 3.063L210.291 402.169c-3.612 3.863-8.494 6.101-13.797 6.314-5.459.22-10.629-1.73-14.523-5.431L33.839 261.061c-7.975-7.643-20.634-7.374-28.278.599-7.643 7.974-7.375 20.634.599 28.278l148.191 142.048c11.26 10.703 25.83 16.515 41.268 16.515.825 0 1.655-.017 2.484-.051 16.352-.657 31.371-7.734 42.288-19.926.237-.265.467-.537.691-.814L507.59 96.027c6.918-8.611 5.547-21.199-3.063-28.118z" />
  </svg>
);

export const LoadingIcon = ({ onClick, title }: IIcon) => (
  <div
    className="icon icon--loading"
    onClick={onClick}
    title={title || 'Loading'}>
    <div className="spinner">
      <div />
      <div />
    </div>
  </div>
);

export const PersonIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--person"
    onClick={onClick}>
    <title>{title || 'User'}</title>
    <path
      fillRule="evenodd"
      d="M472.232 347.282c-32.817-48.944-80.47-84.534-134.804-102.417C370.538 220.036 392 180.477 392 136 392 61.01 330.991 0 256 0S120 61.01 120 136c0 44.504 21.488 84.084 54.633 108.911-30.368 9.998-58.863 25.555-83.803 46.069-45.732 37.617-77.53 90.086-89.532 147.742-3.762 18.067.745 36.623 12.363 50.909C25.22 503.847 42.365 512 60.693 512h390.613c18.329 0 35.472-8.153 47.032-22.369 11.62-14.286 16.126-32.842 12.364-50.909-3.039-26.622-26.913-72.053-38.47-91.44zm-4.926 117.112c3.988-4.906 4.236-7.894 4.236-17.519 0-18.375-20.277-57.385-32.533-77.318-40.039-59.713-106.155-95.944-177.687-97.66a138.302 138.302 0 0 1-10.624.001c-101.549 2.456-189.484 75.282-210.24 174.977-1.297 6.229.247 12.614 4.236 17.519 2.31 2.84 7.46 7.606 15.999 7.606h390.614c8.538 0 13.689-4.765 15.999-7.606zM256 40c-52.935 0-96 43.065-96 96 0 51.312 40.465 93.35 91.16 95.879a260.16 260.16 0 0 1 9.699-.001C311.545 229.339 352 187.305 352 136c0-52.935-43.065-96-96-96z"
    />
  </svg>
);

export const NotificationIcon = ({ onClick, title }: IIcon) => (
  <svg
    width="201"
    height="243"
    viewBox="0 0 201 243"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--notification"
    onClick={onClick}>
    <title>{title || 'Notification'}</title>
    <path
      fillRule="evenodd"
      d="M174.43 111.059c0 9.625 2.658 16.422 7.251 24.909 5.278 9.366 16.434 31.442 18.828 44.815a28.427 28.427 0 0 1-6.081 23.453 28.377 28.377 0 0 1-21.901 10.287h-43.466c0 15.702-12.771 28.477-28.47 28.477-15.698 0-28.47-12.775-28.47-28.477H28.474a28.378 28.378 0 0 1-21.902-10.287 28.424 28.424 0 0 1-6.08-23.453c3.282-17.511 9.77-28.862 15.493-38.878l.002-.003c5.811-10.167 10.4-18.196 10.4-30.843V96.82c0-37.408 28.253-68.719 64.532-73.427v-13.9c0-5.243 4.249-9.493 9.49-9.493 5.242 0 9.49 4.25 9.49 9.492v13.873c16.341 2.062 31.457 9.532 43.23 21.502 13.737 13.967 21.302 32.418 21.302 51.953v14.239zm-73.839 112.957c-5.232 0-9.49-4.259-9.49-9.493h18.98c0 5.234-4.256 9.493-9.49 9.493zm79.233-31.905c1.065-1.284 2.745-4.008 2.029-7.831-1.318-9.007-11.792-29.937-16.864-39.276-4.615-8.529-9.539-18.889-9.539-33.945V96.82c0-29.933-24.243-54.615-54.054-55.049h-1.794c-29.912.435-54.236 25.117-54.236 55.049v14.238c0 17.691-6.56 29.167-12.903 40.266v.001c-5.224 9.139-10.624 18.588-13.316 32.955-.716 3.823.964 6.547 2.028 7.831 1.063 1.28 3.424 3.428 7.298 3.428h144.054c3.874 0 6.235-2.148 7.297-3.428z"
    />
  </svg>
);