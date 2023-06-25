export default Object.freeze({
    host: process.env.POSTGRES_HOST,
    port: process.env.PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    dialect: process.env.DIALECT,
    pool: Object.freeze({
        max: Number(process.env.POOL_MAX) || 5,
        min: Number(process.env.POOL_MIN) || 0,
        idle: Number(process.env.POOL_IDLE) || 30000,
        acquire: Number(process.env.POOL_ACQUIRE) || 1000
    })
})