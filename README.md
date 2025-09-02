# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Solution URLe](https://github.com/hanifmaleki/QR-Code)
- Live Site URL: [Add live site URL here](https://hanifmaleki.github.io/QR-Code)

## My process

### Built with
- Semantic **HTML5** markup  
- **CSS custom properties**  
- **Flexbox**  
- **CSS Grid**  
- **Mobile-first workflow**  
- **Pug** template language  
- **SCSS** (with variables and mixins)  
- **GitHub Actions** (for CI/CD pipeline)  
- **GitHub Pages** (for deployment)  
- **Neovim** (as main editor)  
- **i18 translations**
- **npm scripts** (`watch`, `copy-js`)  
- [chokidar-cli](https://github.com/open-cli-tools/chokidar-cli)


### What I learned

In this project, I used an external build-pug.js file to provide a translation function for my Pug templates:
```js
const pug = require('pug')
const fs = require('fs')
const path = require('path')

const translations = {
    en: {
        title: "Frontend Mentor | QR code component",
        card_title: "Improve your font-end skills by building projects",
        card_description: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    }
}

function t(key, lang="en") {
    return translations[lang][key] || key
}

// Compile Pug
const compiled = pug.renderFile('src/pug/index.pug', {
    pretty: true,
    t,
    lang: "en"
})

// Write to dist
const distDirectoryName = 'dist'

if (!fs.existsSync(distDirectoryName)) {
    fs.mkdirSync(distDirectoryName)
}

fs.writeFileSync(path.join(distDirectoryName, 'index.html'), compiled)
```

Then I connected it in __package.json__ like this:
```js
"pug": "watch 'node build-pug.js' src/pug",
```

In previous projects, I had issues with watching SCSS changes. This time I solved it using [chokidar-cli](https://github.com/open-cli-tools/chokidar-cli)
```js
"scss": "sass src/scss:dist/css",
"watch-scss": "chokidar 'src/scss/**/*.scss' -c 'npm run scss'",
```

### Continued development
For upcoming projects, I plan to externalize the translation file instead of keeping it inline.
I also want to introduce a global lang variable that can be changed at runtime, ideally on the client side, to make translations more flexible and reusable.

## Author
- Frontend Mentor - [@hanifmaleki](https://www.frontendmentor.io/profile/hanifmaleki)
