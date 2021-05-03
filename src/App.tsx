import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Main, Login } from './page';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Main" component={Main} />
        {/* 로그인 정보에 따라 redirect 분기 */}
        <Route
          path="/"
          render={() =>
            0 ? (
              <Redirect
                to={{
                  pathname: '/Main',
                }}
              />
            ) : (
              <Redirect
                to={{
                  pathname: '/Login',
                }}
              />
            )
          }
        />
      </Switch>
    </Router>
  );
};

export default App;
