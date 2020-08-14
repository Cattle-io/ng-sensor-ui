import { Time } from '@angular/common';

export interface IDevice {
    id: number;
    animal_id: number;
    experiment_id: number;
    ip: string, 
    uid:string;
    name: string;
    category: string;
    firmware: string;
    status: string;
    picture_url: string;
    last_signal_level: number;
    last_battery_level: number;
    created_at: Date;
    updated_at:Date;
}