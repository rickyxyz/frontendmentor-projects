# Frontend Mentor - Project tracking intro component solution

This is a solution to the [Project tracking intro component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Create the background shape using code

### Screenshot

![Mobile Screenshot](./screenshots/mobile.png)
![Desktop Screenshot](./screenshots/desktop.png)

### Links

- Solution URL: [Link to solution repository](https://github.com/rickyxyz/frontendmentor-projects/tree/main/project-tracking-intro-component-master)
- Live Site URL: [Link to live site](https://rickyxyz.dev/frontendmentor-projects/project-tracking-intro-component-master/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### Accessibility & ARIA attribute usage.

For this project, I tried to focus on learning accessibility and ARIA attributes.
I learned about `aria-expanded` to indicate if a control element is expanded or not. `aria-live` to indicate region that is updated live. Also learned that the best approach to accessibility is to try not to use ARIA, instead to use native elements.

#### Tried HTML new popover API and learned anchoring

> I just learned that modal and popup are not the same (well, semantically)

The new popover API is great, no need for JavaScript to create a simple tooltip or popup menu. The simplest code is just like below.

```HTML
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

What I think is the most interesting is how you can style the popover using CSS to create responsive menu. So no more duplication for mobile and desktop navigation or removing and adding DOM nodes on the fly.

```CSS
#popover_target {
  ...
}
#popover_target:popover-open {
  opacity: 1;

  @starting-style {
    opacity: 0;
  }
}

@media screen and (min-width: 1000px) {
  #popover_target,
  #popover_target:popover-open {
    opacity: 1;
  }
}
```

There is also the new anchor attribute. For absolute-ly positioned elements you used to be only able to 'anchor' them to the nearest relatively positioned parent. But with anchor you can arbitralily position the 'anchor' the element.

```CSS
.header {
  anchor-name: --navbar;
}

#popover_target {
  position-anchor: --navbar;
  position: absolute;
  top: anchor(bottom);
}
```

#### Take care of the "in-between" states too

This is just probably something I had difficulty because I haven't been doing this in a while, but I had difficulty trying to position the hero image responsively. For next time, I should keep a keen eye for sizes beyond mobile and desktop, like tablet and widescreen devices (since tablets are becoming more powerful, and widescreen seem to be more common).

### Continued development

- Look into more modern CSS selector
- Look into CSS positioning techniques
- Look into more ARIA attributes

### Useful resources

- [Frontend Mentor: Introduction to web accessibility](https://www.frontendmentor.io/learning-paths/introduction-to-web-accessibility-mXu-9PHVsd) - This Frontend Mentor learning path is where I look for most of the links for web accessibility.
- [CSS Popover + Anchor Positioning is Magical (Video by Kevin Powell)](https://www.youtube.com/watch?v=DNXEORSk4GU) - This is where I learned how to use the popover API.
- [Popover Polyfill](https://github.com/oddbird/css-anchor-positioning) - This is the library I put on this project to add popover support for older browser.

## Author

- Website - [rickyxyz.dev](https://www.rickyxyz.github.io)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)
