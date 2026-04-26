import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}

// Esse é o module de `projects`, ele importa o `controller` e o `service` para gerenciar a dependência entre eles.
