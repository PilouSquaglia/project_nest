import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post()
  async addUser(@Body('nom') userNom: string,
                @Body('email') userEmail: string,
                @Body('age') userAge: number,
                @Body('password') userPassword: string,
          ){
              const generatedId = await this.userService.insertUser(
                userNom,
                userEmail,
                userAge,
                userPassword,
              );
              return {id: generatedId };
            }

  @Get()
  getAllUsers(){
    return this.userService.getUsers();
  }

  // @Get(':id')
  // getOneUser(@Param('id') userId: string){
  //   return this.userService.getOneUser(userId);
  // }

  @Get(':email')
  getOneUserEmail(@Param('email') userEmail: string){
    return this.userService.getOneUserEmail(userEmail);
  }

  @Patch(':id')
  async update(@Param('id') id: string,
         @Body('nom') userNom: string,
         @Body('email') userEmail: string,
         @Body('age') userAge: number,
         @Body('password') userPassword: string,
  ) {
    await this.userService.updateUser(id, userNom, userEmail, userAge, userPassword);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string) {
    await this.userService.removeUser(id);
  }
}
