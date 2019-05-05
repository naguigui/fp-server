class User {
  connector: any
	constructor({ connector }: any) {
		this.connector = connector
  }
  
  async getAllUsers() {
    return this.connector.getAllUsers()
  }

  async getById(id: string) {
    return this.connector.getById(id)
  }

  async getByEmail(email: string) {
    return this.connector.getByEmail(email)
  }

  async updateUser(id: string, attr: object) {
    return this.connector.updateUser(id, attr)
  }

  async deleteUser(id: string) {
    return this.connector.deleteUser(id)
  }

  async registerUser(attr: object) {
    return this.connector.registerUser(attr)
  }
}

export default User
