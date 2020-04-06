import { Length, IsString, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';

export class Update {

    @IsString()
    @Length(2, 50)
    name: string;

    @IsString()
    @Length(2, 50)
    lastname: string;

    @IsString()
    @Length(9, 15)
    phone: string;

    @Length(3, 50)
    city: string;

    @Length(3, 50)
    country: string;

    @Length(1, 3)
    language: string;
}