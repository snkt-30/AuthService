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

  async deleteUser(userId) {
    try {
      await user.destroy({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }

  async getById(userId) {
    try {
      const newUser = await user.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return newUser;
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }
  
}

module.exports = UserRepository;
