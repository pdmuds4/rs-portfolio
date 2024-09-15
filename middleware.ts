import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/api")) {
        if (request.headers.get('X-API-Key') === process.env.NEXT_PUBLIC_API_KEY) {
            return NextResponse.next();
        } else {
            return Response.json(
                {
                    message: 'Invalid API KEY', 
                },
                {
                    status: 400
                }
            );
        }
    }

    if (request.nextUrl.pathname.startsWith("/author")) {
        const basicAuth = request.headers.get('authorization')

        if (basicAuth) {
            const [, base64Credentials] = basicAuth.split(' ')
            const [username, password] = Buffer.from(base64Credentials, 'base64').toString().split(':')

            if (username === process.env.BASIC_USERNAME && password === process.env.BASIC_PASSWORD) {
                return NextResponse.next()
            } else {
                return Response.json(
                    { 
                        message: 'Invalid credentials', 
                    },
                    {
                        status: 401,
                        headers: {
                            'WWW-Authenticate': 'Basic realm="Secure Area"'
                        }
                    }
                )
            }
        } else {
            return Response.json(
                {
                    message: 'Authentication required', 
                },
                {
                    status: 401,
                    headers: {
                        'WWW-Authenticate': 'Basic realm="Secure Area"'
                    }
                }
            );
        }
    }

    return NextResponse.next();
}