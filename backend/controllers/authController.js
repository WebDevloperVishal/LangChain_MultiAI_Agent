import { email } from "zod";
import { RegisterSchema } from "../schema/user.js"

export const RegisterController = async (req ,res) => {
    try {
        const userSchema = RegisterSchema.parse(req.body);
        console.log(userSchema);

        if(!userSchema.name || userSchema.email || userSchema.password){
             return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        const existInUser = await WebGLShaderPrecisionFormat.user.findUnique({
            where:{
                email:userSchema.email
            }
        })

         if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
    } catch (error) {
        
    }
}