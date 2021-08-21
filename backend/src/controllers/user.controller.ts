import { Request, Response } from 'express';
import User from '../models/user.model';
import { IUser } from '../types/user';
import jwt from 'jsonwebtoken';

const createUser = async (req: Request, res: Response) => {
  try {
    // READ ABOUT PICK!!
    const { username, email, password } = req.body as IUser;

    const user: IUser = new User({
      username,
      email,
      password,
    });

    const newUser = await user.save();
    res.status(201).json({
      message: 'User created',
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error creating user',
      error: error,
    });
  }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body as Pick<IUser, 'email' | 'password'>;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json('User not found');
      return;
    }
    if (password !== user.password) {
      res.status(401).json({
        accessToken: null,
        message: 'invalid password',
      });
      return;
    }

    // todo: save secret in a config file later
    const token = jwt.sign({ id: user._id }, 'a-secret-string', {
      expiresIn: 86400,
    });
    res.status(200).json({
      id: user._id,
      username: user.username,
      accessToken: token,
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: 'error login user',
      error: error,
    });
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
    res.status(500).json({
      message: 'error updating user',
      error: error,
    });
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
    res.status(500).json({
      message: 'error deleting user',
      error: error,
    });
  }
};

export { createUser, loginUser, updateUser, deleteUser };
