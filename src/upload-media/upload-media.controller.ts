import { Controller, Get, Post, Req } from '@nestjs/common';
import { UploadMediaService } from './upload-media.service';
import * as uploader from 'huge-uploader-nodejs';
import { promises as fs } from 'fs';
import _ = require('lodash');

@Controller('upload-media')
export class UploadMediaController {
  constructor(private readonly uploadMediaService: UploadMediaService) {}

  @Get()
  getHello(): string {
    return this.uploadMediaService.getHello();
  }

  @Post()
  async uploadFile(@Req() req: Request) {
    if (req) {
      // you must specify a temp upload dir and a max filesize for the chunks
      const tmpDir =
        'C:/Users/MidGard-P/Desktop/projects_test/project_nest-Copie/tmp';
      const maxFileSize = 10;
      const maxChunkSize = 10;

      const assembleChunks = await uploader(
        req,
        tmpDir,
        maxFileSize,
        maxChunkSize,
      );
      if (!assembleChunks) return;
      const data = await assembleChunks();

      const filepath = data.filePath;
      const filename: string = data.postParams.filename;
      const ext: string = '.' + _.last(filename.split('.'));
      const name = filename.substring(0, filename.length - ext.length);
      const mediaPath = './uploads';

      await fs.copyFile(filepath, mediaPath);
      await fs.rename(mediaPath, filename + '.' + ext);
    } else {
      console.log('Pas de fichier');
      return 'Pas de fichier !';
    }
  }
}
