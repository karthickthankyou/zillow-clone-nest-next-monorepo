-- CreateTable
CREATE TABLE "UnwantedTable" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "UnwantedTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UnwantedTableToView" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UnwantedTableToView_AB_unique" ON "_UnwantedTableToView"("A", "B");

-- CreateIndex
CREATE INDEX "_UnwantedTableToView_B_index" ON "_UnwantedTableToView"("B");

-- AddForeignKey
ALTER TABLE "_UnwantedTableToView" ADD CONSTRAINT "_UnwantedTableToView_A_fkey" FOREIGN KEY ("A") REFERENCES "UnwantedTable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UnwantedTableToView" ADD CONSTRAINT "_UnwantedTableToView_B_fkey" FOREIGN KEY ("B") REFERENCES "View"("id") ON DELETE CASCADE ON UPDATE CASCADE;
