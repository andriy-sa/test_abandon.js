'use strict'
const User = use('App/Model/User')

class AuthContorller {
  * login (request, response){
    let email = request.input('email')
    let password = request.input('password')
    console.log(email,password)
    try {
      const token = yield request.auth.attempt(email, password)

      const user = yield User.query().where('email',email).first()
      yield response.json({
        'token': token,
        'user': user
      })
    } catch (e) {
      yield response.unauthorized({error: e.message})
    }
  }
}

module.exports = AuthContorller
