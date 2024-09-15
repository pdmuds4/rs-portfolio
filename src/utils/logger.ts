import pino from 'pino';

export type LogJson = {
    level: number;
    time: string;
    pid: number;
    hostname: string;
    msg: string;
};


const Logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    transport: process.env.VERCEL ? undefined : {
        targets: [
        {
            target: 'pino-pretty',
            options: { 
                destination: 2,
            }
        },
        {
            target: 'pino-pretty',
            options: { 
                destination: 'logs/console.log',
                translateTime: 'SYS:standard',
                colorize: false,
                append: false
            }
        },
        {
            target: 'pino/file',
            options: { 
                destination: 'logs/json.log',
                translateTime: 'SYS:standard',
                ignore: 'pid',
                mkdir: true,
                append: false
            }
        },
        ]
    }
});

export default Logger;