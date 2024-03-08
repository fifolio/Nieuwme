import { ZodType, z } from 'zod';
import { loginTypes, signupTypes } from '@/types/formTypes';

export const signupSchema: ZodType<signupTypes> = z.object({
    username: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})

export const loginSchema: ZodType<loginTypes> = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
})