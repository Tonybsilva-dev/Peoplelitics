/*
  Warnings:

  - You are about to drop the `PermissionsRoles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersPermissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PermissionsRoles" DROP CONSTRAINT "PermissionsRoles_id_permission_fkey";

-- DropForeignKey
ALTER TABLE "PermissionsRoles" DROP CONSTRAINT "PermissionsRoles_id_role_fkey";

-- DropForeignKey
ALTER TABLE "UsersPermissions" DROP CONSTRAINT "UsersPermissions_id_permission_fkey";

-- DropForeignKey
ALTER TABLE "UsersPermissions" DROP CONSTRAINT "UsersPermissions_id_user_fkey";

-- DropForeignKey
ALTER TABLE "UsersRoles" DROP CONSTRAINT "UsersRoles_id_role_fkey";

-- DropForeignKey
ALTER TABLE "UsersRoles" DROP CONSTRAINT "UsersRoles_id_user_fkey";

-- DropTable
DROP TABLE "PermissionsRoles";

-- DropTable
DROP TABLE "UsersPermissions";

-- DropTable
DROP TABLE "UsersRoles";

-- CreateTable
CREATE TABLE "users_permissions" (
    "id_permission" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_permissions_pkey" PRIMARY KEY ("id_permission","id_user")
);

-- CreateTable
CREATE TABLE "permissions_roles" (
    "id_permission" TEXT NOT NULL,
    "id_role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permissions_roles_pkey" PRIMARY KEY ("id_permission","id_role")
);

-- CreateTable
CREATE TABLE "users_roles" (
    "id_user" TEXT NOT NULL,
    "id_role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_roles_pkey" PRIMARY KEY ("id_role","id_user")
);

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "users_permissions_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "users_permissions_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions_roles" ADD CONSTRAINT "permissions_roles_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions_roles" ADD CONSTRAINT "permissions_roles_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
