export class UserApp {
    constructor(
        public uid: string,
        public name: string,
        public token: string,
        public admin: boolean,
        public cover: string,
        public followers: [UserApp],
        public picurl: string,
    ) { }
}