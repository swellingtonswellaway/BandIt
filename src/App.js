import React, { Component } from 'react'

import './App.css'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import  SwipePageContainer  from './components/SwipePageContainer'
import  ProfileContainer  from './components/ProfileContainer'

import SignInForm from './components/SignInForm'
import NewUser from './components/NewUser'

import { Link } from "react-router-dom"

import SettingsContainer from './components/SettingsContainer'
import TextLogoBar from './lib/icons/TextLogoBar.svg'
import settings from './lib/icons/gear.svg'

import  bandSwipePageContainer  from './bandComponents/SwipePageContainer'





class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div className="App">
          <header className="App-header">

            {/* <img src={LOGO1} className="App-logo" alt="logo" /> */}

            <Link to={`/`}><img src={TextLogoBar} className="App-logo" alt="logo" /></Link>

            <Link to={`/bands`}><button className="switchMatches">Find Bands</button></Link>
            <Link to={`/`}><button className="switchMatches">Find Musicians</button></Link>

            <div className="iconsContainer--header">



              <Link to={`/settings`}><img src={settings} className="Icon--header" alt="logo" /></Link>
              {/* <Link to={`/`}><img src={likesIcon} className="Icon--header" alt="logo" /></Link>
              <Link to={`/`}><img src={messages} className="Icon--header" alt="logo" /></Link> */}
            </div>


          </header>

          <main className="App-intro">

            <Route exact path={"/"} component={ SwipePageContainer } />
              <Route exact path={"/bands"} component={ bandSwipePageContainer } />

            <Route exact path={"/sign_in"} component={ SignInForm } />

            <Route exact path={"/newUser"} component={ NewUser } />



            <Route exact path={"/settings"} component={ SettingsContainer } />
            <Route exact path={"/profile"} component={ ProfileContainer } />

          </main>
        </div>
      </Provider>


    )
  }
}

export default App;
