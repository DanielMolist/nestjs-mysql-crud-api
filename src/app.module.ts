import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'nest_crud',
      autoLoadEntities: true, // Carga automaticamente, no hace falta entities: []
      synchronize: true,
    }),
    BreedsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
