import { sql } from "@vercel/postgres";


export const getData = async () => {
    return await sql`SELECT * from tipo_producto`;
}