import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    const photo = this.photoRepository.create(createPhotoDto);
    return this.photoRepository.save(photo);
  }

  findAll() {
    return this.photoRepository.find();
  }

findOne(id: number) {
    return this.photoRepository.findOne({
      where: {
        id: id
      },
    });
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    const photo = await this.photoRepository.findOne({
      where: {
        id: id,
      }
    });
    photo.name = updatePhotoDto.name;
    photo.description = updatePhotoDto.description
   const photoUpdated = this.photoRepository.save(photo);
    return photoUpdated;
  }

  async remove(id: number) {
    const photoDeleted = await this.photoRepository.delete(id);
    return "Foto deletada";
  }
}
