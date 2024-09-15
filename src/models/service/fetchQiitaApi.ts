import QiitaAPI from "@clients/qiitaapi";
import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";

export default class FetchQiitaAPIService implements BaseService<any> {
    client: QiitaAPI;
    endpoint: string;

    constructor(client: QiitaAPI, endpoint: string) {
        this.client = client;
        this.endpoint = endpoint;
    }

    async execute(): Promise<any> {
        try {
            const response = await this.client.fetch(this.endpoint);
            return response;
        } catch (e) {
            throw new ServiceError(
                400,
                this.endpoint,
                "Qiita",
                "FetchQiitaAPI",
                "QiitaAPIとの通信に失敗しました",
            );
        }
    }
}
