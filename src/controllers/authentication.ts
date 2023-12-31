import express from 'express';
import { createUser, getUsersByEmail } from '../db/user';
import { random, authentication } from '../helpers';

export const register = async (req: express.Request, res: express.Response) => {
    try{
        const { email, password, username } = req.body;
        if(!email || !password || username){
            return res.sendStatus(400);
        }
        
        const existingUser = await getUsersByEmail(email);
        
        if(existingUser){
            return res.sendStatus(400);
        }

        const salt = random();
        const user = await createUser({
            email,
            username,
            authetication: {
                salt,
                password: authentication(salt, password)
            }
        })

        return res.sendStatus(200).json(user).end()

    }catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}