import {z} from 'zod';

export const UsereRef = z.object({
    id: z.int(),
    name: z.string()
});
export type UsereRef = z.infer<typeof UsereRef>;

export const UserOut = z.object({
    id: z.int(),
    name: z.string(),
    email: z.string(),
    role: z.string(),
});
export type UserOut = z.infer<typeof UserOut>;

//body of requests when creating DTOs
export const UserCreateIn = z.object({
    name: z.string().min(1),
    email: z.string(),
    role: z.string(),
});
export type UserCreateIn = z.infer<typeof UserCreateIn>;

// Update DTOs (API request bodies)
export const UserUpdateIn = z.object({
    name: z.string().min(1).optional(),
    email: z.string(),
    role: z.string(),
  });
  export type UserUpdateIn = z.infer<typeof UserUpdateIn>;
  