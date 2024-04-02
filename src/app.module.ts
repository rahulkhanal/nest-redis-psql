import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appEntity } from './app.entity';
import { CacheModule } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { inject } from 'vue';

@Module({
  imports: [
    TypeOrmModule.forFeature([appEntity]),
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async (config) => {
        const store = await redisStore({
          ttl: 2 * 30 * 24 * 60 * 60,
          socket: {
            host: config.get('redis.host'),
            port: config.get('redis.port')
          }
        })
        return { store }
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'tradepilot',
      logging: false,
      synchronize: true,
      entities: [appEntity],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
