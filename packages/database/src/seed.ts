import { prisma } from "./client";
import path from "path";
import fs from "fs";
import type { User, Grade, Course, Assignment, Submission, Feedback } from "../generated/client";
import type usersData from "./seed-data/users.json";

/*const DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    name: "Tim Apple",
    email: "tim@apple.com",
  },
] as Array<Partial<User>>; */

const DEFAULT_USERS = loadJSON<any[]>("users.json");
const DEFAULT_COURSES = loadJSON<any[]>("courses.json");
const DEFAULT_GRADES = loadJSON<any[]>("grades.json");
const DEFAULT_ASSIGNMENTS = loadJSON<any[]>("assignments.json");
const DEFAULT_SUBMISSIONS = loadJSON<any[]>("submissions.json");
const DEFAULT_FEEDBACK = loadJSON<any[]>("feedback.json");

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user:User) =>
        prisma.user.upsert({
          where: {
            id: user.id,
            school_id: user.school_id,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        })
      )
    );
    await Promise.all(
      DEFAULT_COURSES.map((course:Course) =>
        prisma.course.upsert({
          where: {
            id: course.id,
          },
          update: {
            ...course,
          },
          create: {
            ...course,
          },
        })
      )
    );
    await Promise.all(
      DEFAULT_GRADES.map((grade:Grade) =>
        prisma.grade.upsert({
          where: {
            id: grade.id,
          },
          update: {
            ...grade,
          },
          create: {
            ...grade,
          },
        })
      )
    );
    await Promise.all(
      DEFAULT_ASSIGNMENTS.map((assignment:Assignment) =>
        prisma.assignment.upsert({
          where: {
            id: assignment.id,
          },
          update: {
            ...assignment,
          },
          create: {
            ...assignment,
          },
        })
      )
    );
    await Promise.all(
      DEFAULT_SUBMISSIONS.map((submission:Submission) =>
        prisma.submission.upsert({
          where: {
            id: submission.id,
          },
          update: {
            ...submission,
          },
          create: {
            ...submission,
          },
        })
      )
    );
    await Promise.all(
      DEFAULT_FEEDBACK.map((feedback:Feedback) =>
        prisma.feedback.upsert({
          where: {
            id: feedback.id,
          },
          update: {
            ...feedback,
          },
          create: {
            ...feedback,
          },
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

// loads JSON file to be seeded in
function loadJSON<T>(filename: string) {
  const filePath = path.join(__dirname,"seed-data", filename) 
      //builds the full file path using just the file name (ex. users.json)
  return JSON.parse(fs.readFileSync(filePath,"utf-8"));
      //utf-8 makes function return a string
      //JSON.parse converts string into JavaScript
}

