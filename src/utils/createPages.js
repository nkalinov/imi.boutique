const fs = require("fs")

fs.readFile("../products/products-2019-10-21.csv", "utf8", (err, data) => {
  if (err) throw err

  const rows = data
    .split("\r\n")
    .slice(1)
    .map(row => row.split("\t").map(cell => cell.replace(/\"|\'/g, "")))

  // console.log(rows[0])
  // createPage(rows[0])
  rows.forEach(createPage)
})

function createPage([title, categories, description, url, images = ""]) {
  if (!url) {
    console.log(title)
    return
  }

  const dir = `../products${url}`

  fs.mkdir(dir, { recursive: true }, err => {
    if (err) throw err

    images = images
      .replace(/Product Image File: /g, "")
      .split("|")
      .filter(Boolean)
      .map(img => {
        const [name, idExt] = img.split("__")
        const [, ext] = idExt.split(".")
        return `"./${name}.${ext}"`
      })

    fs.writeFile(
      `${dir}data.md`,
      `---
title: "${title}"
categories: [${categories.split(";").map(cat => `"${cat}"`)}]
images: [${images}]
---`,
      "utf8",
      (err, done) => {
        if (err) throw err
      }
    )
  })
}
