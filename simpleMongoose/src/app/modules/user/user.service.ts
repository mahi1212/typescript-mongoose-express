import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // creating new user
    const user = new User(payload)
    await user.save();
    console.log(user.fullName())
    user.fullName() // build custom instance methods -> only used when we create a data
    return user;
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, {
        // for only giving name and contact
        name: 1,
        contactNo: 1
    });
    return user;
} 

export const getAllAdminUsersFromDB = async (): Promise<IUser[]> => {
    const admins = await User.getAdminUsers();
    console.log(admins)
    return admins;
}