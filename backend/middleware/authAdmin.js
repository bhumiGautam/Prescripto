import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = async (req,res,next)=>{
    try {
        
        const {atoken} = req.headers
        
        console.log(req.headers);
        
        if (!atoken) {
            return res.json({success:false, message:"not authorize"})
        }
        const tokenDecode = jwt.verify(atoken,process.env.JWT_SECRET)
        if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            res.json({success:false,message:"not authorize"})
        }
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

export default authAdmin;