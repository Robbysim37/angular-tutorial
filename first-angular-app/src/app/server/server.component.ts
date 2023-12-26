import { Component } from "@angular/core"

@Component({
    //HTML tag to access component
    selector: `app-server`,
    // Pointer to the HTML file we want to use as a template
    templateUrl: "./server.component.html"
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
    }

    getServerStatus() {
        return this.serverStatus
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}