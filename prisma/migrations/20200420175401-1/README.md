# Migration `20200420175401-1`

This migration has been generated by abazsh3 at 4/20/2020, 5:54:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `NadFb1cArf`.`User` (
    `EquipmentResult` Decimal(65,30)   ,
    `companyName` varchar(191) NOT NULL  ,
    `email` varchar(191) NOT NULL  ,
    `fullName` varchar(191) NOT NULL  ,
    `id` int NOT NULL  AUTO_INCREMENT,
    `password` varchar(191) NOT NULL  ,
    `post` varchar(191) NOT NULL  ,
    `pp1Result` Decimal(65,30)   ,
    `pp2Result` Decimal(65,30)   ,
    `token` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `User.email` ON `NadFb1cArf`.`User`(`email`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200420131214-init..20200420175401-1
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
     provider = "mysql"
-    url = "***"
+    url= "mysql://NadFb1cArf:IXqVBKJVyo@remotemysql.com:3306/NadFb1cArf"
 }
 model User {
   id        Int      @default(autoincrement())@id
   fullName      String
```


