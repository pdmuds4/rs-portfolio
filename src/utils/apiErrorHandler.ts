import BaseError from "./abstruct/error";

export default async function apiErrorHandler(
    request: Request,
    callback: (request: Request)=>Promise<Response>,
) {
    try {
        return await callback(request);
    } catch (error) {
        if (error instanceof BaseError) {
            return Response.json(
                {
                    message: error.message,
                    error_value: error.error_value,
                    level: {
                        layer_level: error.layer_level,
                        model_name: error.model_name,
                        class_name: error.class_name,
                    }
                },
                {
                    status: error.status_code
                }
            );
        } else if (error instanceof Error) {
            return Response.json(
                {
                    message: error.message
                },
                {
                    status: 500
                }
            );
        }
    }
}