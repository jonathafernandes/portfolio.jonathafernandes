import { IsArray, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateProjectDto {
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    @MinLength(3)
    description: string;

    @IsArray()
    @IsOptional()
    tags?: string[];
}

// Classe para definir a forma que os dados serão recebidos e enviado. Os tipo dos dados são validados automaticamente com o `class-validator`.
