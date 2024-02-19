import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreaksModule } from './breaks/breaks.module';
import { TimersModule } from './timers/timers.module';

@Module({
  imports: [BreaksModule, TimersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
