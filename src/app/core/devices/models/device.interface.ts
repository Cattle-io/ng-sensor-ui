
export interface IDevice {

    id: number;

    animal_id: number;
    experiment_id: number;

    ip: string;
    uid: string;

    name: string;
    category: string;
    firmware: string;
    status: string;

    picture_url: string;

    last_signal_level: number;
    last_battery_level: number;

    created_at: Date;
    updated_at: Date;

    temperature_value?: number;
    temperature_units?: string;

    humidity_value?: number;
    humidity_units?: string;

    ch4_value?: number;
    ch4_units?: string;



}
