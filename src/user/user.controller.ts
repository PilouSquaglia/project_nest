import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { isGeneratorFunction } from 'util/types';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // @Get('login')
  // login(@Body() loginUserDto: LoginUserDto, @Param('id') id: string){
  //   return this.userService.login(loginUserDto, id);
  // }

}
