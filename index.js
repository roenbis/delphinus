import express from 'express'
import mongoose from "mongoose"
import {registerValidation} from './validations/auth.js'
import * as UserController from './controllers/UserController.js';
import checkAuth from './utils/checkAuth.js';

mongoose
    .connect('mongodb+srv://noobilis:lOedvJdGNR8xQo8R@cluster0.klsohvi.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB err', err));

const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(1919, (err) => {
    if (err) return console.log(err);

    console.log('Server OK');
});