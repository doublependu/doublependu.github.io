# Trying out Github pages and Jekyll

The site lives in [`docs/`](docs) and is published by GitHub Pages from that
folder. It uses [beautiful-jekyll](https://github.com/daattali/beautiful-jekyll)
as a remote theme, pinned in `docs/_config.yml`.

## Local setup

```shell
cd docs
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000>. Add `--drafts` to preview anything in
`docs/_drafts/`.

## Add Blog

Post scaffolding comes from
[jekyll-compose](https://github.com/jekyll/jekyll-compose). Run everything from
inside `docs/`.

1. **Create the post.**

   ```shell
   cd docs
   bundle exec jekyll post "Midjourney to Blender in One Afternoon"
   ```

   This writes `_posts/2026-09-09-midjourney-to-blender-in-one-afternoon.md`,
   pre-filled from the `jekyll_compose.default_front_matter` block in
   `_config.yml`:

   ```yaml
   ---
   layout: post
   title: Midjourney to Blender in One Afternoon
   date: 2026-09-09 18:20 +1000
   subtitle:
   categories: blog
   tags: []
   cover-img:
   thumbnail-img:
   ---
   ```

2. **Fill in the front matter.** Empty keys are `nil` and the theme skips them,
   so delete the lines you don't need.

   | Key | What it does |
   | --- | --- |
   | `subtitle` | Grey line under the title, on the post and in the feed |
   | `categories` | Keep as `blog` — it's part of the URL (see note below) |
   | `tags` | e.g. `[ai, blender, gamedev]`. Feeds the [Tags](docs/tags.html) page |
   | `cover-img` | Full-width banner, e.g. `"/assets/images/dragon.jpg"` |
   | `thumbnail-img` | Small image beside the excerpt on the home page |

3. **Add images** to `docs/assets/images/` and reference them from the site
   root:

   ```markdown
   ![dragon](/assets/images/dragon.jpg){: width="512"}
   ```

4. **Write the post**, then preview it with `bundle exec jekyll serve`.

The first paragraph becomes the excerpt on the home page, so open with something
that stands on its own.

### Drafts

To start something without publishing it:

```shell
bundle exec jekyll draft "A Half Baked Idea"     # → _drafts/a-half-baked-idea.md
bundle exec jekyll serve --drafts                # preview it
bundle exec jekyll publish _drafts/a-half-baked-idea.md
```

`publish` moves the file into `_posts/` and stamps it with today's date.
`bundle exec jekyll unpublish _posts/<file>.md` moves it back.

### A note on URLs

Posts resolve to `/blog/<year>/<month>/<day>/<slug>.html`, built from
`categories: blog` plus the date and slug **in the filename**. Two consequences:

- Dropping or changing `categories` changes the URL.
- Renaming a published post's file breaks its existing links. Change the
  `title:` in the front matter instead — that's just display text.

## Add Page

A page is undated, stays out of the blog feed and the RSS feed, and is navigated
to directly — About, Tags, 404. See the
[Jekyll docs](https://jekyllrb.com/docs/pages/) for the underlying distinction.

1. **Create the page** at the root of `docs/`:

   ```shell
   cd docs
   bundle exec jekyll page "Uses"
   ```

   This writes `docs/uses.md` with a minimal header:

   ```yaml
   ---
   layout: page
   title: Uses
   ---
   ```

   Unlike `jekyll post`, this command ignores `default_front_matter`, so add the
   rest by hand:

   ```yaml
   ---
   layout: page
   title: Uses
   subtitle: The hardware and software I actually run
   permalink: /uses/
   ---
   ```

   Without `permalink`, the page is served at `/uses.html` (its file path).
   With it, you get the tidier `/uses/`.

2. **Add it to the nav bar** in `_config.yml`:

   ```yaml
   navbar-links:
     Posts: "/"
     Tags: "tags"
     About: "about"
     Uses: "uses"
   ```

   Config changes are not hot-reloaded — restart `jekyll serve` to see them.

Pages use the theme's `page` layout, which renders title, subtitle and content
only. The date, read time, tag list, share buttons and prev/next pager are part
of the `post` layout, so they will not appear.

## Customising the look

- **Colours, nav links, social links, search** — `docs/_config.yml`
- **Everything else** — `docs/assets/css/custom.css`, loaded on every page via
  the `site-css` key

The full list of theme options is in
[beautiful-jekyll's `_config.yml`](https://github.com/daattali/beautiful-jekyll/blob/master/_config.yml).
Note that `jekyll-remote-theme` does **not** merge the theme's own config, so
any option you want has to be set in `docs/_config.yml` yourself.

## References

- [GitHub Pages and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)
- [jekyll-remote-theme](https://github.com/benbalter/jekyll-remote-theme)
- [jekyll-compose](https://github.com/jekyll/jekyll-compose)

This site was originally scaffolded with `jekyll new --skip-bundle .`.
