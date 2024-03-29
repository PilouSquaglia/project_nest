import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from './login.model';
import { UserService } from 'src/user/user.service';
import { Redirect } from '@nestjs/common/decorators';

@Injectable()
export class LoginService {
  private readonly login: Login[] = [];

  constructor(
    @InjectModel('Login') private readonly loginModel: Model<Login>,
    private userService: UserService,
  ) {}

  async loginUsers(values: JSON) {
    const json = JSON.stringify(values);
    const parsedJson = JSON.parse(json);
    console.log(parsedJson.email);
    console.log(parsedJson.password);
    if (parsedJson.email && parsedJson.password) {
      const searchUser = await this.userService.getOneUserEmail(
        parsedJson.email,
      );
      if (searchUser != null) {
        console.log('SeachUser password : ' + searchUser.password);
        if (searchUser.password == parsedJson.password) {
          console.log(true);
          return true;
        }
      } else {
        console.log(false);
        return false;
      }
    }
  }
}
