# Izzle Sanctum Js Client Lib

> Simple Lib, based on Laravel Sanctum Authorization

## Installation

> Using npm:
 ```shell
 $ npm i -g npm
 $ npm i @izzle-org/sanctum-client
 ```

## Usage

> Login:
```js
import { AuthService } from '@izzle-org/sanctum-client'

AuthService.init('https://api.foo.bar/sanctum/token')
AuthService.login('max', 'foobar', 'iPhone')
    .then(() => {
        // Success
    })
    .catch(error => {
       // Handle Error
       console.log(error)
    })
```

> Check Auth:
```js
import { AuthService } from '@izzle-org/sanctum-client'

if (AuthService.loggedIn()) {
    // Logged In
}
```

## License

Copyright (c) 2020-present Daniel Böhmer

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
