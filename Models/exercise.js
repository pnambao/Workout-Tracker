//require mongoose
const mongoose = require ("mongoose");

//creating mongoose schema
const Schema = mongoose.Schema;

//create the new workout schema

const workoutSchema = new Schema ({
    exercises: {
        type: Array,
        required: true
    },
    
    day: {
        type: Date,
        default: Date.now()
    }
});

//Create mongoose model 'workout' and apply the workout schema to the model
const workout = mongoose.model("workout", workoutSchema);

//exporting the workout model
module.exports = workout;