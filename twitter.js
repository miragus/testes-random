class Twitter {
    constructor(database) {
        this.database = database;
    }

    novaPostagem(postagem) {
        if (!postagem.post) {
          throw new Error('usuário ainda não tweetou');
        }
        this.database.push(postagem);
        return postagem;
      }

}

export default Twitter;