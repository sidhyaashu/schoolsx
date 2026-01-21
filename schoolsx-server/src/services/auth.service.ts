import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../config/db.js';
import { users, type NewUser, type User } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { config } from '../config/env.js';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export class AuthService {
    async register(data: { email: string; password: string; name: string; role?: User['role'] }) {
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, data.email),
        });

        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser: NewUser = {
            email: data.email,
            passwordHash: hashedPassword,
            name: data.name,
            role: data.role || 'student',
        };

        const [createdUser] = await db.insert(users).values(newUser).returning();

        if (!createdUser) {
            throw new Error('Failed to create user');
        }

        const token = this.generateToken(createdUser.id, createdUser.role);

        // Exclude passwordHash from response
        const { passwordHash, ...userWithoutPassword } = createdUser;

        return { user: userWithoutPassword, token };
    }

    async login(data: { email: string; password: string }) {
        const user = await db.query.users.findFirst({
            where: eq(users.email, data.email),
        });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.passwordHash);

        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const token = this.generateToken(user.id, user.role);
        const { passwordHash, ...userWithoutPassword } = user;

        return { user: userWithoutPassword, token };
    }

    private generateToken(userId: number, role: string) {
        return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '1d' });
    }
}

export const authService = new AuthService();
