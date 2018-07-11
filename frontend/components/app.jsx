import React from 'react';
import Greetings from './greetings';
import GreetingsContainer from './greetings_container';
import { Route } from 'react-router-dom';
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './sign_up_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import Modal from './modal';



const App = () => (

  <div>
    <Modal />
    <header>
      <GreetingsContainer/>
    </header>
  </div>
);

export default App;
