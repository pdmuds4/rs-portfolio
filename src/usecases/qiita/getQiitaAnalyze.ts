import BaseUseCase from "@utils/abstruct/usecase";
import FetchQiitaAPIService from "@models/service/fetchQiitaApi";

export type QiitaAnalyzeDTO = {
    tech: string;
    precentage: number;
}

export default class GetQiitaAnalyzeUseCase implements BaseUseCase<undefined, QiitaAnalyzeDTO[]> {
    service: FetchQiitaAPIService;

    constructor(service: FetchQiitaAPIService) {
        this.service = service;
    }
    
    async execute(): Promise<QiitaAnalyzeDTO[]> {
        const response = await this.service.execute();

        const all_tags = response.map(
            (article: any) => article.tags.map(
                (tag: any) => tag.name
            )
        ).flat() as string[];

        const tags_count = all_tags.reduce((result: any, tag: any) => {
            return {...result, [tag]: ((result[tag] || 0) + 1)};
        }, {}) as {[key: string]: number};


        const top_5_techs = Object.entries(tags_count)
            .sort(([, a], [, b]) => b - a).slice(0, 5)
        const sum_5_techs = top_5_techs.reduce((sum, [, value]) => sum + value, 0);
            
        return top_5_techs.map(
            ([key, value]) => ({
                tech: key,
                precentage: Math.round(value / sum_5_techs * 100)
            })
        ) as QiitaAnalyzeDTO[];
    }
}