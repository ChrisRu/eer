import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();

if (process.env.NODE_ENV !== 'production') {
  import('why-did-you-update').then(({ whyDidYouUpdate }) => {
    whyDidYouUpdate(React);
  });
}
