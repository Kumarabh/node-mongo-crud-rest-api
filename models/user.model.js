import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: [true, 'Please add a firstName'],
    },
    lastName: {
        type: String,
        required: [true, 'Please add a lastName'],
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Please add a date of birth'],
    },
    gender: {
        type: String,
        required: [true, 'Please add a gender'],
    },
    contact: {
         type: String,
         required: [true, 'Please add a contact'],
         unique: true
    }
})

export default mongoose.model('User', userSchema);
