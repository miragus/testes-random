import Twitter from "../twitter";

describe('feed do usuário', () => {
    let twitter;
    let mockDatabase;

    beforeEach(() => {
        mockDatabase = [];
        twitter = new Twitter(mockDatabase);
    });

    it('deve adicionar um novo tweet', () => {
        const tweet = {post: 'odeio minha vida'};

        const resultado = twitter.novaPostagem(tweet);

        expect(resultado).toBe(tweet);
        expect(mockDatabase).toContain(tweet);
    })

})