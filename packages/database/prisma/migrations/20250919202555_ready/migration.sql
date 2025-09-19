/*
  Warnings:

  - You are about to drop the column `student_id` on the `Grade` table. All the data in the column will be lost.
  - Added the required column `school_id` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Grade" DROP COLUMN "student_id",
ADD COLUMN     "school_id" INTEGER NOT NULL;
