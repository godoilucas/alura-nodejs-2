const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

const Livro = require('../modelo/livro');

module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();

    app.get(rotasBase.home, baseControlador.home());
};