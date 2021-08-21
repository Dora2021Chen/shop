export class UserData {
    constructor(
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
        public phone: string,
        public email: string,
        public id?: number,
    ) { }
}
