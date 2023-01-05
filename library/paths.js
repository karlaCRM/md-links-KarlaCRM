const fs = require("fs");
const path = require("path");

/* funcion para convertir ruta relativa a absoluta */
const pathconvertToAbs = (route) => {
  if (path.isAbsolute(route) === true) {
     return route;
  } else {
    const pathAbs = path.resolve(route);
    return pathAbs;
  }
};

// path.extname(routeAbsolute).includes('.md')

/* variable para prueba de funciones */
let pathI = pathconvertToAbs(`./test/prueba/nuevo.md`);

/* funcion para checar si es archivo */
const isAFile = (routeAbsolute) => fs.statSync(routeAbsolute).isFile();

console.log(isAFile(pathI))

/* funcion para checar si es file o directorio y recorrer directorios, es recursiva */
const saveFilesInArray = (routeAbsolute) => {
  let arrayOfFilesMd = [];
  if (
    isAFile(routeAbsolute))
    {
    arrayOfFilesMd.push(routeAbsolute);
  } else {
    const files = fs.readdirSync(routeAbsolute)
    files.forEach((file) => {
      const childDirectory = path.join(routeAbsolute, file);
        arrayOfFilesMd = [...arrayOfFilesMd, ...(saveFilesInArray(childDirectory))];
      
    });
  }
  return arrayOfFilesMd;
};

const filterTheMdLinks = (routeAbsolute) => {
  return saveFilesInArray(routeAbsolute).filter((file => path.extname(file) === '.md'));
};

console.log(filterTheMdLinks(pathI))

module.exports = { pathconvertToAbs, saveFilesInArray, filterTheMdLinks, isAFile  };
