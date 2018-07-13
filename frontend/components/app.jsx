import React from 'react';
import Greetings from './greetings';
import GreetingsContainer from './greetings_container';
import { Route } from 'react-router-dom';
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './sign_up_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';
import Homescreen from './homepage/homescreen';



const App = () => (

  <div>
    <Modal />
    <header>
      <Route exact path='/' component={GreetingsContainer} />
    </header>
    <section>
      <Route exact path="/" component={Homescreen} />
    </section>
  </div>
);

export default App;
