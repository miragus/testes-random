import Item from "../item";


describe('teste dos itens', () => {
    it('deve ter 3 campos: nome, valor e quantidade', () => {
        const item = new Item('beterraba', 2.5, 10)

        expect(item.nome).toBe('beterraba');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    })
    it('deve ter o preço calculado de acordo com a quantidade', () => {
        const item = new Item('arroz', 0.1, 3)

        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
    })
})