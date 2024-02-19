import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTimerDto } from './dto/create-timer.dto';
import { UpdateTimerDto } from './dto/update-timer.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TimersService {
  constructor(private prisma: PrismaService) {}

  private isNumeric(str: any) {
    return !/^[0-9]*$/.test(str);
  }

  async create(createTimerDto: CreateTimerDto) {
    const { time } = createTimerDto;
    const [hour, minutes] = time.split(':');
    if (this.isNumeric(hour) || this.isNumeric(minutes)) {
      throw new BadRequestException();
    }

    const timer = await this.prisma.breakTime.create({
      data: createTimerDto,
    });
    return timer;
  }

  async findAll(departamentId: number) {
    return await this.prisma.breakTime.findMany({
      where: { breakId: departamentId },
      orderBy: { time: 'asc' },
    });
  }

  async update(id: number, updateTimerDto: UpdateTimerDto) {
    return await this.prisma.breakTime.update({
      where: { id_pause: id },
      data: updateTimerDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.breakTime.delete({ where: { id_pause: id } });
  }
}
