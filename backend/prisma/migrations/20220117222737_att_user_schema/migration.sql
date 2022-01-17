/*
  Warnings:

  - A unique constraint covering the columns `[doc]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "city" TEXT,
ADD COLUMN     "doc" INTEGER,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "log" DOUBLE PRECISION,
ADD COLUMN     "street" TEXT,
ADD COLUMN     "suite" TEXT,
ADD COLUMN     "zipcode" TEXT;

-- CreateTable
CREATE TABLE "users_phones" (
    "id_user" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "users_phones_pkey" PRIMARY KEY ("id_user","phone")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_doc_key" ON "users"("doc");

-- AddForeignKey
ALTER TABLE "users_phones" ADD CONSTRAINT "users_phones_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
