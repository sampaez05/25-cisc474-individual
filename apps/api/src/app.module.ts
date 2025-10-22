import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AssignmentsModule } from './assignments/assignments.module';
import { CoursesModule } from './courses/courses.module';
import { FeedbackModule } from './feedback/feedback.module';
import { GradesModule } from './grades/grades.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [LinksModule, AssignmentsModule, CoursesModule, FeedbackModule, GradesModule, SubmissionsModule, UsersModule, AuthModule, RolesModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
