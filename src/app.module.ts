import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TracksService } from './tracks/tracks.service';
import { TracksController } from './tracks/tracks.controller';



@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath:join(__dirname,'..','public')})
  ],
  controllers: [AppController, TracksController],
  providers: [AppService, TracksService],
})
export class AppModule {}
