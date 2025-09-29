import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AssignmentsController } from './assignments/assignments.controller';
import { AssignmentsModule } from './assignments/assignments.module';
import { AssignmentsService } from './assignments/assignments.service';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [LinksModule, AssignmentsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
