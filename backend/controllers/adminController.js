import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'
import userModel from '../models/userModel.js'
//  api for adding doctor
const addDoctor = async (req,res)=>{
    try {
        const {name , email , password , speciality  , experience ,  degree , about , fee , address} = req.body
        const imageFile = req.file
        console.log(req.body);
        
        

        // checking for all data for doctor 
        if (!name || !email || !password || !speciality || !experience || !about || !degree || !fee ) {
            return res.json({success : false , message : 'missing Detail'})
        }

        //  validating email format
        if (!validator?.isEmail(email)) {
           return res.json({success : false , message : 'please enter a valid email'}) 
        }

        // valiadting strong password 
        if (password.length <8) {
            return res.json({success : false , message : 'please enter a strong password'})
        }

        //  hasing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        // upload image to cloudinary 
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type : "image"})
        const imageUrl = imageUpload.secure_url
        
        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fee,
            address:JSON.parse(address),
            date:Date.now()
        }

        console.log("Doctor Data:", doctorData)
        
        const newDoctor = new doctorModel(doctorData)
        // console.log(newDoctor);
        
        await newDoctor.save()

        res.json({success:true , message:"doctor added"})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:error.message})
        
    }
}


//  api for the admin login
const loginAdmin =  async (req,res) =>{
    try {
        const {email,password} = req.body
        
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)

            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid credantials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false , message:error.message})
    }
}

// api to get all doctor list 

const allDoctors = async (req,res) =>{
    try {
        const doctors = await doctorModel.find({}).select('-password')
        console.log(doctors);
        
        res.json({success:true , doctors})

    } catch (error) {
         console.log(error);
        res.json({success:false , message:error.message})
    }
}

// api to get all appointments list
const appointmentsAdmin = async (req,res) =>{
    try {
        
        const appointments = await appointmentModel.find({})
        
        res.json({success:true , appointments})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:error.message})
    }
}
// api for appointment cancellation
const appointmentCancel  = async (req,res)=>{
    try {
        const { appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)   

        await appointmentModel.findByIdAndUpdate(appointmentId , {canceled:true})

        // releasing doctor slot
        const {docId , slotDate , slotTime} = appointmentData
        const doctorData = await doctorModel.findById(docId)
        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e!== slotTime)

        await doctorModel.findByIdAndUpdate(docId , {slots_booked})

        res.json({success:true, message:"appointment cancelled"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
} 

// api to get dashboard data to admin pannel
const adminDashboard = async (req,res) =>{
    try {
        
        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors:doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppoinments : appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {addDoctor , loginAdmin , allDoctors ,adminDashboard, appointmentsAdmin , appointmentCancel}