const fs = require("fs");
const path = require("path");

/* funcion para convertir ruta relativa a absoluta */

const checkIfPathIsAbsolute = (route) => {
  return path.isAbsolute(route)
}

const pathconvertToAbs = (route) => {
    const pathAbs = path.resolve(route);
    return pathAbs;
};

const routeExist = (route) => fs.existsSync(route)

// path.extname(routeAbsolute).includes('.md')

/* variable para prueba de funciones */
/* funcion para checar si es archivo */
const isAFile = (routeAbsolute) => fs.statSync(routeAbsolute).isFile();

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


module.exports = { checkIfPathIsAbsolute, pathconvertToAbs, routeExist, saveFilesInArray, filterTheMdLinks, isAFile  };
