const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : process.env.RAILWAY_PUBLIC_DOMAIN,
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
