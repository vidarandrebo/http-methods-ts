export class HttpResponse {
    body: object | null;
    status: number;

    constructor(body: object | null, status: number) {
        this.body = body;
        this.status = status;
    }
}
