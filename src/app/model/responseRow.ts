import { UserData } from './user';
export class ResponseRow {
    statusCode!: number;
    statusMsg!: string;
    entity!: UserData;
}