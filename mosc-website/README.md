# MOSC Website

The Next.js site uses static export for Cloudflare Pages. When configured, it
fetches published posts from Ghost's Content API during the build and exports
the home-page listing and one static page per post. New or edited Ghost posts
appear after the site is rebuilt and redeployed.

## Connect to Ghost

The site reads published posts from a Ghost Content API during build. In the
Ghost Admin for the instance you want to use, open **Settings → Integrations**,
add an integration, and copy its **Content API Key**. Do not use the admin
password as the API key.

To load real posts from a local Ghost instance,
`mosc-website/.env.local` should contain:

```dotenv
GHOST_URL=http://localhost:8081
GHOST_CONTENT_API_KEY=your-content-api-key
```

Get the Content API key from an integration in your local Ghost Admin. Start
the local instance with Docker Compose from `ghost-cms`. If Ghost is not
running or either variable is missing, local development uses sample posts so
you can still preview the site.

Run `npm run dev` to view the site, or `npm run build` to generate the static
export in `out`. For the export to contain real posts, Ghost must be reachable
with both variables configured and have at least one published post.

The Content API key is read only during server-side rendering/build and is not
embedded in the browser bundle.

## Deploy to Cloudflare Pages

Configure `GHOST_URL` and `GHOST_CONTENT_API_KEY` as build environment
variables in Cloudflare Pages. Cloudflare cannot reach Ghost at
`http://localhost:8081` because `localhost` there means Cloudflare's own build
machine. Set `GHOST_URL` to the public URL of the Ghost instance you want to
use, and provide that instance's Content API key. Keep the key private.

Ghost must be running and reachable by the build environment. If either
variable is missing, Ghost's API request fails, or there are no published
posts, the build reports an error.

## Configure Ghost email (Gmail)

Ghost uses SMTP to send password-reset emails. For Gmail, enable 2-Step
Verification and create an App Password in your Google Account. Add these
values to the ignored `ghost-cms/.env` file. `MAIL_USER` must be the same
Google account that created the App Password. Use the App Password, not your
Google account password:

```dotenv
MAIL_USER=your-address@gmail.com
MAIL_PASSWORD=your-16-character-app-password
```

The Compose configuration uses Gmail SMTP at `smtp.gmail.com:465` with SSL.
After saving `.env`, recreate Ghost from `ghost-cms` with
`docker compose up -d --force-recreate ghost`, then request a new password
reset email. Keep the `.env` file private and never share the App Password.
