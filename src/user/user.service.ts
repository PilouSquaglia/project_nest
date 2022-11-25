import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundError } from 'rxjs';
import { NotFoundException } from '@nestjs/common/exceptions';
@Injectable()
export class UserService {

  private readonly users: User[] = [];

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async insertUser(nom: string, prenom: string, age: number) {
    const newUser = new this.userModel({
      nom: nom,
      prenom: prenom,
      age: age
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async getUsers() {
    const users = await this.userModel.find();
    console.log(users);
    return users.map(user => ({
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      age: user.age
     }));
  }

  async getOneUser(id: string): Promise<User> {
    let user;
    try{
      user = await this.userModel.findById(id).exec();
    } catch(error){
      throw new NotFoundException('Could not find user.');
    }
    if(!user) {
      throw new NotFoundException('Could not find user.');
    }

    return user;
    // return {id: user.id,
    //         nom: user.nom,
    //         prenom: user.prenom,
    //         age: user.age
    // };
  }

  async updateUser(userId: string, nom: string, prenom: string, age: number){
    const updatedUser = await this.getOneUser(userId);
    if(nom) {
      updatedUser.nom = nom;
    }
    if(prenom) {
      updatedUser.prenom = prenom;
    }
    if(age) {
      updatedUser.age = age;
    }
    updatedUser.save();
  }

  async removeUser(userId: string){
    try{
       await this.userModel.deleteOne({_id: userId}).exec();
    }
    catch(error){
      throw new NotFoundException('Could not find user.');
    }
  }
}
