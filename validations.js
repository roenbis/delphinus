import { body } from "express-validator";

export const loginValidation = [
    body('email', 'Incorrect format email').isEmail(),
    body('password', 'Password must be minimum 5 symbols').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Incorrect format email').isEmail(),
    body('fullName', 'Incorrect Name').isLength({ min: 3 }),
    body('password', 'Password must be minimum 5 symbols').isLength({ min: 5 }),
    body('avatarUrl', 'Wrong link').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Wrong title').isLength({min: 3}).isString(),
    body('text', 'Wrong text').isLength({min: 3}).isString(),
    body('tags', 'Wrong tag').isString(),
    body('imageUrl', 'Wrong link').optional().isString(),
];