#read file 
Nextjs crud operation
-Nextjs operation using prisma,mysql, and shadcn.

-Next step
- install all required packages using npm install
- create your schema and push it to the database use following command
 
 npx prisma init

 -Then fill .env file wity your creditials

-Then create database schema use following command
 
 npx prisma db push

 -Then generate clases of the prisma using following command

 npx prisma generate

 -Then migrate the prisma models using following command

 npx prisma migrate dev

 -When you migrate the prisma model database it will ask you migration name and you need to put model name or table name for example:

 users

 -After that you will check your migration model to create tables success on the database.

* finally, run your application using npm run dev.
