const User = use('App/Model/User')

class UserController {

  * get_list (request, response) {
    let limit = request.input('limit',10)
    let page = request.input('page',1)

    let users =  yield User.paginate(page,limit)
    yield response.json(users)
  }

  * find (request, response){
    let id = request.param('id')

    let user = yield User.find(id)
    if(!user){
      return response.status(404).json({})

    }
    return  response.json(user)
  }

}
module.exports = UserController
