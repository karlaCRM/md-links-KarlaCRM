
const {
  checkIfPathIsAbsolute,
  pathconvertToAbs,
  routeExist,
  filterTheMdLinks,
} = require("./library/paths");

const { readFileAndSearchLinks } = require("./library/links");

let pathI = `${process.cwd()}\\test\\prueba`;

const mdLinks = (path, option) =>
  new Promise((resolve, reject) => {
    const pathAbsolute = checkIfPathIsAbsolute(path)? path: pathconvertToAbs(path);
    if (routeExist(path)) {
      const filterArray = filterTheMdLinks(pathAbsolute);
      if (filterArray.length === 0) {
        reject(console.log('NO HAY NINGUN ARCHIVO MARKDOWN'));
      }
      readFileAndSearchLinks(filterArray).then((response) =>{
        if(response.length === 0){
          reject(console.log('NO HAY NINGUN LINK'));
        }
    console.log('Estos son los links')
    resolve(response)
      })

    }
    else{
      reject(console.log('no existe la ruta especificada'))
    
    }
  });

mdLinks(pathI).then((response) => {
  console.log(response);
});


/**npm install node-fetch@v2
npm install node-fetch@v2
const fetch = require('node-fetch');
 */