import { UserData } from './user';
export class ResponseRows {
    statusCode: number | undefined;
    statusMsg: string | undefined;
    entities: UserData[] | undefined;
}