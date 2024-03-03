import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import {validationResult} from "express-validator";

import UserModel from '../models/User.js'

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return req.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email, fullName: req.body.fullName, passwordHash: hash, avatarUrl: req.body.avatarUrl,
        });

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, 'secret', { expiresIn: '30d' });

        const { passwordHash, ...userData } = user.doc;

        res.json({
            ...userData,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Something wrong!'
        });
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return req.status(404).json({
                message: 'User not found'
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if (!isValidPass) {
            return req.status(404).json({
                message: 'Wrong email or password'
            });
        }

        const token = jwt.sign({
            _id: user._id,
        }, 'secret', { expiresIn: '30d' });

        const { passwordHash, ...userData } = user.doc;

        res.json({
            ...userData,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Something wrong!'
        });
    };
};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const { passwordHash, ...userData } = user.doc;

        res.json({
            ...userData,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Access denied'
        });
    }
};