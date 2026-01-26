# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Link to solution repository](https://github.com/rickyxyz/frontendmentor-projects/tree/main/faq-accordion-main)
- Live Site URL: [Link to live site](https://rickyxyz.dev/frontendmentor-projects/faq-accordion-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

For this challenge, I tried to not use JavaScript at all to implement the accordion; Since I knew there is the `summary` and `details` tag pair in HTML. Although the support for these tags are not quite at the same level yet in all browser, I think it is a good challenge. I also want to use less ARIA attributes and leverage more of the browser built-in assistive technology instead of building my own widget.

Things I have learned from this challenge are:

#### The CSS '::marker' selector

This selector is for selecting the little arrow on the summary tag. I cannot style the image properly with this selector, since I cannot change the display of the pseudo-element to block. Thus, I opted to use the `::after` pseudo element instead so I can style it properly.

```css
summary::marker {
  content: "";
  display: none;
}

summary::after {
  content: "";
  display: block;
}
```

#### New CSS Transition

Couple years ago, we used to not be able to animate element appearing and disappearing from the screen easily, but now with some new CSS attributes it is possible.

```css
details::details-content {
  block-size: 0;

  transition: content-visibility, block-size, margin;
  transition-duration: 400ms;

  transition-behavior: allow-discrete;
}
```

[Read more here](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete)

### Continued development

For future development, I would like to see how I could implement the new HTML and CSS features with frameworks.

### Useful resources

- [Animate details & summary with a few lines of CSS by Kevin Powell](https://www.youtube.com/watch?v=Vzj3jSUbMtI) - This is where I learned how to animate the accordion.

## Author

- Website - [rickyxyz.dev](https://rickyxyz.dev/)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)
