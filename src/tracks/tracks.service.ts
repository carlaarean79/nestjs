import { Injectable } from '@nestjs/common';
import {iTrack} from './tracks.interface';


const URL= 'http://localhost:3030/tracks';
@Injectable()
export class TracksService {
    async getTracks(): Promise<iTrack[]>{
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }
}
