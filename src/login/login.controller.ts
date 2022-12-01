import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Redirect } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() body) {
    return this.loginService.loginUsers(body);
  }

  @Get()
  get() {
    console.log("Get Passed");
    Redirect('http://localhost:4200/user');
  }

  // @Get()
  // findAll() {
  //   return this.loginService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.loginService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
  //   return this.loginService.update(+id, updateLoginDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loginService.remove(+id);
  // }
}
