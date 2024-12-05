import UserService from "../userService";

describe('gerenciamento de usuários', () => {
  let userService;
  let mockDatabase;

  beforeEach(() => {
    mockDatabase = [];
    userService = new UserService(mockDatabase);
  });

  it('deve adicionar um novo usuario', () => {
    const newUser = { name: 'gus', email: 'gusta@gmail.com' };
    
    const result = userService.addUser(newUser);

    expect(result).toBe(newUser);
    expect(mockDatabase).toContain(newUser);
  });

})