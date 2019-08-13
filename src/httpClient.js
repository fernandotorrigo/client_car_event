import axios from 'axios'
import jwtDecode from 'jwt-decode'

// iniciando o axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/signin', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			localStorage.setItem('typeUser', serverResponse.data.user.admin);//Set type user for show contacts

			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient