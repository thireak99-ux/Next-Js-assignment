<<<<<<< HEAD
# Food Menu

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

- `/` - food list
- `/food-items/[id]` - food details
- `/about` - about page
- `/contact` - contact form with a local message preview
- Any missing URL or unknown food ID - Not Found page

The list uses https://sombobaeb.cheat.casa/food-items?skip=0&limit=100.
The detail route finds the matching ID in that same response.
The endpoint returns up to 100 foods per request.
The contact form previews a message only; it does not send email.

API requests are in `src/lib/foods.ts`. The live endpoint was unreachable
from the development environment, so its current response was not verified.
The code accepts a direct array or an `items`/`data` array, and
`name`/`title` and `image_url`/`image` fields.

TypeScript and sample-data rendering checks passed. A full production build
could not be completed here because the uploaded dependencies target Windows
and the Linux compiler download was unavailable. Run npm install on your machine.
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Next-Js-assignment
>>>>>>> 4a3a7ff8112209a8d62188e5ab2706024c0275ef
