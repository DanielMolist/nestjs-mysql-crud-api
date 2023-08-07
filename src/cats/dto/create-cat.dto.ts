import { IsInt, IsOptional, IsString, Min, MinLength } from 'class-validator'

export class CreateCatDto {
    @IsString()
    @MinLength(1)
    name: string;

    @IsInt()
    @Min(1)
    age: number;

    @IsString()
    @IsOptional()
    breed?: string;

}
