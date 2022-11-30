import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from './login.model';
import { UserService } from 'src/user/user.service';


@Injectable()
export class LoginService {

  private readonly login: Login[] = [];
  private readonly UserService;

  constructor(@InjectModel('Login') private readonly loginModel: Model<Login>){}

  async loginUsers(email: string, password: string){
    if(email && password){
      let searchUser = await this.UserService.getOneUserEmail(email);
      if(searchUser.password==password){
        return true;
      }
      else{
        return false;
      }
    }

  }
}
