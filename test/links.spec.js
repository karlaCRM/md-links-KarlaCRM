const fs = require('fs');
const path = require('path');
const { checkIfPathIsAbsolute,
  pathconvertToAbs,
  saveFilesInArray,
  filterTheMdLinks,
  isAFile,
  routeExist} = require('../library/paths');

  jest.mock('fs');
jest.mock('path')


/* test de absolute y relative*/

const resultArrayOfOneLink =  [
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md',
]

const resultArrayOfLinks =  [
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\pruebadentro.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\testvacio.md'
]

const resultArrayOfMd =  [
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\pruebadentro.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\text.md'
]

const rutaAbsoluta = `${process.cwd()}\\test\\prueba`;
const mdFile= `${__dirname}\\prueba`;
const rutaRelativa = 'test/prueba/nuevo.md';

/* Test de funcion que comprueba sea ruta absoluta */
describe('checkIfPathIsAbsolute es una funcion que verifica si la ruta recibida es absoluta o no, retorna un boolean', () => {
  it('checkIfPathIsAbsolute es una funcion', () => {
    expect(typeof checkIfPathIsAbsolute).toBe('function');
  });
  it('checkIfPathIsAbsolute llama a path.isAbsolute', () => {
    checkIfPathIsAbsolute(rutaAbsoluta);
    expect(path.isAbsolute).toHaveBeenCalled();
  });
  it('checkIfPathIsAbsolute retorna true', () => {
    path.isAbsolute.mockImplementationOnce(() => ( true ));
    expect(checkIfPathIsAbsolute(rutaAbsoluta)).toBe(true);
  });
});

/* Test de funcion convierte ruta relativa a absoluta */
describe('pathconvertToAbs es una funcion que convierte una ruta a absoluta', () => {
  it('pathconvertToAbs es una funcion', () => {
    expect(typeof pathconvertToAbs).toBe('function');
  });

  it('devuelve ruta relativa convertida a absoluta', () => {
    path.resolve.mockImplementationOnce(() => `${__dirname}\\prueba\\nuevo.md`);
      expect(pathconvertToAbs(rutaRelativa)).toEqual(`${__dirname}\\prueba\\nuevo.md`)
    
  });
});

/* Test de funcion checa que la ruta exista */
describe('routeExist es una funcion que convierte una ruta a absoluta', () => {
  it('routeExist llama a fs.existsSync', () => {
    routeExist(rutaAbsoluta);
    expect(fs.existsSync).toHaveBeenCalled();
  });

  it('devuelve un booleano, true si la ruta existe', () => {
    fs.existsSync.mockImplementationOnce(() =>  true);
      expect(routeExist(rutaAbsoluta)).toBe(true)
  });
});

/* Test de funcion que comprueba sea archivo */
describe('isAFile es una funcion que verifica si el link recibido es de un file, retorna boolean', () => {
  it('isAFile es una funcion', () => {
    expect(typeof isAFile).toBe('function');
  });
  it('isAFile retorna true al recibir un archivo', () => {
    fs.statSync.mockImplementationOnce(() => ({ isFile: () => true }));
    expect(isAFile('C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\links.spec.js')).toBe(true);
  });
});

/* Test de funcion que obtiene array de links de archivos*/
describe('saveFilesInArray es una funcion que revisa si el path que se le pasa es un file o un directorio, en caso de ser file lo sube a un array, en los directorios los recorre y encuentra los archivos subiendolos al mismo array', () => {
  fs.statSync.mockImplementation(() => ({ isFile: () => true }));
  it('saveFilesInArray es una funcion', () => {
    expect(typeof saveFilesInArray).toBe('function');
  });
  it('saveFilesInArray deberia retornar un array con un link si se le paso un file', () => {
    expect(saveFilesInArray(`${process.cwd()}\\test\\prueba\\nuevo.md`)).toEqual(resultArrayOfOneLink);
  });
});