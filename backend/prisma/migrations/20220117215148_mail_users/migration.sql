/*
  Warnings:

  - You are about to drop the `Mail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Mail";

-- CreateTable
CREATE TABLE "mail" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_mails" (
    "id_user" TEXT NOT NULL,
    "id_mail" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_mails_pkey" PRIMARY KEY ("id_mail","id_user")
);

-- AddForeignKey
ALTER TABLE "users_mails" ADD CONSTRAINT "users_mails_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_mails" ADD CONSTRAINT "users_mails_id_mail_fkey" FOREIGN KEY ("id_mail") REFERENCES "mail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
