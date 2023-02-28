import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTestModule } from './user-test/user-test.module';
import { LoginModule } from './login/login.module';
import { UploadMediaController } from './upload-media/upload-media.controller';
import { UploadMediaService } from './upload-media/upload-media.service';
import { UploadMediaModule } from './upload-media/upload-media.module';

@Module({
  imports: [
    UserModule,
    LoginModule,
    UserTestModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    UploadMediaModule,
  ],
  controllers: [AppController, UploadMediaController],
  providers: [AppService, UploadMediaService],
})
export class AppModule {}
