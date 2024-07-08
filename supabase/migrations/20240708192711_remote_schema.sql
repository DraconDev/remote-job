alter table "public"."job_post" add column "apply_link" character varying not null;

alter table "public"."job_post" disable row level security;


