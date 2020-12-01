
export interface IExperiment {
    id: number;
    project_id: number;
    title: string;
    description: string;

    duration_hrs: string;

    started_at: Date;
    finished_at: Date;

    created_at: Date;
    updated_at: Date;
}
