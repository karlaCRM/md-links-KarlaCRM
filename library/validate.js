const fetch = require('node-fetch')
const { log } = console;

/**
 * @function  validateLinks
 * @param {toma un array de objetos y valida que funcionen}
 * @returns {un array de objetos con links validados con fetch, status: Código de respuesta HTTP y ok: Mensaje fail en caso de fallo u ok en caso de éxito.}
 */
const validateLinks = (arrOfLinks) => {
    const arrOfValidateLinks = arrOfLinks.map((link) => {
        return fetch(link.href).then((response) =>{
            return {
                href: link.href,
                text: link.text,
                file: link.file,
                status: response.status,
                isOk: response.status < 400?'ok':'fail',
            }
        })
  })
  return Promise.all(arrOfValidateLinks);
    };



const arrOfTest = [
    {
      href: 'https://youtu.be/1rqSAC7UKt4',
      text: 'tu castigo',
      file: 'C:/Users/HP/OneDrive/Documentos/laboratoria bootcamp/md-links-KarlaCRM/test/prueba/nuevo.md'
    },
    {
      href: 'https://www.google.com',
      text: 'google esto es',
      file: 'C:/Users/HP/OneDrive/Documentos/laboratoria bootcamp/md-links-KarlaCRM/test/prueba/text.md'
    },
    {
      href: 'https://www.youtube.com/watch?v=msVB4L2Hrfk',
      text: 'Gatita',
      file: 'C:/Users/HP/OneDrive/Documentos/laboratoria bootcamp/md-links-KarlaCRM/test/prueba/text.md'
    },
    {
      href: 'https://drive.google.com/file/d/17i48hwgL0b3gxMNR2f6hRBRnnJZhVf9E/view?usp=share_link',
      text: 'ste es el drive',
      file: 'C:/Users/HP/OneDrive/Documentos/laboratoria bootcamp/md-links-KarlaCRM/test/prueba/text.md'
    },
    {
      href: 'https://twitter.com/share?lang=en&text=Example%20of%20malformed%%20characters%20in%20URL',
      text: 'sí estas leyendo varios en un solo arvhivo',
      file: 'C:/Users/HP/OneDrive/Documentos/laboratoria bootcamp/md-links-KarlaCRM/test/prueba/text.md'
    }
  ]

  validateLinks(arrOfTest).then((console.log))

  module.exports = {validateLinks}
