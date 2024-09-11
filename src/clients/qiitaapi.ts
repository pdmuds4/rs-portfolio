import BaseError from "@utils/abstruct/error";

export default class QiitaAPI {
    private readonly token: string;
    private readonly base_url: string = 'https://qiita.com/api/v2';

    constructor(token: string) {
        this.token = token;
    }

    async fetch(endpoint: string) {
        const response = await fetch(this.base_url + endpoint, {
            headers: {
                'Authorization': `Bearer ${this.token}`,
                "Content-Type": "application/json",
            }
        })

        if (response.ok) {
            return await response.json();
        } else {
            throw new BaseError(
                response.status,
                "infrastructure",
                "Any",
                "QiitaAPI",
                "QiitaAPIとの通信に失敗しました",
                response.statusText
            );
        }
    }
}