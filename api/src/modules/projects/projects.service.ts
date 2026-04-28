import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: Date;
}

@Injectable()
export class ProjectsService {
    // private projects: Project[] = []; // Armazena dados em memória local

    constructor(private readonly prisma: PrismaService) { } // Salva dados no banco com Prisma

    async findAll() {
        // return this.projects;  // Retorna projetos do armazenamento local

        const projects = await this.prisma.project.findMany({ // Retorna projetos do db com Prisma
            orderBy: {
                createdAt: 'desc'
            }
        });

        return projects.map(this.mapProject);
    }

    async findOne(id: string) {
        const project = await this.prisma.project.findUnique({ where: { id } });
        if (!project) {
            throw new NotFoundException('Project not found');
        }
        return this.mapProject(project)
    }

    async create(dto: CreateProjectDto) {
        return await this.prisma.project.create({
            data: {
                title: dto.title,
                description: dto.description,
                tags: JSON.stringify(dto.tags)
            }
        })
    }

    async update(id: string, dto: UpdateProjectDto) {  // Recebo qual projeto deve ser atualizado por meio do parâmetro
        await this.findOne(id); // Busca qual o projeto pelo `findOne`

        return this.prisma.project.update({ // Registro a alteração no projeto
            where: { id },
            data: {
                title: dto.title,
                description: dto.description,
                tags: dto.tags ? JSON.stringify(dto.tags) : undefined
            }
        })
    }

    async remove(id: string) {
        await this.findOne(id);

        return await this.prisma.project.delete({ where: { id } })
    }

    private mapProject(project) {
        return {
            ...project,
            tags: JSON.parse(project.tags)
        }
    }
}

// O service é responsável por lidar com a lógica de negócio da aplicação. Ele é onde implementaa as funções de criação, leitura, atualização e exclusão. Ele pode se comunicar com o banco de dados ou outras fontes de dados para obter ou armazenar informações.