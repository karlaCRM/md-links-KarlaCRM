const { pathconvertToAbs, saveFilesInArray, filterTheMdLinks, isAFile} = require('../library/paths');
const path = require('path');

/* test de absolute y relative*/

const resultArrayOfLinks =  [
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\links.spec.js',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\archivoparaTest.js',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba 2\\pruebadentro.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\text.md'
]

const resultArrayOfMd =  [
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba 2\\pruebadentro.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\text.md'
]

const mdFile= `${__dirname}\\prueba`
const rutaRelativa = 'test/prueba/nuevo.md';

/* Test de funcion que comprueba sea archivo */
describe('isAFile es una funcion que verifica si el link recibido es de un file, retorna boolean', () => {
  it('isAFile es una funcion', () => {
    expect(typeof isAFile).toBe('function');
  });
  it('isAFile retorna true al recibir un archivo', () => {
    expect(isAFile('C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\links.spec.js')).toBe(true);
  });
});


/* Test de funcion que comprueba path sea absoluta o convierte relativa a absoluta */
describe('pathconvertToAbs es una funcion que verifica una ruta sea absoluta', () => {
  it('pathconvertToAbs es una funcion', () => {
    expect(typeof pathconvertToAbs).toBe('function');
  });

  it('devuelve ruta  absoluta en caso de ser ya absoluta', () => {
    
    if(path.isAbsolute(mdFile)){
      expect(pathconvertToAbs(mdFile)).toEqual(mdFile)
    }
  });

  it('devuelve ruta relativa convertida a absoluta', () => {
    if(path.isAbsolute(rutaRelativa) === false){
      expect(pathconvertToAbs(rutaRelativa)).toEqual(`${__dirname}\\prueba\\nuevo.md`)
    }
  });
});


/* Test de funcion que obtiene array de links de archivos*/
describe('saveFilesInArray es una funcion que revisa si el path que se le pasa es un file o un directorio, en caso de ser file lo sube a un array, en los directorios los recorre y encuentra los archivos subiendolos al mismo array', () => {
  it('saveFilesInArray es una funcion', () => {
    expect(typeof saveFilesInArray).toBe('function');
  });
  it('deberia retornar un array de links', () => {
const pathForTest =  `${process.cwd()}\\test`
 expect(saveFilesInArray(pathForTest)).toEqual(resultArrayOfLinks)

 })

})

/* Test de funcion que filtra array de links, obtiene solo los .md*/
describe('filterTheMdLinks es una funcion retorna los archivos .md filtrados', () => {
  it('filterTheMdLinks es una funcion', () => {
    expect(typeof isAFile).toBe('function');
  });
  it('filterTheMdLinks retorna un array con puros links de archivos con extensión .md', () => {
    expect(filterTheMdLinks(mdFile)).toEqual(resultArrayOfMd);
  });
});