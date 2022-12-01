import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from './login.model';
import { UserService } from 'src/user/user.service';
import { Redirect } from '@nestjs/common/decorators';


@Injectable()
export class LoginService {

  private readonly login: Login[] = [];

  constructor(@InjectModel('Login') private readonly loginModel: Model<Login>,
              private userService: UserService){}

  async loginUsers(values: JSON){
    let json = JSON.stringify(values);
    let parsedJson = JSON.parse(json);
    console.log(parsedJson.email);
    if(parsedJson.email && parsedJson.password){
      let searchUser = await this.userService.getOneUserEmail(parsedJson.email);
      if(searchUser.password==parsedJson.password){
        console.log(true);
        Redirect("http://localhost:4200/user");
      }
      else{
        console.log(false);
        return false;
      }
    }

  }
}
