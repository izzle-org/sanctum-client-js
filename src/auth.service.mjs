import axios from 'axios'
import TokenService from './token.service.mjs'

const AuthService = {
    authUrl: null,

    init (authUrl) {
        axios.defaults.headers.common['Accept'] = 'application/json'
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        AuthService.authUrl = authUrl
    },

    loggedIn () {
        return TokenService.getToken() !== null
    },

    login (username, password, device) {
        return new Promise((resolve, reject) => {
            axios.post(AuthService.authUrl, {
                email: username,
                password: password,
                device_name: device
            }).then(response => {
                TokenService.setToken(response.data)

                resolve(response)
            })
                .catch(error => {
                    reject(error)
                })
        })
    },

    logout () {
        TokenService.destroyToken()
    }
}

export default AuthService
