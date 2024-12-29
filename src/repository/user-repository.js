const { user } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      // console.log("Model : ", db);
      const response = await user.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }
}

module.exports = UserRepository;
