import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home/index';
import SearchPage from './Pages/Search/index';
import NomineesPage from './Pages/Nominees/index';
import { NomineesProvider } from './helper/context/context';

const App = () => {
  return (
    <NomineesProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/Search' exact component={SearchPage} />
          <Route path='/Nominees' exact component={NomineesPage} />
        </Switch>
      </Router>
    </NomineesProvider>
  );
};

export default App;
