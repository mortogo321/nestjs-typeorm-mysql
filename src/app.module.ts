import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './configs/app-config';
import mysqlConfig from '@app/common/database/configs/mysql-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from '@app/common/database/configs/typeorm-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [appConfig, mysqlConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeormConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
