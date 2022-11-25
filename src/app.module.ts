import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Demo, DemoSchema } from '../schemas/bdd.schema';

@Module({
  imports: [UserModule, MongooseModule.forRoot(
    'mongodb://localhost:27017/project_bdd')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}