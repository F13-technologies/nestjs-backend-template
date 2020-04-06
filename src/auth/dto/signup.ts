import { IsEmail, Length, IsString, IsNumber, Max, IsDate, IsOptional } from 'class-validator';

export class signup {

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

    @IsOptional()
    @Length(3, 80)
    accountXM: string;

    @IsEmail()
    email: string;

    @Length(3, 30)
    password: string;
}