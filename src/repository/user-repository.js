const { user, Role } = require("../models/index");

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

  async getUserByEmail(userEmail) {
    try {
      const newUser = await user.findOne({
        where: {
          email: userEmail,
        },
      });
      return newUser;
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }

  async isAdmin(userId) {
    try {
      const user = await user.findByPk(userId);
      const AdminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });

      return user.hasRole(AdminRole);
    } catch (error) {}
  }
}

module.exports = UserRepository;
