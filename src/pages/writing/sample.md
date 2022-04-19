---
layout: "@/layouts/WritingPostLayout.astro"
date: "2020-04-12"
title: "Article Name"
description: "Put a short excerpt or description here. About two-ish sentences."
---

<!-- @alecdanz this is for reference on how to add an image ↓ -->

## {frontmatter.title}

### Heading

Paragraph text

**Strong paragraph text**

<img src="/adplist.png" width="718" height="440" alt="I'm mentoring designers on adplist.org" />

### Smaller images get centered, but maybe they should be left aligned?

### Let me know what you think.

<img src="https://picsum.photos/seed/1337/200/100" width="200" height="100" alt="a square image" />

By the way, you should probably use HTML `<img>` tags instead of markdown because then you can specify the width and height. Doing so helps prevent [Cumulative Layout Shift](https://web.dev/cls/) (CLS).
