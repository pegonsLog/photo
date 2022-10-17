import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pegons',
        password: 'pegons',
        database: 'pegons',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: ['./migrations/photo'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];