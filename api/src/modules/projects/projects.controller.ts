import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('projects') // Essa anotação é usada para organizar os endpoints relacionados a projetos na documentação do Swagger. Um controller é igual a uma `ApiTags`.
@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) { }

    @Get()
    @ApiOperation({ summary: 'Listar todos os projetos' })
    findAll() {
        return this.projectService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um projeto por ID' })
    findOne(@Param('id') id: string) {
        return this.projectService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Criar um novo projeto' })
    create(@Body() dto: CreateProjectDto) {
        return this.projectService.create(dto);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um projeto existente' })
    update(
        @Param('id') id: string,
        @Body() dto: UpdateProjectDto,
    ) {
        return this.projectService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um projeto existente' })
    @HttpCode(204) // O código 204 No Content (Sem Conteúdo) é um código de erro HTTP que indica que uma requisição foi bem-sucedida, mas o servidor não precisa retornar nenhum corpo de dados na resposta. É um status de sucesso (família 200). 
    remove(@Param('id') id: string) {
        return this.projectService.remove(id);
    }
}
