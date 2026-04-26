import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HealthService {
    constructor(private readonly configService: ConfigService) {}

    checkHealth() {
        const uptime = process.uptime();
        const version = this.configService.get('APP_VERSION') || '1.0.0';

        return {
            status: 'ok',
            uptime,
            version,
            timestamp: new Date().toISOString(),
        };
    }
}

