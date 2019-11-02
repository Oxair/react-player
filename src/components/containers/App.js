import React from 'react';
import MusikPlayer from './MusikPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobaStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path='/' component={ MusikPlayer } />
      <Route exact path='/:activeVideo' component={ MusikPlayer } />
      
    </Switch>

    <GlobaStyle />
  </BrowserRouter>
)

export default App;