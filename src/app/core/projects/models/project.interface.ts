
export interface IProject {
    id: number;

    title:string;
    image:string;
    description:string;
    department:string;
    city:string;
    place_name:string;
    place_category:string;
    place_lat:string;
    place_lng:string;

    created_at: Date;
    updated_at: Date;
}
