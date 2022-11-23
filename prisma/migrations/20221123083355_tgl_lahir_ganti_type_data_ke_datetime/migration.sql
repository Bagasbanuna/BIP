/*
  Warnings:

  - Changed the type of `tanggalLahir` on the `profile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `tanggalLahir`,
    ADD COLUMN `tanggalLahir` DATETIME(3) NOT NULL;
