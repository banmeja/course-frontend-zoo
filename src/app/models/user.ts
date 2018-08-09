export class User {
    constructor(
        //el _id es el que devuelve mongo
        public _id: string,
        public name: string,
        public lastname: string,
        public email: string,
        public password: string,
        public role: string
    ){}
}