---
title: Why a static blog is the right call
date: 2026-06-10
description: Prerendering beats a server for content that doesn't change per-request.
---

A blog is read-mostly text. There is no reason to boot a server, hit a database,
or pay for serverless invocations on every visit.

- **Fast** — it's just files on a CDN edge.
- **Cheap** — static hosting is effectively free.
- **Boring** — nothing to break at 3am.

Prerender everything, cache forever, move on with your life.
