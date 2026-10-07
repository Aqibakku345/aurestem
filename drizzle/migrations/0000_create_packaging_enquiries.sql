CREATE TABLE public.packaging_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 company text NOT NULL,
 country text NOT NULL,
 email text NOT NULL,
 phone text NOT NULL DEFAULT '',
 industry text NOT NULL,
 packaging_requirement text NOT NULL,
 message text NOT NULL,
 submission_key uuid NOT NULL UNIQUE
);
GRANT ALL ON public.packaging_enquiries TO service_role;
ALTER TABLE public.packaging_enquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.packaging_enquiries IS 'Private B2B enquiries. Validated public server function permits inserts only; no visitor reads.';