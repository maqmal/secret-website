import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/home';
import Intro from './components/intro';
import Pics from './components/pics';
import Password from './components/pass';
import Pics2 from './components/pics2';

function App() {
  const [active, setActive] = useState(true);
  return (
    <main>
      <Switch>
        {
          active ?
          <>
          <Route path="/" component={Home} exact />
          <Route path="/wish-card" component={Home} exact/>
          <Route path="/main" component={Intro} exact/>
          <Route path="/iagly" component={Pics} exact/>
          <Route path="/ily" component={Pics2} exact/>
          </>
          :
          <Route path="/" component={Password} exact />
        }
      </Switch>
    </main>
  );
}

export default App;
