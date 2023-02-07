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

![image](https://user-images.githubusercontent.com/83680466/217139006-5e1aa7dc-fb28-4a5e-bbbc-b3604ab25a89.png)

![image](https://user-images.githubusercontent.com/83680466/217139075-32a3f28d-5ae4-4760-98c6-1068a78615af.png)

