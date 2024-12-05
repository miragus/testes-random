class UserService {
  constructor(database) {
    this.database = database;
  }

    addUser(user) {
      if (!user.name || !user.email) {
        throw new Error('usuário deve ter um nome e email');
      }
      this.database.push(user);
      return user;
    }
}

export default UserService;
