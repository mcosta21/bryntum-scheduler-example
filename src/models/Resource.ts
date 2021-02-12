export class Resource {
    id         : string;
    name       : string;
    charge     : string; 
    photo?     : string;

    constructor(_id : string, _name : string, _charge : string, _photo? : string) {
        this.id = _id;
        this.name = _name;
        this.charge = _charge;
        this.photo = _photo;
    }

}