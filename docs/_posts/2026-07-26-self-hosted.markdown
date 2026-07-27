---
layout: post
title:  "Self Hosted"
date:   2026-07-26 12:08:14 +1000
categories: blog
---



I've been self hosting for more than 10 years, seriously in the last 5. What got me started was really just the excitement of owning and operating a part of the internet. 

, and just being paranoid of other people having access to my data (If you are a developer or SaaS operator then you know what I'm talking about)

, and vendor lock-in

![Japan](/assets/images/japan.jpg)

From homelab, setting up port forwarding in the router (and getting hacked because of this!)

to Virtual Machines (VM) in the cloud: 
1. Droplet in Digital Ocean
2. VMs in AWS, Google Cloud and Azure

and back to homelab + Tailscale (Wireguard) and Cloudflare Tunnel

This journey saw my growing proficiency in Linux and Docker

Web apps I played with:

1. Wordpress -> Ghost -> static pages (Github pages)
2. Jellyfin
2. Nextcloud
3. Different stand alone databases, postgres, mysql, mongodb, neo4j, influxdb
4. Flask applications
5. Redis
6. Rabbitmq
7. Apache Superset

and the list goes on.

From the initial excitement: here's a docker compose file, and it's one linux command to setup a service that works! (why would any one use SharePoint or Google Drive?)

To the details in 
 * Purchasing a domain and setup DNS record
 * SSL certificate (for https)
 * Single Sign On (SSO)
 * security
 * load speed
 * reliability (uptime)
 * backup and restore
 * update

when your day to day process start to depend more and more on these self-hosted web apps that you operate yourself. A service interruption can cause some serious frustration. 


With AI, anyone can build an app. but do you really need to build one yourself? Whatever you want to do, there's a good chance that somebody already build an open source version of it and you can simply self host 


For any web app, there're the following roles
1. user
2. operator
3. developer

For some of these apps, I'm the developer, operator and user

For some, I'm the operator and user

If I just want to be a happy user, is it worth it?

with modern platforms like
CasaOS (for homelab)
Dokploy/CapRover/Coolify (cloud VM)

Is the setup and maintenance simple enough that I can just be the happy user most of the time?






