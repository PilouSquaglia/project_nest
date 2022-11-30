import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTestService } from './user-test.service';

@Controller('userTest')
export class UserTestController {
  constructor(private readonly userService: UserTestService) {}


  @Post()
  async addUserTest(@Body('nom') userNom: string,
                @Body('prenom') userPrenom: string,
                @Body('age') userAge: number,
          ){
              const generatedId = await this.userService.insertUserTest(
                userNom,
                userPrenom,
                userAge,
              );
              return {id: generatedId };
            }

  @Get()
  getAllUserTests(){
    return this.userService.getUserTests();
  }

  @Get(':id')
  getOneUserTest(@Param('id') userId: string){
    return this.userService.getOneUserTest(userId);
  }

  @Patch(':id')
  async update(@Param('id') id: string,
         @Body('nom') userNom: string,
         @Body('prenom') userPrenom: string,
         @Body('age') userAge: number,
  ) {
    await this.userService.updateUserTest(id, userNom, userPrenom, userAge);
  }

  @Delete(':id')
  async removeUserTest(@Param('id') id: string) {
    await this.userService.removeUserTest(id);
  }
}
