---
title: The story of this website
slug: website-story
excerpt: This is the story of how I created this website. The reason along with tools and tutorials I used.
date: 2022-08-28
thumbnailUrl: /md/website-story/logo.png
---
# Why
I've always had this idea of getting more into producing content but never
actually dedicated the time to it. Lately I've been more keen non the idea
so I decided a personal website is a nice thing to have.

I already had a very simple static website hosted on Github pages. It was 
almost only an `index.html` file and an `index.css` file. I had also purchased
the domain `pedram.es` (my name) when I arrived at Barcelona. Apparently I was
the first Pedram who ever wanted to buy that. The domain also made me very 
keen on hosting something useful on it.

The initial version of the website was just an `about` page. Very simple.
But now I decided to extend it to host my blog posts, my [Medium](https://medium.com/@pedram.esmaeeli)
publications and more.

# How
I created the site in two days using [Gatsby](https://www.gatsbyjs.com/).
I had already some familiarity with it but didn't know about things like 
source plugins and graphql queries it uses. So I started with searching for a
tutorial as I prefer video tutorial over text to get started with something as
complex as Gatsby. I searched on YouTube and found [this](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB)
amazing tutorial by a guy nicknamed *The Net Ninja*. I followed the tutorial.
With this I learned everything I needed about Gatsby.

I started from the [Gatsby Hello World Starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world).
This is a bare-bones boilerplate that only has the setup needed for Gatsby.
Then it was time to choose a UI framework. I did some [bike-shedding](https://en.wikipedia.org/wiki/Law_of_triviality)
spending too much time to choose the UI framework. So at some point I stopped and
went with the thing I already knew... Bootstrap. I installed [react-bootstrap](https://react-bootstrap.github.io/)
but react-bootstrap doesn't come shipped with a stylesheet. So I had the freedom
to choose my own bootstrap theme. I chose the [Solar](https://bootswatch.com/solar/)
theme. As it has the same color as the solar theme of text editors and gives my 
site a developer-ish look and feel.

For listing my medium publication I found this Gatsby source called [gatsby-source-medium](https://www.gatsbyjs.com/plugins/gatsby-source-medium/)
and for adding meta tags to my page I used [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)
and [this](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/) documentation page
For YouTube I didn't find any source plugin. So I'll be going to do my own HTML and CSS 
and insert each video into my website manually as I publish on YouTube.

For styling my pages I used a global stylesheet for more general things
but used `css modules` which came out of the box with Gatsby. It was my
first time using `css modules`.

I ended up publishing the site on [Netlify](https://www.netlify.com/) as it
was harder than I expected to actually do it on Github Pages. Then after
defining my custom domain in netlify through its UI, I 
went to Godaddy and defined an `A` record that points the root directory
of my domain to `75.2.60.5` and points `www` to `apex-loadbalancer.netlify.com`.

# Notes
These are a couple of things I came across which are worthy of attention IMO.

## The half-a-day bug
I spent half of a day debugging the page for the list of my blog posts.
I had done everything correctly but it wasn't showing everything.
I compared it to my Medium page that was already working and still nothing.
They looked identical in my eyes. At the end after pulling my hair out for 
half a day, I realized when I was iterating over the posts to render them,
I was using `forEach` instead of `map`. I was really furious after I found
the issue was so trivial.

## The menu hint
I realized that when the navigation menu gets collapsed on the smaller devices,
the icon itself is not bold enough to show the user that there actually is a menu
on the page. So I decided to add a text to it, hinting that it is the menu and 
making it bolder for the user. This is how it ended up looking:

![img.png](/md/website-story/menu.png)

I used the following piece of CSS for it. I think it may come in handy
for other people who also want to add a hint text to their bootstrap navbar
icon.

```css
.navbar-toggler-icon:after {
  content:"Menu";
  margin-left: 60px;
  width:50px;
  color: var(--bs-secondary);
}
```
