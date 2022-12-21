const {pathIsRelativeOrAbsolute, convertToAbs} = require('../library/links');

const resultadoTest= `${__dirname}\\links.spec.js`


describe('convertToAbs es una funcion que convierte rutas relativas a absolutas', () => {

  it('convertToAbs es una funcion', () => {
    expect(typeof convertToAbs).toBe('function')
  });
  it('devuelve ruta relativa convertida a absoluta', () => {
    return expect(convertToAbs('test/links.spec.js')).toBe(resultadoTest)
});

});


describe('pathIsRelativeOrAbsolute es una funcion que revisa que una ruta sea absoluta o relativa mediante un booleano', () => {

    it('convertToAbs es una funcion', () => {
      expect(typeof pathIsRelativeOrAbsolute).toBe('function')
    });
    it('devuelve false cuando la ruta es relativa', () => {
        return expect(pathIsRelativeOrAbsolute('./library/links.js')).toBe('false')
    });
  
  });
  