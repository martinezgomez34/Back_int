import { Router } from 'express';
import { createCategory, deleteCategory, updateCategory, getCategories, getCategoryById } from '../controller/categoryController';
import { authMiddleware } from '../../shared/middlewares/auth';

const CategoryRoutes: Router = Router();

CategoryRoutes.get('/', getCategories);
CategoryRoutes.get('/:category_id', authMiddleware,getCategoryById);
CategoryRoutes.post('/', createCategory);
CategoryRoutes.put('/:category_id', authMiddleware, updateCategory);
CategoryRoutes.delete('/:category_id',authMiddleware, deleteCategory);

export default CategoryRoutes;