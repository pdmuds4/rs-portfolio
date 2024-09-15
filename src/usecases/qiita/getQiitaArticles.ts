import BaseUseCase from "@utils/abstruct/usecase";
import FetchQiitaAPIService from "@models/service/fetchQiitaApi";

export interface QiitaArticleDTO {
    title: string;
    link: string;
    written: Date;
}

export default class GetQiitaArticlesUseCase implements BaseUseCase<undefined, QiitaArticleDTO[]> {
    service: FetchQiitaAPIService;

    constructor(service: FetchQiitaAPIService) {
        this.service = service;
    }
    
    async execute(): Promise<QiitaArticleDTO[]> {
        const response = await this.service.execute();
        return response.map((article: any) => {
            return {
                title: article.title,
                link: article.url,
                written: new Date(article.created_at),
            } as QiitaArticleDTO;
        });
    }
}