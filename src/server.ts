import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { WebSocketServer } from 'ws';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = createServer(async (req, res) => {
        try {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url!, true);

            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
            res.statusCode = 500;
            res.end('internal server error');
        }
    });

    // WebSocket Server Setup
    const wss = new WebSocketServer({ noServer: true });

    wss.on('connection', (ws) => {
        console.log('Client connected to WebSocket');

        ws.on('message', (message) => {
            console.log('Received:', message.toString());
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });

    server.on('upgrade', (req, socket, head) => {
        const { pathname } = parse(req.url || '', true);

        if (pathname === '/conversation') {
            wss.handleUpgrade(req, socket, head, (ws) => {
                wss.emit('connection', ws, req);
            });
        } else {
            // Allow Next.js to handle other upgrades (e.g. HMR) logic if necessary,
            // or just destroy if strictly dedicated. 
            // For Next.js HMR, it usually handles its own upgrade on a separate path/_next/webpack-hmr
            // verification of path is important.
            if (pathname?.startsWith('/_next/webpack-hmr')) {
                // Let Next.js handle it? 
                // Actually next dev server handles HMR on its own, but since we are using custom server, 
                // we might need to be careful. 
                // Standard pattern: just ignore non-matching upgrades or let them hang?
                // Next.js documentation says: "When using a custom server, you'll need to handle the upgrade request manually"
                // usage with 'ws' usually conflicts if not filtered.
            }
        }
    });

    server.listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port} as ${dev ? 'development' : 'production'}`);
    });
});
