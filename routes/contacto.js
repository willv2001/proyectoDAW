const { Router } = require('express');
const router = Router();

router.post('/enviarCorreo' , (req, res) => {
    const { name, email, message } = req.body;

    contentHtml = `
        <h1>Informacion del usuario</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Correo: ${email}</li>
            <li>Mensaje: ${message}</li>
        </ul>
    `;
    console.log(contentHtml);
    res.send('Recibido');
});

module.exports = router