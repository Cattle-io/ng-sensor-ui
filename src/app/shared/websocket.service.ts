
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class WebSocketService {

    private socket: WebSocket;
    private listener: EventEmitter<any> = new EventEmitter();

    public constructor() {
        this.socket = new WebSocket("ws://localhost:8000/ws/packets/stream/");
        this.socket.onopen = event => {
            this.listener.emit({ "type": "open", "data": event });
        }
        this.socket.onclose = event => {
            this.listener.emit({ "type": "close", "data": event });
        }
        this.socket.onmessage = event => {
            this.listener.emit({ "type": "message", "data": JSON.parse(event.data) });
        }

        
    }

    public send(data: string) {
        this.socket.send(data);
    }

    public close() {
        this.socket.close();
    }

    public getEventListener() {
        return this.listener;
    }

}