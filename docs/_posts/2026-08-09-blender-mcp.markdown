---
layout: post
title:  "Midjourney + Opus-5 + Blender MCP = Game-ready Dragon"
date:   2026-08-09 12:00:00 +1000
categories: blog
---

Testing to see if I can make a game ready dragon with the following tools

1. Midjourney
2. Claude Opus-5
3. Blender MCP


# The Result

<iframe width="512" height="512" src="https://youtube.com/embed/5XqbSMHCmfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

and here's the model sheet

<https://green-dragon.handpicked.workers.dev/>

Both the video and the model sheet are also made with Opus-5!


# Midjourney

prompted with
> a cartoon dragon with a few different poses, to be used as a game character

and got 

![dragon](/assets/images/dragon.jpg){: width="512"}

I also asked for an animation of this still


# Claude Opus-5 + Blender MCP

I followed setups from 
  - <https://blendermcp.org/setup/claude>
  - <https://code.claude.com/docs/en/mcp-quickstart>

This is the first time I used Blender MCP. 

I also tried without a reference image: it does work but the result is a bit boring. 

The first time I started claude code in the project folder, with 

```bash
claude --dangerously-skip-permission
```

> It's ok to have "--dangerously-skip-permission" since I'm running a separate Ubuntu machine to run Claude Code

I forgot to do (I forgot MCP by default is per Anthropic account and per project):

```bash
claude mcp add blender uvx blender-mcp
claude mcp list
```

Claude Code found my Blender executable in the Downloads folder and started writing Python code to create the dragon programatically. This is not what I planned and even though, later on, I asked Claude to just use the Blender MCP and forget about the Python script: he didn't listen to me. I just let it run with it. 


# The Struggle

The model is not perfect (the eye lids are giant blobs, it's a bit weird when the dragon is asleep). 

Using the still image and animation video as references, Opus-5 did not generate this in one-shot. 

It grouped some vertices in the head, jaw, teeth meshes into the wrong group and in animation, when the dragon opened its mouth, its head, jaw and teeth would stretch and cover its tongue in the mouth. 

It took a few back and forth with Opus-5 to get this fixed. 

