const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");

const { JWT_KEY } = require("../config/serverConfig");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const response = await this.userRepository.createUser(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async signIn(email, plainPassword) {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      const passwordMatch = this.checkPassword(plainPassword, user.password);

      if (!passwordMatch) {
        console.log("password doesnt match");
        throw { error: "Incorrect password" };
      }

      const newJWT = this.createToken({ email: user.email, id: user.id });

      return newJWT;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);

      if (!response) {
        throw { error: "Invalid Token" };
      }

      const User = this.userRepository.getById(response.id);

      if (!User) {
        throw { error: "No User with corresponding token exists" };
      }

      return response.id;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async createToken(user) {
    try {
      const token = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return token;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer", error);
      throw { error };
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in the service layer", error);
      throw { error };
    }
  }
}

module.exports = UserService;
