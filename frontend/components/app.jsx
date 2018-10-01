import React from 'react';
import Greetings from './greetings';
import GreetingsContainer from './greetings_container';
import { Route } from 'react-router-dom';
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './sign_up_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';
import Homescreen from './homepage/homescreen';
import UserDashboardContainer from './user/user_dashboard_container';
import LoggedInNavContainer from './logged_in_nav/logged_in_nav_bar_container';
import UserSearchIndexContainer from './user/user_search/user_search_index_container';
import UserShowContainer from './user/user_show/user_show_container';
import LocationShowContainer from './locations/locations_show_container';



const App = () => (

  <div>
    <Modal />
    <header>
      <AuthRoute exact path='/' component={GreetingsContainer} />
      <ProtectedRoute component={LoggedInNavContainer} />
    </header>
    <section>
      <ProtectedRoute exact path='/dashboard' component={UserDashboardContainer} />
      <ProtectedRoute exact path='/location/:location' component={LocationShowContainer} />
      <ProtectedRoute exact path='/membersearch/:name' component={UserSearchIndexContainer} />
      <ProtectedRoute exact path='/members/:userId' component={UserShowContainer} />
      <AuthRoute exact path="/" component={Homescreen} />
    </section>
  </div>
);

export default App;
