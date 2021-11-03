//require mongoose
const mongoose = require ("mongoose");

//creating mongoose schema
const schema = mongoose.schema;

//create the new workout schema

const WorkoutSchema = new schema ({
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
const workout = mongoose.model("workout", WorkoutSchema);

//exporting the workout model
module.exports = workout;