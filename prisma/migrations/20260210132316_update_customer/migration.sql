/*
  Warnings:

  - You are about to alter the column `expired_date` on the `customer_tasks` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expired_date` on the `transaction_records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `approved_date` on the `withdrawals` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[user_name]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `customer_tasks` MODIFY `expired_date` DATETIME NULL;

-- AlterTable
ALTER TABLE `transaction_records` MODIFY `expired_date` DATETIME NULL;

-- AlterTable
ALTER TABLE `withdrawals` MODIFY `approved_date` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `customers_user_name_key` ON `customers`(`user_name`);
