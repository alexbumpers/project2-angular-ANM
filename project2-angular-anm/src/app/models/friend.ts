import { Preference } from './genre-preference.model';
export class Friend {
    constructor(
        public handle: string,
        public prof_pic: string,
        public songs: Preference[]){}
}