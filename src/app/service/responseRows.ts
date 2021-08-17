import { UserData } from './user';
export class ResponseRows {
    statusCode!: number;
    statusMsg!: string;
    entities!: UserData[];
}