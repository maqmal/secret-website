import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/home';
import Intro from './components/intro';
import Pics from './components/pics';
import Password from './components/pass';

import SoundAndHome from './components/soundAndHome';

function App() {
  const [active, setActive] = useState(false);
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
          </>
          :
          <Route exact path="*" render={(props) => <Password setActive={setActive} {...props} /> }/>
        }
      </Switch>
        <SoundAndHome/>
    </main>
  );
}

export default App;
