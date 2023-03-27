const fastify = require('fastify')({
    logger: true
})

fastify.register(require('@fastify/http-proxy'), {
    upstream: 'http://192.168.0.141:5001',
})

fastify.listen({ port: 5001 })