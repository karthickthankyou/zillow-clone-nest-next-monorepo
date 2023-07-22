-- CreateEnum
CREATE TYPE "LocationStatsType" AS ENUM ('city', 'state');

-- CreateTable
CREATE TABLE "LocationStats" (
    "id" SERIAL NOT NULL,
    "totalHomes" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "priceSqft" INTEGER NOT NULL,
    "type" "LocationStatsType" NOT NULL,

    CONSTRAINT "LocationStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BedPrice" (
    "id" SERIAL NOT NULL,
    "avg" INTEGER NOT NULL,
    "beds" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "sqftAvg" INTEGER NOT NULL,
    "locationStatsId" INTEGER NOT NULL,

    CONSTRAINT "BedPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BedPrice" ADD CONSTRAINT "BedPrice_locationStatsId_fkey" FOREIGN KEY ("locationStatsId") REFERENCES "LocationStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
