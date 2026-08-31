---
layout: post
title:  "Self-hosted "
date:   2026-07-26 13:00:00 +1000
categories: blog
---






I've been self-hosting for more than 10 years, seriously for the last 5. What got me started wasn't really about saving money. It was the excitement of owning and operating a small piece of the internet myself, plus a healthy dose of paranoia about other people having access to my data. (If you're a developer or SaaS operator, you know exactly what I mean.) And, of course, there was the ever-present fear of vendor lock-in.

## The Journey

It started in the homelab, forwarding ports on my home router and getting hacked because of it. Lesson learned the hard way.

From there I moved to virtual machines in the cloud:

1. A droplet on DigitalOcean
2. VMs on AWS, Google Cloud, and Azure

And eventually I came full circle: back to the homelab, this time armed with Tailscale (built on WireGuard) and Cloudflare Tunnel: no open ports, no more getting hacked through my router.

Along the way, this journey quietly turned into a crash course in Linux and Docker.

## Everything I've Played With

Over the years, the list of self-hosted web apps has grown embarrassingly long:

- **Blogging/publishing:** WordPress → Ghost → static pages on GitHub Pages
- **Media:** Jellyfin
- **File storage/sync:** Nextcloud
- **Databases:** Postgres, MySQL, MongoDB, Neo4j, InfluxDB
- **Custom apps:** Flask applications
- **Infrastructure:** Redis, RabbitMQ
- **Analytics:** Apache Superset

...and the list keeps going.

## From Excitement to Reality

It starts simple: here's a `docker-compose.yml`, one command, and suddenly you have a working service. Why would anyone pay for SharePoint or Google Drive when you can just... do this?

But then reality sets in, and "one command" turns into a whole checklist:

- Purchasing a domain and setting up DNS records
- SSL certificates (for HTTPS)
- Single Sign-On (SSO)
- Security hardening
- Load speed
- Reliability and uptime
- Backup and restore
- Ongoing updates

And once your day-to-day workflow starts depending on the services you host yourself, a service interruption stops being a fun weekend project and starts being a real source of frustration.

In addition, if the service is customer facing, there are even more things to worry about:

- customer login
- analytics on web traffic and engagement
- payment (stripe)
- email integration

## Do You Even Need to Build It?

With AI, anyone can build an app. But do you really need to build your own? Whatever you're trying to do, there's a good chance someone has already built an open-source version of it, and you can simply self-host that instead of reinventing it.

## The Three Roles

For any web app, there are three roles in play:

1. **User** — the person using it
2. **Operator** — the person keeping it running
3. **Developer** — the person who built it

For some of my apps, I'm all three: developer, operator, and user. For others, I'm just the operator and user.

Which raises the real question: **if I just want to be a happy user, is self-hosting even worth it?**

## Making Peace with "Just Being a User"

This is where modern platforms come in, tools like CasaOS for the homelab, or Dokploy, CapRover, and Coolify for cloud VMs. They promise to abstract away the operator burden.

The open question I keep coming back to: is the setup and maintenance simple enough now that I can just be a happy user most of the time without giving up the ownership and control that got me into this in the first place?
