const TOKEN_KEY = 'auth.token'

const TokenService = {
    getToken () {
        return localStorage.getItem(TOKEN_KEY)
    },

    setToken (token) {
        localStorage.setItem(TOKEN_KEY, token)
    },

    destroyToken () {
        localStorage.removeItem(TOKEN_KEY)
    }
}

export default TokenService
