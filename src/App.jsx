import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import httpClient from './httpClient'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import VIP from './views/listContacts'
import Home from './views/Home'

class App extends React.Component {
	state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}
	
	render() {
		const { currentUser } = this.state
					
		const isAdmin = localStorage.typeUser;

		if(isAdmin==='true'){
			return (
				<div className='App container'>
					<NavBar currentUser={currentUser} />
					<Switch>
						<Route path="/login" render={(props) => {
							return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
						}} />

						<Route path="/logout" render={(props) => {
							return <LogOut onLogOut={this.logOut.bind(this)} />
						}} />

						<Route path="/listContacts" render={() => {
							return currentUser
								? <VIP />
								: <Redirect to="/login" />
						}} />

						<Route path="/" component={Home} />

					</Switch>
				</div>
			)
		}else{
			return (
				<div className='App container'>
					<NavBar currentUser={currentUser} />
					<Switch>
						<Route path="/login" render={(props) => {
							return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
						}} />

						<Route path="/logout" render={(props) => {
							return <LogOut onLogOut={this.logOut.bind(this)} />
						}} />

						<Route path="/listContacts" render={() => {
							return currentUser
								? <Redirect to="/" />
								: <Redirect to="/login" />
						}} />
						
						<Route path="/" component={Home} />

					</Switch>
				</div>
			)			
		}
	}
}

export default App