import { Module } from '@nestjs/common';
import { UserTestService } from './user-test.service';
import { UserTestController } from './user-test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTestSchema } from './user-test.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserTest', schema: UserTestSchema }]),
  ],
  controllers: [UserTestController],
  providers: [UserTestService],
})
export class UserTestModule {}
