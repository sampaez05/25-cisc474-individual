/*
  Warnings:

  - You are about to drop the column `courseId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `assignmentId` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Authentication` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `course_id` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignment_id` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Assignment" DROP CONSTRAINT "Assignment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Assignment" DROP CONSTRAINT "Assignment_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Course" DROP CONSTRAINT "Course_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Role" DROP CONSTRAINT "Role_courseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Role" DROP CONSTRAINT "Role_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Submission" DROP CONSTRAINT "Submission_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Submission" DROP CONSTRAINT "Submission_courseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Submission" DROP CONSTRAINT "Submission_userId_fkey";

-- DropIndex
DROP INDEX "public"."Authentication_provider_providerId_idx";

-- DropIndex
DROP INDEX "public"."Course_instructor_id_idx";

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "courseId",
DROP COLUMN "userId",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "assignmentId",
DROP COLUMN "courseId",
DROP COLUMN "userId",
ADD COLUMN     "assignment_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."Role";

-- CreateIndex
CREATE UNIQUE INDEX "Authentication_userId_key" ON "Authentication"("userId");
