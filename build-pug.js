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
