-- Update the Kensei project URL to the Vercel deployment
UPDATE public.projects
SET project_url = 'https://kensei-v1-mockup.vercel.app/'
WHERE title ILIKE '%kensei%';
