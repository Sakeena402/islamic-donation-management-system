/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Document, Types } from 'mongoose';

export interface IUser extends Document {
  username: string; // The user's name
  email: string; // Unique email address for the user
  password: string; // The hashed password for the user
  address: string; // Address provided by the user
  phoneNo: string; // Unique phone number
  role: 'Admin' | 'Donor' | 'Organizer'; // Role of the user in the system
  isVerified: boolean; // Indicates whether the user's email is verified
  status: 'Active' | 'Inactive'; // User account status
  donationHistory?: Types.ObjectId[]; // References to donations made by the user
  upgradeRequest?: {
    requestedRole: 'Organizer' | 'Organization' | null;
    status: 'Pending' | 'Approved' | 'Rejected';
    reasonForRejection?: string;
  };
  forgotPasswordToken?: string; // Token for resetting the password
  forgotPasswordTokenExpiry?: Date; // Expiry date of the forgot password token
  verifyToken?: string; // Token for email verification
  verifyTokenExpiry?: Date; // Expiry date of the verify token
  createdAt?: Date; // Automatically added by Mongoose timestamps
  updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface IAdmin {
    userId: Types.ObjectId; // Reference to the base user (Admin)
    campaignsCreated: Types.ObjectId[]; // Campaigns created by the admin
    campaignsApproved: Types.ObjectId[]; // Campaigns approved by the admin
  }

  
  export interface IOrganizer {
    userId: Types.ObjectId; // Reference to the base user (Organizer)
    campaignsRequested: Types.ObjectId[]; // Campaigns requested by the organizer
    campaignsManaged: Types.ObjectId[]; // Campaigns actively managed by the organizer
  }

  
  
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
isVerified: {
    type: Boolean,
    default: false,
},
status:{
    type:String,
    enum:['Active','Inactive'],
    default:'Active'
},
donationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }],
  upgradeRequest: {
    requestedRole: { type: String, enum: ['Organizer', 'Organization'], default: null },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    reasonForRejection: { type: String }, // Optional
  },
forgotPasswordToken: String,
forgotPasswordTokenExpiry: Date,
verifyToken: String,
verifyTokenExpiry: Date,

},{ timestamps: true })
const User = mongoose.models.user || mongoose.model('user', userSchema);



const AdminSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    campaignsCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: 'campaign' }],
    campaignsApproved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'campaign' }],
  });
  
  const Admin = mongoose.models.admin || mongoose.model('admin', AdminSchema);

  



  const OrganizerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    campaignsRequested: [{ type: mongoose.Schema.Types.ObjectId, ref: 'campaign' }],
    campaignsManaged: [{ type: mongoose.Schema.Types.ObjectId, ref: 'campaign' }], // Campaigns actively managed
  });
  
  const Organizer = mongoose.models.organizer || mongoose.model('organizer', OrganizerSchema);


  
  

export {User,Admin,Organizer} ;       


