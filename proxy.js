const fastify = require('fastify')({
    logger: true
})

fastify.register(require('@fastify/http-proxy'), {
    upstream: 'https://api.ruchamp.ru/api',
})

fastify.listen({ port: 5001 })