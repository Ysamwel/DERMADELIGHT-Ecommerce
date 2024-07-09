import express from 'express';
import { User } from '../models/users';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const { userName, email, password, phone, street, isAdmin, apartment, zip, city, country } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);

        const user = new User({
            userName,
            email,
            passwordHash,
            phone,
            street,
            isAdmin,
            apartment,
            zip,
            city,
            country,
        });

        const newUser = await user.save();

        res.json({
            success: true,
            message: "Successfully created a new user!",
            user: newUser
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-passwordHash');
        res.json({
            success: true,
            users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-passwordHash');
        res.json({
            success: true,
            user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { userName, email, passwordHash, phone, street, isAdmin, apartment, zip, city, country } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                userName,
                email,
                passwordHash,
                phone,
                street,
                isAdmin,
                apartment,
                zip,
                city,
                country,
            },
            { new: true }
        );

        res.json({
            success: true,
            user
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (deletedUser) {
            res.json({
                success: true,
                message: 'Successfully deleted user'
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/get/count', async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.send({
            userCount
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const secret = process.env.secret;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('User not found');
        }

        const validPassword = bcrypt.compareSync(password, user.passwordHash);
        if (user && validPassword) {
            const token = jwt.sign(
                {
                    userId: user.id,
                    isAdmin: user.isAdmin
                },
                secret,
                { expiresIn: '1d' }
            );

            res.status(200).send({
                message: 'Successfully logged in...',
                user: user.email,
                token
            });
        } else {
            res.status(400).send('Invalid credentials.');
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { userName, email, password, phone, isAdmin, street, apartment, zip, city, country } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);

        const user = new User({
            userName,
            email,
            passwordHash,
            phone,
            isAdmin,
            street,
            apartment,
            zip,
            city,
            country
        });

        const newUser = await user.save();

        res.json({
            success: true,
            message: "Successfully registered as a new user!",
            user: newUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

export default router;
