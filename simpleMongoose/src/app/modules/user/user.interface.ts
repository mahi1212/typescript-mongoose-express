import { HydratedDocument, Model } from "mongoose";

// 1. creating an interface
export interface IUser {
    id: string;
    role: string;
    password: string;
    name: {
        firstName: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
}

// for making instance methods
export interface IUserMethods {
    fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<IUser[]>;
}

