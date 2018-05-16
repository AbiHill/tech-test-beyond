import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexRoute from './components/IndexRoute';
import ShowRoute from './components/ShowRoute';

class App extends React.Component {

  render() {
    return(

      <BrowserRouter>
        <section>
          <main>
            <Switch>
              <Route path="/:id" component={ShowRoute} />
              <Route path="/" component={IndexRoute} />
            </Switch>
          </main>
        </section>
      </BrowserRouter>


    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
