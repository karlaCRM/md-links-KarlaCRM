const fs = require("fs");
const path = require("path");

/* funcion para checar si es absoluta o relativa */
const checkIfPathIsAbsolute = (route) => {
  return path.isAbsolute(route)
}

/* funcion para convertir ruta relativa a absoluta */
const pathconvertToAbs = (route) => {
    const pathAbs = path.resolve(route);
    return pathAbs;
};

const routeExist = (route) => fs.existsSync(route)


/* funcion para checar si es archivo */
const isAFile = (routeAbsolute) => fs.statSync(routeAbsolute).isFile();

/**
  * @function {checa si es file o directory y en caso de directory lo recorre y guarda rutas en array}
  * @param {routeAbsolute}
  * @returns {array de rutas guardadas de todos los archivos que se encuentran}
  */
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

/**
  * @function {filtra los archivos que son md usando .extname y retorna un array de las rutas de estos archivos}
  * @param {routeAbsolute}
  * @returns {un array filtrado de rutas de archivos .md}
  */
const filterTheMdLinks = (routeAbsolute) => {
  return saveFilesInArray(routeAbsolute).filter((file => path.extname(file) === '.md'));
};


module.exports = { checkIfPathIsAbsolute, pathconvertToAbs, routeExist, saveFilesInArray, filterTheMdLinks, isAFile  };
