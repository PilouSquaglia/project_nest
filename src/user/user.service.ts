import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common/exceptions';
@Injectable()
export class UserService {
  private readonly users: User[] = [];

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(nom: string, email: string, age: number, password: string) {
    const newUser = new this.userModel({
      nom: nom,
      email: email,
      age: age,
      password: password,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async getUsers() {
    const user = await this.userModel.find();
    // console.log(user);
    const res = user.map((user) => ({
      id: user.id,
      nom: user.nom,
      email: user.email,
      age: user.age,
      password: user.password,
    }));
    res.forEach((element) => {
      console.log(element);
      //this.users.push(element);
    });
    return res;
  }

  async getOneUser(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }

    return user;
    // return {id: user.id,
    //         nom: user.nom,
    //         email: user.email,
    //         age: user.age
    // };
  }

  async getOneUserEmail(email: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findOne({ email: email }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user with email.');
    }
    if (!user) {
      // throw new NotFoundException('Could not find user with email 2.');
      user = null;
    }
    return user;
  }

  async updateUser(
    userId: string,
    nom: string,
    email: string,
    age: number,
    password: string,
  ) {
    const updatedUser = await this.getOneUser(userId);
    if (nom) {
      updatedUser.nom = nom;
    }
    if (email) {
      updatedUser.email = email;
    }
    if (age) {
      updatedUser.age = age;
    }
    if (password) {
      updatedUser.password = password;
    }
    updatedUser.save();
  }

  async removeUser(userId: string) {
    try {
      await this.userModel.deleteOne({ _id: userId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
  }
}
