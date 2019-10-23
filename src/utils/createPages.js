const fs = require("fs")
const path = require("path")
const findUp = require("find-up")

console.log(path.resolve("./products.csv"))

fs.readFile(path.resolve("./products.csv"), "utf8", (err, data) => {
  if (err) throw err

  const rows = data
    .split("\n")
    .slice(1)
    .map(row => row.split("\t").map(cell => cell.replace(/\"|\'/g, "")))

  // console.log(rows[0])
  // createPage(rows[0])
  rows.forEach(createPage)
})

function createPage([title, categories, description, url, images = ""]) {
  if (!url) {
    return
  }

  const destinationDir = path.resolve(`../products${url}`)

  fs.mkdir(destinationDir, { recursive: true }, async err => {
    if (err) {
      console.error(err)
    }

    images = await Promise.all(
      images
        .replace(/Product Image File: /g, "")
        .split("|")
        .filter(Boolean)
        .map(async img => {
          const [name, idExt] = img.split("__")
          const [, ext] = idExt.split(".")

          const filename = `${name}.${ext}`
          const source = await findUp(filename, { cwd: destinationDir })

          if (source) {
            const destination = path.resolve(`${destinationDir}/${filename}`)

            try {
              // delete source
              // fs.unlinkSync(source)
              // delete destination
              fs.unlinkSync(destination)
            } catch (e) {
              // console.error(e)
            }

            try {
              // move source to destination
              fs.renameSync(source, destination)
              console.log("moved", source, "to", destination)
            } catch (e) {
              console.error("Error moving file", source, destination, e)
            }
          } else {
            console.error("Image not found:", title, img, filename)
          }

          return `"./${name}.${ext}"`
        })
    )

    //     fs.writeFile(
    //       `${destinationDir}/data.md`,
    //       `---
    // title: "${title}"
    // categories: [${categories.split(";").map(cat => `"${cat}"`)}]
    // images: [${images}]
    // ---`,
    //       "utf8",
    //       (err, done) => {
    //         if (err) throw err
    //       }
    //     )
  })
}
