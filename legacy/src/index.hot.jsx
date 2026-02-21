import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
const container = document.getElementById('root');

render((
    <AppContainer>
      <App />
    </AppContainer>
  ), container);

// render(App);

if(module.hot) {
  module.hot.accept('./App', () => {
    const NextRootContainer = require('./App').default;

    render((
        <AppContainer>
          <NextRootContainer />
        </AppContainer>
      ), container);

  });
}

// ReactDOM.render(<App />, document.getElementById('root'));
