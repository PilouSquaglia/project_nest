import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadMediaService {
  getHello(): string {
    return 'Upload Media !';
  }
}
