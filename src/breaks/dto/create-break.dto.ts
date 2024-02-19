import { Length } from 'class-validator';
import { Exclude } from 'class-transformer';

export class CreateBreakDto {
  @Exclude()
  id: number;

  @Length(8, 16)
  name: string;
}
