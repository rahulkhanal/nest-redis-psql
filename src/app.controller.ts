import { Body, Controller, Delete, Get, Patch, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller("app")
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  addHello(@Body() body,): string {
    console.log(body);
    return this.appService.addHello(body);
  }

  @Patch()
  updateHello(): string {
    return this.appService.updateHello();
  }

  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
}
