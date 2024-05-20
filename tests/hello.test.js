const hello = require('../arquivos-para-testar/hello')

describe('Testes para o primeiro arquivo', () => {
    it('Deve retornar Hello Word', () => {
        const resultadoEsperado = 'Hello World'

        expect(hello()).toBe(resultadoEsperado)
    })
})