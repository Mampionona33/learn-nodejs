-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "photo" TEXT,
    "quantity" INTEGER,
    "category" TEXT NOT NULL,
    "supplier" TEXT NOT NULL
);
INSERT INTO "new_Product" ("category", "description", "id", "name", "photo", "price", "quantity", "supplier") SELECT "category", "description", "id", "name", "photo", "price", "quantity", "supplier" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
