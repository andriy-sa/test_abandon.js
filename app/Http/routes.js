'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', function * (request, response) {
  response.send('This is the home page')
})

Route.group('api', function () {

  Route.post('login','AuthContorller.login')

  Route.get('user/get_list','UserController.get_list')
  Route.get('user/:id','UserController.find').middleware(['auth','test'])
}).prefix('api')

