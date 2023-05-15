import { HydratedDocument, Model, Schema, model } from "mongoose"
import { IUser, IUserMethods, UserModel } from "./user.interface"


// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

// 2. Creating schema using interface
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true,
        // unique: true
    },
    emergencyContact: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    }
})

// for making custo, static method
userSchema.static("getAdminUsers", async function getAdminUsers(){
    const admin = await this.find({role: 'admin'});
    return admin; // Add this line to return the result of the find() operation
})
// 3. Create Schema
const User = model<IUser, UserModel>('User', userSchema)


export default User;