/* eslint-disable @typescript-eslint/no-unused-vars */
import connectDB from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextResponse,NextRequest } from 'next/server'
import bcryptjs from  'bcryptjs'
import jwt from 'jsonwebtoken'

connectDB()


export async function POST(request:NextRequest){
try {
    const reqBody= await request.json()
    const{username,email,phoneNo,address,password} = reqBody
    console.log(reqBody)

    //check if user already exists
    const existingUser = await User.findOne({email})

    if(existingUser){
        return NextResponse.json(
            {error:"User already exists"},
            {status:400}
        )
    }

    //hash password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    //create new user
    const newUser= new User({

        username,
        email,
        phoneNo,
        address,
        password:hashedPassword
    })

    const savedUser= await newUser.save()
    console.log(savedUser)

    return NextResponse.json({
        message:"User created Successfully",
        sucess:true,
        status:201 }
    )
} catch (error:any) { 
    console.error('Validation errors:', error.errors);  // Log specific error details
    return NextResponse.json(
        { error: error.message || 'Server error' },
        { status: 500 }
)
}
}
