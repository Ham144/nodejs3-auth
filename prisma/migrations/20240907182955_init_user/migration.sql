-- CreateTable
CREATE TABLE "users" (
    "username" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(200) NOT NULL,
    "lastname" VARCHAR(200) NOT NULL,
    "phone" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" SERIAL NOT NULL,
    "street" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "province" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "postalCode" VARCHAR(8) NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
