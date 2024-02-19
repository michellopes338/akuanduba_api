import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BreaksService } from './breaks.service';
import { CreateBreakDto } from './dto/create-break.dto';
import { UpdateBreakDto } from './dto/update-break.dto';

@Controller('breaks')
export class BreaksController {
  constructor(private readonly breaksService: BreaksService) {}

  @Post()
  async create(@Body() createBreakDto: CreateBreakDto) {
    return await this.breaksService.create(createBreakDto);
  }

  @Get()
  findAll() {
    return this.breaksService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreakDto: UpdateBreakDto) {
    return this.breaksService.update(+id, updateBreakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breaksService.remove(+id);
  }
}
