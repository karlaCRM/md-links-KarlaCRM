const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const pathIsRelativeOrAbsolute = (route) => {
   const isAbsOrNot = path.isAbsolute(route)
   return chalk.hex('#5dc1b9')(isAbsOrNot)
}

const convertToAbs = (route) => {
    const pathAbs = path.resolve(route)
        return chalk.hex('#00aae4')(pathAbs)
    }
console.log(pathIsRelativeOrAbsolute('MD-LINKS-KARLACRM/library/links.js '))
console.log(convertToAbs('MD-LINKS-KARLACRM/library/links.js '))

/* function exampleTry(path){
 fs.readdir(path, (error, data) =>{
   
    if(error){
        throw error
    }
    console.log(`aqui esta el contenido del directorio ${data}`)
    fs.readFile('./text.md', 'utf-8', (error, file) =>{
        if(error){
            throw error
        }
console.log(file)
    })
    console.log(chalk.hex('#5dc1b9')('contenido del archivo... si esto aparece antes del contenido del archivo es que estas leyendo algo asincronamente'))
})

} */




module.exports  = {pathIsRelativeOrAbsolute, convertToAbs}


