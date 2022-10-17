import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pegons',
      password: 'pegons',
      database: 'pegons',
      entities: [
          __dirname + '/./**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    
    PhotoModule
  ],
})
export class AppModule {}
