import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { appEntity } from './app.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    
    @InjectRepository(appEntity)
    private appRepository: Repository<appEntity>,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }
  addHello(body): string {
    return 'Hello World!';
  }
  updateHello(): string {
    return 'Hello World!';
  }
  deleteHello(): string {
    return 'Hello World!';
  }
}
