const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.NODE_ENV !== 'production' ? process.env.RAILWAY_PRIVATE_DOMAIN : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    })

    server.route(routes)

    await server.start()
    console.log(`Server start at ${server.info.uri}`)
}

init()
