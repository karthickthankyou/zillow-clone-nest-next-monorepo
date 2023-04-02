/*
  Warnings:

  - You are about to drop the `UnwantedTable` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UnwantedTableToView` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UnwantedTableToView" DROP CONSTRAINT "_UnwantedTableToView_A_fkey";

-- DropForeignKey
ALTER TABLE "_UnwantedTableToView" DROP CONSTRAINT "_UnwantedTableToView_B_fkey";

-- DropTable
DROP TABLE "UnwantedTable";

-- DropTable
DROP TABLE "_UnwantedTableToView";
