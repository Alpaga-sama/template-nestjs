import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

let datasourceOptions: TypeOrmModuleOptions = {};

switch (process.env.NODE_ENV) {
  case 'test':
    datasourceOptions = {
      type: 'mssql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      schema: `dbo`,
      entities: [
        join(__dirname, '..', '..', 'modules', '**', '*.entity{.js,.ts}'),
      ],
      synchronize: false,
    };
    break;
  case 'acceptance':
    datasourceOptions = {
      type: 'mssql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      schema: `dbo`,
      entities: [
        join(__dirname, '..', '..', 'modules', '**', '*.entity{.js,.ts}'),
      ],
      synchronize: false,
    };
    break;
  case 'production':
    datasourceOptions = {
      type: 'mssql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      schema: `dbo`,
      entities: [
        join(__dirname, '..', '..', 'modules', '**', '*.entity{.js,.ts}'),
      ],
      synchronize: false,
    };
    break;
  default:
    datasourceOptions = {
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'root',
      password: 'root',
      database: 'template-nestjs',
      schema: `dbo`,
      entities: [
        join(__dirname, '..', '..', 'modules', '**', '*.entity{.js,.ts}'),
      ],
      options: {
        encrypt: false,
      },
      synchronize: true,
      logging: 'all',
      logger: 'file',
    };
    break;
}

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => datasourceOptions,
);
