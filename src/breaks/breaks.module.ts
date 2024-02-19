import { Module } from '@nestjs/common';
import { BreaksService } from './breaks.service';
import { BreaksController } from './breaks.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BreaksController],
  providers: [BreaksService, PrismaService],
})
export class BreaksModule {}
