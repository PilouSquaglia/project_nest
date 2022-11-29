import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTestModule } from './user-test/user-test.module';

@Module({
  imports: [UserModule, UserTestModule, MongooseModule.forRoot(
    'mongodb://127.0.0.1:27017/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}