import QiitaAPI from "@clients/qiitaapi"
import BaseError from "@utils/abstruct/error"
import apiErrorHandler from "@utils/apiErrorHandler"

import FetchQiitaAPIService from "@models/service/fetchQiitaApi"
import { GetQiitaAnalyzeUseCase, GetQiitaArticlesUseCase } from "@usecases/qiita"

const client = new QiitaAPI(process.env.QIITA_TOKEN || '')
const service = new FetchQiitaAPIService(client, process.env.QIITA_ENDPOINT || '')

export async function GET(
    request: Request, 
    { params }: { params: { mode: "analyze" | "articles" } }
) {
    return await apiErrorHandler(
        request,
        async () => {
            const mode = params.mode

            if (mode === "analyze") {
                const usecase = new GetQiitaAnalyzeUseCase(service)
                const response = await usecase.execute()
                
                return Response.json(
                    response,
                    {
                        status: 200
                    }
                )
            } else if (mode === "articles") {
                const usecase = new GetQiitaArticlesUseCase(service)
                const response = await usecase.execute()

                return Response.json(
                    response,
                    {
                        status: 200
                    }
                )
            } else {
                throw new BaseError(404, 
                    'Infrastructure',
                    'Qiita',
                    'GET',
                    'modeパスが不正です',
                    mode
                )
            }
        }
    )
}