#!/usr/bin/env node

const { mdLinks } = require("./mdLinks");
const {log} =console

// const validate = args.includes("--validate");
// const stats = args.includes(s"--stats");
const opt = process.argv
const route = process.argv[2]
const validate = opt.includes('--validate')
const stats = opt.includes('--stats')
console.log(opt)

const userCli = (route) =>{
  
if(!route){
  new Error(log('missing path, enter the path'))
}
if(validate){
  mdLinks(route, {validate:true})
  .then((arrayOfLinks) => {
    if(arrayOfLinks.length <= 0){
     log(new Error('This file has no links to show'));
    }
      arrayOfLinks.forEach((link) =>{
log(`Route: ${link.file}
Link:${link.href}
Text:${link.text}
Status:${link.status}
IsOk?${link.isOk} `)
log("\n");
      })
      })
      .catch((err) => log(err))

}
  mdLinks(route, {validate:true})
  .then((arrayOfLinks) => {
    if(arrayOfLinks.length <= 0){
     log(new Error('This file has no links to show'));
    }
      arrayOfLinks.forEach((link) =>{
log(`Route: ${link.file}
Link:${link.href}
Text:${link.text}`)
log("\n");
      })
      })
      .catch((err) => log(err))

}

userCli(route)
// console.log(`hola queridx ${args}`)



// let pathI = `${process.cwd()}\\test\\prueba`;
// mdLinks(pathI).then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err))
