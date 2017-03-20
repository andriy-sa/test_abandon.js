'use strict'

class Auth {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    let user = yield request.auth.getUser()
    if(user){
      yield next
    }else{
      yield response.unauthorized('Login before this request')
    }
  }

}

module.exports = Auth
