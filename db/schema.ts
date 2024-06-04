import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const topics = pgTable("topics", {
  id: integer("id").primaryKey(),
  title: varchar("title").notNull(),
  link: text("link").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
