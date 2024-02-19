/*
  Warnings:

  - You are about to drop the column `duracao` on the `BreakTime` table. All the data in the column will be lost.
  - Added the required column `duration` to the `BreakTime` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BreakTime" (
    "id_pause" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "breakId" INTEGER NOT NULL,
    CONSTRAINT "BreakTime_breakId_fkey" FOREIGN KEY ("breakId") REFERENCES "Break" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_BreakTime" ("breakId", "id_pause", "time") SELECT "breakId", "id_pause", "time" FROM "BreakTime";
DROP TABLE "BreakTime";
ALTER TABLE "new_BreakTime" RENAME TO "BreakTime";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
