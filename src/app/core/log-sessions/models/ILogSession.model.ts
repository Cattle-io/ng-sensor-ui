export interface ILogSession {

    id: number;
    
    project_id: number;
    title: string;
    description: string;
    
    duration_hrs: number;
    started_at: Date;
    finished_at: Date;
    status: string;

    created_at: Date;
    updated_at: Date;


}