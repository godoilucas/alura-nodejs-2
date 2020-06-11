const { check } = require('express-validator');

class Livro{
    static validacoes(){
        return [
            check('titulo').isLength({min: 5}).withMessage('O título deve conter pelo menos 5 caracteres!'),
            check('preco').isCurrency().withMessage('O campo preço deve possuir formato monetário válido!')
        ];
    }
}

module.exports = Livro;