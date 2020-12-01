export interface IPacket {
    id: number;
    name: string;
    device_id: number;
    experiment_id: number;
    raw: string;
    timestamp: Date;
}

export interface ICH4Packet extends IPacket{
    ch4_ppm: number;
    ch4_adc: number;
}

