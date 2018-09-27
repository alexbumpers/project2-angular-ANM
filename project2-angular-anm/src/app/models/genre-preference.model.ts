export class Preference {
    pId: {
        muser_id:number,
        pLevel:number
    };
    genre: string;

    constructor(muser_id: number, pLevel:number, genre: string){
        this.pId.muser_id = muser_id;
        this.pId.pLevel = pLevel;
        this.genre = genre;
    }
}