CREATE TABLE IF NOT EXISTS "topics" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"link" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
