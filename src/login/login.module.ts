import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './login.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Login', schema: LoginSchema}])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
