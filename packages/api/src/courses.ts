import {z} from 'zod';

export const CourseRef = z.object({
    id: z.int(),
    title: z.string()
});
export type CourseRef = z.infer<typeof CourseRef>;

export const CourseOut = z.object({
    id: z.int(),
    title: z.string(),
    description: z.string(),
    instructor_id: z.int()
});
export type CourseOut = z.infer<typeof CourseOut>;

//body of requests when creating DTOs
export const CourseCreateIn = z.object({
    title: z.string().min(1),
    description: z.string(),
    instructor_id: z.int(),
});
export type CourseCreateIn = z.infer<typeof CourseCreateIn>;

// Update DTOs (API request bodies)
export const CourseUpdateIn = z.object({
    title: z.string().min(1).optional(),
    description: z.string(),
    instructor_id: z.int().optional(),
  });
  export type CourseUpdateIn = z.infer<typeof CourseUpdateIn>;

  //body of requests when deleting DTOs
export const CourseDeleteIn = z.object({
    title: z.string().min(1),
    id: z.number(),
});
export type CourseDeleteIn = z.infer<typeof CourseDeleteIn>;
  