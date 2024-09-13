export async function GET() {
    return Response.json(
        {
            message: 'This is base API route.'
        },
        {
            status: 200
        }
    );
}