import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserService {

  private readonly users: User[] = [];

  // constructor() {
  //   this.users.push({
  //     id: 1,
  //     name: 'Name',
  //     email: 'name@email.com',
  //     password: 'password',
  //   });

  //   this.users.push({
  //     id: 2,
  //     name: 'Test',
  //     email: 'aa@email.com',
  //     password: 'aa',
  //   });
  // }

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(nom: string, prenom: string, age: number){
    const newUser = new this.userModel({
      nom: nom,
      prenom: prenom,
      age: age
    });
   const result = await newUser.save();
   return result.id as string;
  }

  getUsers(){
    this.userModel
    return [...this.users];
  }


  create(createUserDto: any) {
    this.users.push(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  // findOne(id: number) {
  //   return this.users.find(item => item.id === +id);
  //   // return `This action returns a #${id} user`;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // login(loginUserDto: LoginUserDto, id: string) {
  //   if(this.users.find(item => item.id === +id) != undefined){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
}
