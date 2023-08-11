import { Controller, Get } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { iTrack } from './tracks.interface';

@Controller('tracks')
export class TracksController {
    constructor(private readonly TracksService: TracksService){}
    @Get()
    getTracks(): Promise<iTrack[]> {
return this.TracksService.getTracks();
    }

}
