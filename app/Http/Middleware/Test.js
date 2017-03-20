'use strict'

class Test {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    //console.log('test middleware')
    yield next
  }

}

module.exports = Test
