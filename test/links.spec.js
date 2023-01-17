
const { checkIfPathIsAbsolute,
  pathconvertToAbs,
  saveFilesInArray,
  filterTheMdLinks,
  isAFile,
  routeExist} = require('../library/paths');
  const fs = require('fs');

  const { readFileAndSearchLinks,
    filterLinksMarked} = require('../library/links');

/* test de absolute y relative*/

const resultArrayOfOneLink =  [
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md',
]

const resultArrayOfLinks = [
  "C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\archivoparaTest.js",
  "C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md",
  "C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\pruebadentro.md",
  "C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\testvacio.md",
  "C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\text.md",
];

const resultArrayOfMd =  [
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md',
  'C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\pruebadentro.md',
  "C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\testvacio.md",
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
  it('checkIfPathIsAbsolute retorna true', () => {
    expect(checkIfPathIsAbsolute(rutaAbsoluta)).toBe(true);
  });
});

/* Test de funcion convierte ruta relativa a absoluta */
describe('pathconvertToAbs es una funcion que convierte una ruta a absoluta', () => {
  it('pathconvertToAbs es una funcion', () => {
    expect(typeof pathconvertToAbs).toBe('function');
  });

  it('devuelve ruta relativa convertida a absoluta', () => {
      expect(pathconvertToAbs(rutaRelativa)).toEqual('C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\nuevo.md')
    
  });
});

/* Test de funcion checa que la ruta exista */
describe('routeExist es una funcion que convierte una ruta a absoluta', () => {
  it('devuelve un booleano, true si la ruta existe', () => {
    routeExist(rutaAbsoluta);
      expect(routeExist(rutaAbsoluta)).toBe(true)
  });
});

/* Test de funcion que comprueba sea archivo */
describe('isAFile es una funcion que verifica si el link recibido es de un file, retorna boolean', () => {
  it('isAFile es una funcion', () => {
    expect(typeof isAFile).toBe('function');
  });
  it('isAFile retorna true al recibir un archivo', () => {
    expect(isAFile('C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\links.spec.js')).toBe(true);
  });
});

/* Test de funcion que obtiene array de links de archivos*/
describe('saveFilesInArray es una funcion que revisa si el path que se le pasa es un file o un directorio, en caso de ser file lo sube a un array, en los directorios los recorre y encuentra los archivos subiendolos al mismo array', () => {
  it('saveFilesInArray es una funcion', () => {
    expect(typeof saveFilesInArray).toBe('function');
  });
  it('saveFilesInArray deberia retornar un array con un link si se le paso un file', () => {
    expect(saveFilesInArray(`${process.cwd()}\\test\\prueba\\nuevo.md`)).toEqual(resultArrayOfOneLink);
  });
  it('saveFilesInArray deberia abrir un directorio y guardar en un array los archivos', () => {
      expect(saveFilesInArray(`${process.cwd()}\\test\\prueba`)).toEqual(resultArrayOfLinks);
  });

})

/* Test de funcion que filtra array de links, obtiene solo los .md*/
describe('filterTheMdLinks es una funcion retorna los archivos .md filtrados', () => {
  it('filterTheMdLinks es una funcion', () => {
    expect(typeof isAFile).toBe('function');
  });
  it('filterTheMdLinks retorna un array de archivos .md filtrados', () => {
    expect(filterTheMdLinks(rutaAbsoluta)).toEqual(resultArrayOfMd)

});
});

/* Test de funcion que filtra array de links, obtiene solo los .md*/
describe('readFileAndSearchLinks es una funcion que lee los archivos y encuentra los links', () => {
  it('readFileAndSearchLinks retorna una promesa', () => {
    expect(readFileAndSearchLinks(resultArrayOfMd)).toBeInstanceOf(Promise);
  });
  it('Debería retornar una promesa resuelta', async() => {
    jest.mock('fs');
    fs.readFile.mockImplementation(() => 'Aqui no hay ningún link');
    await expect(readFile("C:\\Users\\HP\\OneDrive\\Documentos\\laboratoria bootcamp\\md-links-KarlaCRM\\test\\prueba\\prueba2\\pruebadentro.md")).resolves.toEqual('Aqui no hay ningún link')
  });
 
});




