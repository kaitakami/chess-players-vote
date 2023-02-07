# Vote for your favorite chess player

## What is this?

This is a simple application to vote for your favorite chess player. (live-blitz)

I used the chess.com api to fetch the data.

### Tech stack (T3)

- Tailwindcss
- TRPC
- Prisma
- Nextjs

### Extra

- Headlessui for the animation

### Database

- Supabase

### Things to improve

- The results page fetch all the players info from the database every time it's visited. A better approach could be to use static rendering with Nextjs(getStaticProps).

- The actual players table contains just 50 players (leaderboard top 50).

- The animation just works when the next players haven't been fetched. This isn't necessarily bad but for some people can be annoying.

## Preview
