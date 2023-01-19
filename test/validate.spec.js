const { validateLinks } = require("../library/validate");
const fetch = require("node-fetch");
jest.mock("node-fetch");

const arrayLinkOk = [
  {
    href: "https://youtu.be/1rqSAC7UKt4",
    text: "tu castigo",
    file: `${process.cwd()}/test/prueba/nuevo.md`.replace(/\\/g, "/"),
  },
];

const arrayLinkStatusFail = [
  {
    href: "https://youtu.be/1rqSAC7UKt4nono",
    text: "tu castigo",
    file: `${process.cwd()}/test/prueba/nuevo.md`.replace(/\\/g, "/"),
  },
];


describe("validateLinks recibe un array de archivos md, los lee y retorna una promesa con los links", () => {

  it("validateLinks deberia retornar un array con un objeto del link validado con status ok", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
      })
    );
    await validateLinks(arrayLinkOk).then((res) => {
      expect(res).toEqual([
        {
          href: "https://youtu.be/1rqSAC7UKt4",
          text: "tu castigo",
          file: `${process.cwd()}/test/prueba/nuevo.md`.replace(/\\/g, "/"),
          status: 200,
          isOk: "ok",
        },
      ]);
    });
  });
  it("validateLinks deberia retornar un array con un objeto del link, este tendrá un status fail /link roto", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        status: 400,

      })
    );
    await validateLinks(arrayLinkStatusFail).then((res) => {
      expect(res).toEqual([
        {
          href: "https://youtu.be/1rqSAC7UKt4nono",
          text: "tu castigo",
          file: `${process.cwd()}/test/prueba/nuevo.md`.replace(/\\/g, "/"),
          status: 400,
          isOk: "fail",
        },
      ]);
    });
  });
});
