import {IsString, MinLength} from 'class-validator';

export class QueryDto {
  @IsString()
  @MinLength(1)
  q: string;
}
