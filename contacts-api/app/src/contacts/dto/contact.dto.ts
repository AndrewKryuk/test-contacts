import {IsInt, IsNotEmpty, IsOptional, IsString, Matches} from 'class-validator';

export class ContactDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  company: string;

  @Matches(
    /\S+@\S+\.\S+/,
    { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  zip: string;

  @IsString()
  country: string;

  @IsString()
  title: string;

  @IsString()
  phone: string;

  @IsString()
  contactName: string;

  status?: 'deleted' | 'saved' = 'deleted';

  constructor(object?: ContactDto) {
    if (!!object) {
      for (const prop in object) {
        if (object.hasOwnProperty(prop)) {
          this[prop] = object[prop];
        }
      }
    }
  }
}
