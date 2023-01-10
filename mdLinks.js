const {log} = console
const {
  checkIfPathIsAbsolute,
  pathconvertToAbs,
  routeExist,
  filterTheMdLinks,
} = require("./library/paths");

const { readFiles, filterMd } = require('./library/links')


let pathI = `${process.cwd()}\\test\\prueba`;



const mdLinks = (path) => new Promise((resolve,reject) => {
  let arrPromises = [];
  const pathAbsolute = checkIfPathIsAbsolute(path)? path : pathconvertToAbs(path)
    if(routeExist(path)){
      const filterArray = filterTheMdLinks(pathAbsolute)
     if(filterArray.length === 0){
     reject(log("no hay archivos md"))
    }
    //aqui estoy metiendo un promise.All para resolver todas las promesas (viene una por cada for each que se hace al array de links)
    const promises = []
    filterArray.forEach(file => promises.push(readFiles(file)) )
    
  Promise.allSettled(promises).then(data =>{
let arr = []
    data.forEach((el) => arr.push((el.value).flat()))
   resolve(arr.flat())
  })
 
    }
    else{
      reject(log("no existe la ruta"))
    }
    
  })

  mdLinks(pathI)
  .then((response) =>{
    log(response)
  })
