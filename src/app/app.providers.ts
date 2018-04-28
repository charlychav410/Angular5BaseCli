import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import{GitHubService} from"./services/gut-hub.service";
import { ColorService } from './services/color.service';
import { LoginService } from './services/login.service';
import {ExamenService} from './services/examen.service';


export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    GitHubService,
    ColorService,
    LoginService,
    ExamenService
    
];
