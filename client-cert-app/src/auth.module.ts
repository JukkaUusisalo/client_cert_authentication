import { Module } from '@nestjs/common';
import {ClientCertStrategy} from "./client-cert.strategy";

@Module({
    providers: [ClientCertStrategy],
    exports: [ClientCertStrategy]
})
export class AuthModule {}