import { Request, Response } from 'express';
import User from '../models/user.model';
import { IUser } from '../types/user';

const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body as Pick<IUser, 'username' | 'password'>;

    const user: IUser = new User({
      username: body.username,
      password: body.password,
    });

    const newUser = await user.save();
    res.status(201).json({
      message: 'User created',
      user: newUser,
    });
  } catch (error) {
    throw error;
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedUser: IUser | null = await User.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({
      message: 'User Updated',
      user: updatedUser,
    });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: 'User deleted',
      user: deletedUser,
    });
  } catch (error) {
    throw error;
  }
};

export {createUser, updateUser, deleteUser};
