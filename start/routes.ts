/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// question routes
router.post('/api/question', '#controllers/questions_controller.add')
router.get('/api/questions', '#controllers/questions_controller.getAll')

// feedback routes
router.post('/api/feedback', '#controllers/feedback_controller.add')
router.get('/api/feedbacks', '#controllers/feedback_controller.getAll')