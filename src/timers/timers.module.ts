import { Module } from '@nestjs/common';
import { TimersService } from './timers.service';
import { TimersController } from './timers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TimersController],
  providers: [TimersService, PrismaService],
})
export class TimersModule {}
