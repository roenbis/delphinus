import express from 'express'
import mongoose from "mongoose"
import {registerValidation, loginValidation, postCreateValidation} from './validations.js'
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';
import checkAuth from './utils/checkAuth.js';

mongoose
    .connect('mongodb+srv://noobilis:lOedvJdGNR8xQo8R@cluster0.klsohvi.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB err', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts', PostController.update);

app.listen(1919, (err) => {
    if (err) return console.log(err);

    console.log('Server OK');
});