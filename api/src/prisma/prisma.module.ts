import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global() // 📌 Evita ter que importar em todo módulo.
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule { }