import { sql } from "@vercel/postgres";


export const getData = async () => {
    const { rows } = await sql`SELECT * from tipo_producto`;
    return rows;
}