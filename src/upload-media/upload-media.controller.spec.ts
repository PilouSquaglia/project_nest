import { Test, TestingModule } from '@nestjs/testing';
import { UploadMediaController } from './upload-media.controller';

describe('UploadMediaController', () => {
  let controller: UploadMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadMediaController],
    }).compile();

    controller = module.get<UploadMediaController>(UploadMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
