alter table "public"."job_post" add column "logo_path" character varying;

CREATE UNIQUE INDEX job_post_id_key ON public.job_post USING btree (id);

alter table "public"."job_post" add constraint "job_post_id_key" UNIQUE using index "job_post_id_key";


