-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "quantity" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
