import { sql } from "@vercel/postgres";


export const getData = async () => {
    return await sql.query("select * from tipo_producto");
}