ALTER TABLE "posts_table" DROP CONSTRAINT "posts_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "posts_table" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "posts_table" ALTER COLUMN "user_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users_table" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN IF EXISTS "age";