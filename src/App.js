import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';
import FitnessProvider from './contexts/FitnessProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import WorkoutDetailScreen from './screens/WorkoutDetailScreen';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <FitnessProvider>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route path="/gallery">
                <Gallery></Gallery>
              </Route>
              <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
              <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
              <PrivateRoute exact path="/fitss/:title"><WorkoutDetailScreen /></PrivateRoute>
              <Route path="*"><ErrorScreen /></Route>
            </Switch>
          </FitnessProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
