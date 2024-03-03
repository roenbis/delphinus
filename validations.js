import { body } from "express-validator";

export const registerValidation = [
    body('email', 'Incorrect format email').isEmail(),
    body('fullName', 'Incorrect Name').isLength({ min: 3 }),
    body('password', 'Password must be minimum 5 symbols').isLength({ min: 5 }),
    body('avatarUrl', 'Wrong link').optional().isURL(),
];