import MongoDBClient from "@clients/mongodb";
import BaseError from "./abstruct/error";

export default async function queryDB<QueryDTO, ResDTO>(
    client: MongoDBClient,
    query: QueryDTO,
    query_function: (query: QueryDTO) => Promise<ResDTO|void>
) {
    try {
        await client.connect();
    } catch (error) {
        if (error instanceof Error) {
            throw new BaseError(
                503,
                "Infrastructure",
                "Any",
                "MongoDBClient",
                "MongoDB Atrasとの接続開始に失敗しました",
                error.message
            );
        }
    }

    try {
        const result = await query_function(query);
        return result;
    } finally {
        await client.close();
    }
}