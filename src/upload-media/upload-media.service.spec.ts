import { Test, TestingModule } from '@nestjs/testing';
import { UploadMediaService } from './upload-media.service';

describe('UploadMediaService', () => {
  let service: UploadMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadMediaService],
    }).compile();

    service = module.get<UploadMediaService>(UploadMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
