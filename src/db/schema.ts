import {
  mysqlTable,
  serial,
  varchar,
  timestamp,
  mysqlEnum,
  
} from 'drizzle-orm/mysql-core';


export const users = mysqlTable("users",{
  id : serial().primaryKey().autoincrement(),
  username : varchar({length:50}).notNull().unique(),
  // validate the email in backend using zod for email format
  email : varchar({length:80}).notNull().unique(),
  password : varchar({length:80}).notNull(),
  createdAt : timestamp().defaultNow(),
  role : mysqlEnum(["SuperAdmin","Admin","Student"]).notNull()
})

