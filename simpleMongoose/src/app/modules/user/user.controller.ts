import { Request, Response } from "express";
import { createUserToDB, getAllAdminUsersFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: 'success',
        data: user
    }) 
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await getUsersFromDB();
    res.json({
        status: 'success',
        data: users
    })
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserByIdFromDB(id);
    res.json({
        status: 'success',
        data: user
    })
}


export const getAdminUsers = async (req: Request, res: Response) => {
    const user = await getAllAdminUsersFromDB();
    res.json({
        status: 'success',
        data: user
    })
}
// Pattern
// Route -> Controller -> Service