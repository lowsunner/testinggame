import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
    logger: true
});

fastify.register(fastifyStatic, {
    root: join(__dirname, 'dist'),
    prefix: '/',
});

fastify.setNotFoundHandler((req, reply) => {
    reply.sendFile('404.html');
});

const start = async () => {
    try {
        await fastify.listen({ port: 8080, host: '0.0.0.0' });
        console.log('🚀 The Math Hub is locally running at http://localhost:8080!');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();