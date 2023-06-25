import { sequel } from ".."
import { QueryTypes } from 'sequelize'

export const getData = async () => {
    let query = `select * from tipo_producto`;

    return await sequel.query(query, {
        type: QueryTypes.SELECT
    });
}