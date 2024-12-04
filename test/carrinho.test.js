import Carrinho from "../carrinho";
import Item from '../item';

describe('testes do carrinho', () => {
    it('deve inicializar vazio', () => {
        const carrinho = new Carrinho();

        expect(carrinho.total).toBeNull();
    });


    it('deve ter itens', () => {
        const item = new Item('caderno', 4, 5);
        const item2 = new Item('lápis', 2, 10);

        const carrinho = new Carrinho();

        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item)
        expect(carrinho.itens).toContain(item2)
    });


    it('deve ter a propriedade "total" na inicialização', () => {
        const carrinho = new Carrinho();

        expect(carrinho).toHaveProperty('subtotal')
    });


    it('deve ter um array vazio', () => {
        const carrinho = new Carrinho();

        expect(carrinho.itens).toHaveLength(0)
    })

    it('deve calcular o valor total do item', () =>{
        const item = new Item('camisa', 20, 1)

        const carrinho = new Carrinho();

        carrinho.adiciona(item)

        carrinho.adicionaFrete(15)

        carrinho.calculaTotal()
        
        carrinho.finalizaCompra()

        expect(typeof carrinho).toBe('object');
        expect(carrinho.total).toBe(35)
        
    })
})