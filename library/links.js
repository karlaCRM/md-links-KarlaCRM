const fs = require("fs");
const { marked } = require("marked");

let pathI = `${process.cwd()}\\test\\prueba\\text.md`;

const readFiles = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      if(data){
      resolve(filterLinks(data, file))
      } 
    });
  })

};

// const filterLinks = (file) => new Promise((resolve, reject) => {
//     let arrLinks = []
//     const openFile = fs.readFileSync(file, 'UTF8');
//     const regExp = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
//     let findLinks = Array.from(openFile.matchAll(regExp))
// findLinks.forEach((el) =>{
//   if(el !== ''){
//     const objLinks = {
//       href: el[2],
//       text: el.input.slice(0, 50),
//       file: file.replace(/\\/g, '/'),
//     }
//    arrLinks.push(objLinks)
//   }
//   else{ reject('no hay links'
//   )}
// })
//    resolve(arrLinks)
// })

// console.log(filterLinks(pathI))

const filterLinks = (data, file) => {
  let arrLinks = [];
  const regExp = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
  let findLinks = Array.from(data.matchAll(regExp));
  findLinks.forEach((el) =>{
    if (findLinks !== "") {
      let links = el
      const objLinks = {
        href: links[2],
        text: links[1],
        file: file.replace(/\\/g, "/"),
      };
      arrLinks.push(objLinks)
    }
    else{
      return 'no hay links'
    }
  })
    
  return arrLinks
};

// const filterLinksMarked = (data, file) => {
//   let arrLinks = [];
//   const route = file.replace(/\\/g, "/")
//   const renderer = new marked.Renderer();
//   renderer.link = (href, _, text) => {
//     const obj = {
//         href,
//         text: text,
//         file: route,
//     }
//     if(renderer.link.length !== 0){
//       arrLinks.push(obj)
//     }
    
//   };
//   marked(data, {renderer})
//  return arrLinks
// }
    

module.exports = { readFiles };
