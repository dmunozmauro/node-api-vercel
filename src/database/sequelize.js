import { database as dbConfig } from '../config'
import { Sequelize } from 'sequelize'

export let sequelize

if (process.env.NODE_ENV === 'local') {
    sequelize = new Sequelize(dbConfig)
} else {
    sequelize = new Sequelize({
        dialect: 'postgre',
        timezone: '-03:00'    
    })
}

// sequelize.afterConnect(async (conn, _opt) => {
//     const searchPath = process.env.SCHEMA
//     console.log(`Seteando esquema ${searchPath}... `)
//     try {
//         await conn.query(`SET search_path = ${searchPath} `)
//     } catch (err) {
//         console.error('Error seteando esquema', err)
//     }
// })

export { Sequelize }

export default { sequelize, Sequelize }