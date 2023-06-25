import { SincronizacionDao } from '../database/dao'

const SHA2 = require("sha2");


export const CodehashClave = async (req, res) => {
    try {

        const clave = "Diego0831."
        const shaPass = Buffer.from(SHA2["SHA-224"](clave)).toString('base64');

        const data = await SincronizacionDao.getData();

        res.status(200).send({ shaPass, data });
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: 'La operación no se pudo concretar, favor intente más tarde.', err: e.message });
    }
}
