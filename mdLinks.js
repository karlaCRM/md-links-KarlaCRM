const {
    checkIfPathIsAbsolute,
    pathconvertToAbs,
    routeExist,
    filterTheMdLinks,
  } = require("./library/paths");

  const { readFiles } = require('./library/links')

 
  let pathI = `${process.cwd()}\\test\\prueba`;
  
  

const mdLinks = (path) => new Promise((resolve,reject) => {
    const pathAbsolute = checkIfPathIsAbsolute(path)? path : pathconvertToAbs(path)
      if(routeExist(path)){
        const filterArray = filterTheMdLinks(pathAbsolute)
        filterArray.forEach((file) => {
          readFiles(file)
          .then(link => resolve(console.log(link))
        )
          
        })
      }
      else{
        reject("no existe la ruta")
      }
    })

console.log(mdLinks(pathI))