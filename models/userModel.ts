/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'


const userSchema= new mongoose.Schema({
username:{
    type:String,
    required:[true,'Please enter your name'],
},
email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
   // match: [/.+@.+\..+/, 'Please enter a valid email address'], 
   // maxlength: [50, 'Email cannot be longer than 50 characters']
},
password: {
    type: String,
    required: [true, 'Please enter your password'],
   
    // validate: {
    //     validator: function(value:string) {
    //         // Password must contain at least one uppercase, one lowercase, one number, and one special character
    //         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    //     },
    //     message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    // }
},

address: {
    type: String,
    required: [true, 'Please enter your address'],
    trim: true 
},
phoneNo: {
    type: String,
    required: [true, 'Please enter your phone number'],
    unique: true,
  //  match: [/^\d{10,15}$/, 'Phone number must be between 10 and 15 digits'], // Ensures phone number has only digits and is the correct length
    // validate: {
    //     validator: function(value:string) {
    //         // Check for any unwanted characters (only digits allowed)
    //         return /^\d+$/.test(value);
    //     },
    //     message: 'Phone number must contain only digits'
    // }
},
role: {
    type: String,
    enum: ['Admin', 'Donor', 'Organizer'],
    default: 'Donor',
    required: [true, 'Please specify a role']
},
isVerfied: {
    type: Boolean,
    default: false,
},
status:{
    type:String,
    enum:['Active','Inactive'],
    default:'Active'
},
forgotPasswordToken: String,
forgotPasswordTokenExpiry: Date,
verifyToken: String,
verifyTokenExpiry: Date,

})
const User = mongoose.models.user || mongoose.model('user', userSchema);
export default User;