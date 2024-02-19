import { Exclude } from 'class-transformer';
import { IsNumber, IsNumberString, IsString, Length } from 'class-validator';

export class CreateTimerDto {
  @Exclude()
  id: number;

  @IsString()
  @Length(4, 5)
  time: string;

  @IsNumberString()
  duration: string;

  @IsNumber()
  breakId: number;

  @Exclude({ toPlainOnly: true })
  secondsUntil: string;
}
