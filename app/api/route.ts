export async function GET(request: Request) {
    return Response.json(
        {
            message: 'This is base API route.'
        },
        {
            status: 200
        }
    );
}