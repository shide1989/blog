---
title: Hello, world
date: 2026-06-19
description: The obligatory first post. What this blog is and how it's built.
---

Welcome to the blog. It's a **SvelteKit** site that prerenders to static HTML and
deploys to Cloudflare Pages — no server, no database, no cold starts.

## How posts work

Every post is a markdown file in `src/posts/`. Add a file, write some
[Markdown](https://commonmark.org/), it shows up. The frontmatter on top sets the
title, date and description:

```md
---
title: Hello, world
date: 2026-06-19
description: ...
---
```

## Code looks like this

```ts
const greet = (name: string) => `hello, ${name}`;
console.log(greet('world'));
```

That's it. Go write something.
