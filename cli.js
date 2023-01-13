#!/usr/bin/env node

const { mdLinks } = require("./mdLinks");
const { statLinks, statAndValidate } = require("./library/stats");
const {log} =console

const opt = process.argv
const route = process.argv[2]
const validate = opt.includes('--validate')
const stat = opt.includes('--stats')

const userCli = (route) =>{
  
if(!route){
  new Error(log('MISSING PATH, ENTER THE PATH'))
}
else if(stat && validate){
  return mdLinks(route, {validate:true})
  .then((arrayOfLinks) => {
    if(arrayOfLinks.length <= 0){
     log(new Error('THIS FILE HAS NO LINKS TO SHOW, TRY ANOTHER PATH'));
    }
    const statsValidate = statAndValidate(arrayOfLinks)
    log(` LINKS:

  Total: ${statsValidate.Total},
  Unique: ${statsValidate.Unique},
  Broken: ${statsValidate.Broken}
    `)
      })
      .catch((err) => log(err))
}
else if(validate){
  return mdLinks(route, {validate:true})
  .then((arrayOfLinks) => {
    if(arrayOfLinks.length <= 0){
     log(new Error('THIS FILE HAS NO LINKS TO SHOW, TRY ANOTHER PATH'));
    }
      arrayOfLinks.forEach((link) =>{
log(`
Route: ${link.file}\nLink:${link.href}\nText:${link.text}\nStatus:${link.status}\nIsOk?${link.isOk} `)
      })
      })
      .catch((err) => log(err))

}
else if(stat){
  return mdLinks(route, {validate:false})
  .then((arrayOfLinks) => {
    if(arrayOfLinks.length <= 0){
     log(new Error('THIS FILE HAS NO LINKS TO SHOW, TRY ANOTHER PATH'));
    }
    const stats = statLinks(arrayOfLinks)
    log(` LINKS:

  Total: ${stats.Total}
  Unique: ${stats.Unique}
    `)
      })
      .catch((err) => log(err))
}
  if(!validate){
   return mdLinks(route, {validate:false})
  .then((arrayOfLinks) => {
    if(arrayOfLinks.length <= 0){
     log(new Error('THIS FILE HAS NO LINKS TO SHOW, TRY ANOTHER PATH'));
    }
      arrayOfLinks.forEach((link) =>{
log(`
Route: ${link.file}\nLink:${link.href}\nText:${link.text}`)
      })
      })
      .catch((err) => log(err))
  }

}

userCli(route)