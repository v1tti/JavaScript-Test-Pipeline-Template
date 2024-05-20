const calculadora = require('../arquivos-para-testar/calculadora')

describe('Testes para o segundo arquivo', () => {
    it('Deve retornar soma de 1 e 3', () => {
        const resultadoEsperado = 4

        expect(calculadora.soma(1,3)).toBe(resultadoEsperado)
    })
})