import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { randomUUID } from 'node:crypto';
import { UpdateProjectDto } from './dto/update-project.dto';

type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: Date;
}

@Injectable()
export class ProjectsService {
    private projects: Project[] = [];

    findAll() {
        return this.projects;
    }

    findOne(id: string): Project {
        const project = this.projects.find((p) => p.id === id);
        if (!project) {
            throw new NotFoundException('Project not found');
        }
        return project;
    }

    create(dto: CreateProjectDto): Project {
        const project: Project = {
            id: randomUUID(),
            title: dto.title,
            description: dto.description,
            tags: dto.tags ?? [],
            createdAt: new Date(),
        }

        this.projects.push(project);
        return project;
    }

    update(id: string, dto: UpdateProjectDto): Project {  // Recebo qual projeto deve ser atualizado por meio do parâmetro
        const project = this.findOne(id); // Busca qual o projeto pelo `findOne`
        Object.assign(project, dto) // Registro a alteração no projeto
        return project;
    }

    remove(id: string): void {
        // A tipagem 'void' é usada porque esta função não retorna nenhum valor útil
        // Ela apenas remove um projeto do array e não precisa retornar o projeto removido
        // O tipo 'void' indica que a função executa uma ação (side effect) mas não produz um resultado
        const index = this.projects.findIndex((p) => p.id === id);
        if (index === -1) {
            throw new NotFoundException('Project not found');
        }
        this.projects.splice(index, 1);
    }
}

// O service é responsável por lidar com a lógica de negócio da aplicação. Ele é onde implementaa as funções de criação, leitura, atualização e exclusão. Ele pode se comunicar com o banco de dados ou outras fontes de dados para obter ou armazenar informações.