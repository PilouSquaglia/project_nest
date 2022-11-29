import { Injectable } from '@nestjs/common';
import { UserTest } from './user-test.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common/exceptions';
@Injectable()
export class UserTestService {

  private readonly usersTest: UserTest[] = [];

  constructor(@InjectModel('UserTest') private readonly userModel: Model<UserTest>) {}

  async insertUserTest(nom: string, prenom: string, age: number) {
    const newUserTest = new this.userModel({
      nom: nom,
      prenom: prenom,
      age: age
    });
    const result = await newUserTest.save();
    return result.id as string;
  }

  async getUserTests() {
    const user = await this.userModel.find();
    console.log(user);
    return user.map(user => ({
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      age: user.age
     }));
  }

  async getOneUserTest(id: string): Promise<UserTest> {
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

  async updateUserTest(userId: string, nom: string, prenom: string, age: number){
    const updatedUserTest = await this.getOneUserTest(userId);
    if(nom) {
      updatedUserTest.nom = nom;
    }
    if(prenom) {
      updatedUserTest.prenom = prenom;
    }
    if(age) {
      updatedUserTest.age = age;
    }
    updatedUserTest.save();
  }

  async removeUserTest(userId: string){
    try{
       await this.userModel.deleteOne({_id: userId}).exec();
    }
    catch(error){
      throw new NotFoundException('Could not find user.');
    }
  }
}
