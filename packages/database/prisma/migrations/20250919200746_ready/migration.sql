/*
  Warnings:

  - The `files` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Course" DROP COLUMN "files",
ADD COLUMN     "files" TEXT[];

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "school_id" DROP NOT NULL;
