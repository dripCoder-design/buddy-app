const express = require('express')
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} =require('../controllers/workoutController')  
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

//GET all workouts
router.get('/',getWorkouts) 

//GET single workouts
router.get('/:id', getWorkout)

//POST a new workout
router.post('/',createWorkout)
 
//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)
module.exports = router 