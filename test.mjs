import { AuthService } from './index.mjs'

AuthService.init('http://spendings.test/sanctum/token')
AuthService.login('max@izzle.org', 'mustermann', 'console')
    .then(() => {
        console.log('Logged In!')
    })
    .catch(error => {
        console.log(error)
    })
