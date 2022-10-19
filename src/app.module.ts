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
function Config(): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
  throw new Error('Function not implemented.');
}

