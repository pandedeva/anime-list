/*
  Warnings:

  - Added the required column `user_profile` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `user_profile` VARCHAR(191) NOT NULL;
