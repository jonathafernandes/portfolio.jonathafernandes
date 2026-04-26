import { PartialType } from "@nestjs/swagger";
import { CreateProjectDto } from "./create-project.dto";

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}

// O PartialType reaproveita a validação dos tipos dos dados e os torna opcionais.