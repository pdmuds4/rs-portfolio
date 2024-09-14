import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/api")) {
        if (request.headers.get('X-API-Key') === process.env.API_KEY) {
            return NextResponse.next();
        } else {
            return new NextResponse(
                'Invalid API KEY', 
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

            if (username === 'admin' && password === 'admin') {
                return NextResponse.next()
            } else {
                return new NextResponse(
                    'Invalid credentials', 
                    {
                        status: 401,
                        headers: {
                            'WWW-Authenticate': 'Basic realm="Secure Area"'
                        }
                    }
                )
            }
        } else {
            return new NextResponse(
                'Authentication required', 
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