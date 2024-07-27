alter table "public"."companies" drop column "billing_email";

alter table "public"."companies" drop column "description";

alter table "public"."companies" drop column "email";

alter table "public"."companies" drop column "logo_url";

alter table "public"."companies" drop column "name";

alter table "public"."companies" drop column "website";

alter table "public"."companies" add column "company_billing_email" character varying;

alter table "public"."companies" add column "company_description" text;

alter table "public"."companies" add column "company_email" character varying not null;

alter table "public"."companies" add column "company_logo_url" character varying;

alter table "public"."companies" add column "company_name" character varying not null;

alter table "public"."companies" add column "company_website" character varying;

alter table "public"."job_post" drop column "apply_link";


