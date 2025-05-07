# Environment Variables

This project requires the following environment variables for Supabase integration:

*   `NEXT_PUBLIC_SUPABASE_URL`: The URL of your Supabase project.
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase project's anon key.

These variables are used to initialize the Supabase client in `utils/supabase/client.ts`, `utils/supabase/server.ts`, and `utils/supabase/middleware.ts`.

To set these environment variables, create a `.env.local` file in the project root directory and add the variables in the following format:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace `your_supabase_url_here` and `your_supabase_anon_key_here` with your actual Supabase project URL and anon key.