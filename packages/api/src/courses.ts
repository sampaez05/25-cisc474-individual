import {z} from 'zod';

export const CourseRef = z.object({
    id: z.uuid(),
    title: z.string()
});
export type CourseRef = z.infer<typeof CourseRef>;

export const CourseOut = z.object({
    id: z.uuid(),
    title: z.string(),
    description: z.string().nullable(),
    instructor: z.uuid()
});
export type CourseOut = z.infer<typeof CourseOut>;

//body of requests when creating DTOs
export const CourseCreateIn = z.object({
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    instructor: z.uuid(),
});
export type CourseCreateIn = z.infer<typeof CourseCreateIn>;

// Update DTOs (API request bodies)
export const CourseUpdateIn = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional().nullable(),
    instructor: z.uuid().optional(),
  });
  export type CourseUpdateIn = z.infer<typeof CourseUpdateIn>;
  