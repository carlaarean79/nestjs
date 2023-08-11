import { Injectable } from '@nestjs/common';
import {iTrack} from './tracks.interface';
import * as fs from 'fs'


const URL= ' http://localhost:3030/tracks';//si le pongo el endpoint tracks me devuelve un objeto vacio
                                            //posts es el nombre de mi json
@Injectable()
export class TracksService {
    async getTracks(): Promise<iTrack[]>{
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }
}
