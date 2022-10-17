import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { DatabaseModule } from 'src/database/database.module';
import { photoProviders } from './photo.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';

@Module({
  imports: [
  TypeOrmModule.forFeature([Photo]),  
    DatabaseModule
  ],
  exports: [TypeOrmModule],
  controllers: [PhotoController],
  providers: [...photoProviders, PhotoService]
})
export class PhotoModule {}
