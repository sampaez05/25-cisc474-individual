import {z} from 'zod';

export const AssignmentRef = z.object({
    id: z.uuid(),
    title: z.string()
});
export type AssignmentRef = z.infer<typeof AssignmentRef>;

export const AssignmentOut = z.object({
    id: z.uuid(),
    title: z.string(),
    description: z.string().nullable(),
    due_date: z.iso.datetime(),
    instructor: z.uuid()
});
export type AssignmentOut = z.infer<typeof AssignmentOut>;

//body of requests when creating DTOs
export const AssignmentCreateIn = z.object({
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    due_date: z.iso.datetime(),
    instructor: z.uuid(),
});
export type AssignmentCreateIn = z.infer<typeof AssignmentCreateIn>;

// Update DTOs (API request bodies)
export const AssignmentUpdateIn = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional().nullable(),
    due_date: z.iso.datetime(),
    instructor: z.uuid().optional(),
  });
  export type AssignmentUpdateIn = z.infer<typeof AssignmentUpdateIn>;
  