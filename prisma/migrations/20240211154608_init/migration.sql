-- CreateTable
CREATE TABLE "Break" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BreakTime" (
    "id_pause" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,
    "breakId" INTEGER NOT NULL,
    CONSTRAINT "BreakTime_breakId_fkey" FOREIGN KEY ("breakId") REFERENCES "Break" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Break_name_key" ON "Break"("name");
