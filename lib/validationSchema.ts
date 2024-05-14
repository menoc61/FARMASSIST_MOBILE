import * as z from 'zod';

// Validation schema for the login form
export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

// Validation schema for the signup form
export const signupFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  confirmPassword: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  phoneNumber: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  address: z.string().min(1, {
    message: 'Please enter your address.',
  }),
  enableNotifications: z.boolean(),
  accountType: z.enum(['admin', 'individual', 'enterprise']),
  profilePicture: z.string(), // Assuming profile picture is a URL to the image
  tos: z.boolean().refine((value) => value, {
    message: 'You must accept the terms & conditions',
  }),
});


export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type SignupFormSchema = z.infer<typeof signupFormSchema>;
