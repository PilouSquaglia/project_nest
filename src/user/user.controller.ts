import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post()
  async addUser(@Body('nom') userNom: string,
                @Body('prenom') userPrenom: string,
                @Body('age') userAge: number,
          ){
              const generatedId = await this.userService.insertUser(
                userNom,
                userPrenom,
                userAge,
              );
              return {id: generatedId };
            }

  @Get()
  getAllUsers(){
    return this.userService.getUsers();
  }

  @Get(':id')
  getOneUser(@Param('id') userId: string){
    return this.userService.getOneUser(userId);
  }

  @Patch(':id')
  async update(@Param('id') id: string,
         @Body('nom') userNom: string,
         @Body('prenom') userPrenom: string,
         @Body('age') userAge: number,
  ) {
    await this.userService.updateUser(id, userNom, userPrenom, userAge);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string) {
    await this.userService.removeUser(id);
  }
}
