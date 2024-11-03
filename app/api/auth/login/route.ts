/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import connectDB from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextResponse,NextRequest } from 'next/server'
import bcryptjs from  'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from 'process'
connectDB()


export async function POST(request:NextRequest){
try {
    const reqBody= await request.json()
    const{email,password} = reqBody
    console.log(reqBody)

    
    const user = await User.findOne({email})

    if(!user){
        return NextResponse.json(
            {error:"User doesn't exists"},
            {status:400}
        )
    }
        //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password)
    if(!validPassword){
        return NextResponse.json({error: "Invalid password"}, {status: 400})
    }
    console.log(user);

//create token 
    const tokenData={
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role
    }
    const token =await jwt.sign(tokenData,process.env.JWT_SECRET_KEY!,{expiresIn:'1d'})

   const response= NextResponse.json({
        message:"User login Successfully",
        sucess:true,
        status:201 }
    )
    response.cookies.set("token",token,{
        httpOnly:true,
    })
    return response
} catch (error:any) { 
    console.error('Validation errors:', error.errors);  // Log specific error details
    return NextResponse.json(
        { error: error.message || 'Server error' },
        { status: 500 }
)
}
}
