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
