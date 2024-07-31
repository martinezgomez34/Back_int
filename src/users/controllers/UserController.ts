import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const loginUser= async (req: Request, res: Response) => {
  const { first_name, password } = req.body;
  try {
    const token = await userService.login(first_name, password);

    if (!token) {
      res.status(401).json({ message: 'Invalid full name or password' });
    }else{
      res.status(200).json({ token });
    }

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const getUsers= async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser();
    if(users){
      res.status(201).json(users);
    }else{
      res.status(404).json({ message: 'Sin registros' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(parseInt(req.params.user_id, 10));
    if(user){
      res.status(201).json(user);
    }else{
      res.status(404).json({ message: 'No se encontró el usuario' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserByName = async (req: Request, res: Response) => {
  try {
    const first_name = req.params.first_name;
    
    const user = await userService.getUserByName(first_name);
    
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(404).json({ message: 'No se encontró el usuario' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.addUser(req.body);
    if(newUser){
      res.status(201).json(newUser);
    }else{
      res.status(404).json({ message: 'Algo salio mal' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.modifyUserr(parseInt(req.params.user_id, 10), req.body);
    if(updatedUser){
      res.status(201).json(updatedUser);
    }else{
      res.status(404).json({ message: 'Algo salio mal' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await userService.deleteEmployee(parseInt(req.params.user_id, 10));
    if(deleted){
      res.status(201).json({ message: 'Se eliminó el usuario.' });
    }else{
      res.status(404).json({ message: 'Algo salio mal' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};