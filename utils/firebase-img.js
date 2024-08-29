const admin = require("firebase-admin");
const serviceAccount = JSON.parse(Buffer.from(process.env.CREDENTIAL_FIREBASE, 'base64').toString('ascii'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://images-polinet.appspot.com"
});

const bucket = admin.storage().bucket();


async function deleteImage(remoteFilePath) {
    try {
        await bucket.file(`images/${remoteFilePath}`).delete();
    } catch (error) {
        console.error(error);
    }
}

async function makeFilePublic(remoteFilePath) {
    try {
        const file = bucket.file(remoteFilePath);
        await file.makePublic();
        const publicUrl = `https://storage.googleapis.com/images-polinet.appspot.com/images/${remoteFilePath}`;
        console.log("Archivo hecho público. URL pública:", publicUrl);
        return publicUrl;
    } catch (error) {
        console.error("Error al hacer el archivo público:", error);
    }
}

async function makeAllFilesPublic() {
    try {
        const [files] = await bucket.getFiles(); // Obtén todos los archivos en el bucket
        for (const file of files) {
            await makeFilePublic(file.name); // Haz cada archivo público
        }
    } catch (error) {
        console.error("Error al obtener archivos:", error);
    }
}

async function uploadImage(name) {
    try {
        const [file] = await bucket.upload(`${__dirname}/../storage/${name}`, {
            destination: `images/${name}`,
        });
        await file.makePublic();
        console.log("Imagen subida exitosamente.");
    } catch (error) {
        console.error("Error al subir la imagen:", error);
    }
}



module.exports = { uploadImage , deleteImage }