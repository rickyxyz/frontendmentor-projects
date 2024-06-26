# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![desktop](./screenshots/desktop%20active.png)
Desktop active state

![mobile](./screenshots/mobile%20active.png)
Mobile active state

### Links

- Solution URL: [Link to solution repository](https://github.com/rickyxyz/frontendmentor-projects/tree/main/react/expenses-chart-component-main)
- Live Site URL: [Link to live site](https://rickyxyz.dev/frontendmentor-projects/expenses-chart-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SASS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The challenging part of this challenge is to figure out how to determine the height for the bar. To do it I just normalize the data to a 0 to 100 percent range.

```jsx
const heightMap = weeklyData.map((data) => data / _max);
// ...
<div style={{ height: `calc(calc(100% - 2.5rem) * ${data})` }} />;
```

### Continued development

In the future I hope to be able to finish challenges faster.

## Author

- Website - [rickyxyz.dev](https://rickyxyz.dev/)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)
