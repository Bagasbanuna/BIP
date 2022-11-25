/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Kelengkapan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ktp` VARCHAR(191) NOT NULL,
    `selfie` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Kelengkapan_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_phoneNumber_key` ON `User`(`phoneNumber`);
