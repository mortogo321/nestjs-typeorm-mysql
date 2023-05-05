import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (configService: ConfigService): TypeOrmModuleOptions => {
  const options: TypeOrmModuleOptions = {
    type: 'mysql',
    host: configService.get('mysql.host'),
    port: +configService.get<number>('mysql.port'),
    username: configService.get('mysql.user'),
    password: configService.get('mysql.password'),
    database: configService.get('mysql.database'),
    entities: [
      /** entities here **/
    ],
    synchronize: false,
  };

  return options;
};
