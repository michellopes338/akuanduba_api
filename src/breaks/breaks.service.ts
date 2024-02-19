import { Injectable } from '@nestjs/common';
import { CreateBreakDto } from './dto/create-break.dto';
import { UpdateBreakDto } from './dto/update-break.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BreaksService {
  constructor(private prisma: PrismaService) {}

  async create(createBreakDto: CreateBreakDto) {
    const newBreak = await this.prisma.break.create({ data: createBreakDto });
    return newBreak;
  }

  async findAll() {
    return await this.prisma.break.findMany();
  }

  async update(id: number, updateBreakDto: UpdateBreakDto) {
    return await this.prisma.break.update({
      where: { id },
      data: updateBreakDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.break.delete({ where: { id } });
  }
}
