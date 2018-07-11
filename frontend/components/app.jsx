import React from 'react';
import Greetings from './greetings';
import GreetingsContainer from './greetings_container';
import { Route } from 'react-router-dom';
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './sign_up_form_container';
import { AuthRoute } from '../util/route_util.jsx';



const App = () => (

  <div>
    <header>
      <GreetingsContainer/>
    </header>

    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
