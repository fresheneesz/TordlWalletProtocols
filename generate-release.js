var fs = require("fs").promises
var path = require("path")
var marked = require("marked")
var fwalk = require('kc-fwalk')

var newReleaseDirName = "new-release"
var ignoreDirectories = [".", "node_modules", "releases", "generate-release.js", "yarn.lock", newReleaseDirName]

;(async function() {
try {
    try {
        await fs.mkdir(newReleaseDirName)
    } catch (e) {
        if(e.code === "EEXIST") {
            console.log("Directory "+newReleaseDirName+" already exists. Quitting.")
        } else {
            throw e
        }
    }
//
//    var cssContent = await fs.readFile(__dirname+"/style.css")
//    await fs.writeFile(__dirname+"/"+newReleaseDirName+"/style.css", cssContent.toString())

//    var filename = "./singleWalletProtocols/Basic-Hot-Wallet.md"
    await Promise.all(getFilenames(ignoreDirectories).map(async function(filename) {
        var basename = path.basename(filename)
        var dirname = path.dirname(filename)
        var sourceFilePath = __dirname+"/"+filename.slice(2)


        var isMarkdown = filename.slice(-3) === ".md"
        if(isMarkdown) {
            var releaseFileName = basename.slice(0, -2)+"html"
            var baseDirectoryPath = strmult("../", dirname.split('/').length-1)
        } else {
            var releaseFileName = basename
        }

        var releaseFilePath = __dirname+"/"+newReleaseDirName+dirname.slice(1)+"/"+releaseFileName
        await fs.mkdir(path.dirname(releaseFilePath), {recursive:true})
        if(isMarkdown) {
            var file = await fs.readFile(sourceFilePath)
            var contentsToWrite = generateHtml(file.toString(), baseDirectoryPath)
            await fs.writeFile(releaseFilePath, contentsToWrite)
        } else {
            await fs.copyFile(sourceFilePath, releaseFilePath)
        }
    }))
} catch(e) {
    console.error(e)
}
})()

function generateHtml(markdown, baseDirectoryPath) {
    marked.use({renderer: {link: function(href, title, text) {
        if(href.indexOf("http") !== 0 && href.slice(-3) === ".md") {
            // Replace local markdown links with the path to the html version
            href = href.slice(0, -3)+".html"
        }
        return "<a href='"+href+"'>"+text+"</a>"
    }}})

    return "<head><link rel='stylesheet' type='text/css' href='"+baseDirectoryPath+"style.css'></style></head>\n"+marked(markdown)
}

// Gets the filenames to copy
function getFilenames(ignoreDirectories) {
  var filenames = []
  fwalk(".").forEach(function(filename) {
    // Filter out non-project directories
    for(var n=0; n<ignoreDirectories.length; n++) {
      if(filename.indexOf("./"+ignoreDirectories[n]) === 0) return // Ignore file in that directory.
    }

      filenames.push(filename)
  })
  return filenames
}

// Concatenate a string together multiple times
function strmult(str, count) {
    var result = []
    for(var n=0; n<count; n++) {
        result.push(str)
    }
    return result.join("")
}