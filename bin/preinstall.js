var fs = require('fs')
var resolve = require('path').resolve
var join = require('path').join
var cp = require('child_process')

// get library path
var api = resolve(__dirname, '_/api/')

fs.readdirSync(api)
  .forEach(function (mod) {
    var modPath = join(lib, mod)

    // ensure path has package.json
    if (!fs.existsSync(join(modPath, 'package.json'))) return

    // install folder
    cp.spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' })
  })

var log = resolve(__dirname, '_/log/')

fs.readdirSync(log)
  .forEach(function (mod) {
    var modPath = join(lib, mod)

    // ensure path has package.json
    if (!fs.existsSync(join(modPath, 'package.json'))) return

    // install folder
    cp.spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' })
  })