import {Router} from 'express';

// Importo los routers:
const VideogamesR = require('./Videogames.js');
const GenresR = require('./Genres.js');
const VideogameDetailR = require('./VideogameDetail')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/videogame', VideogameRouter)

router.use('/videogame/', VideogameDetailR);

router.use('/videogames', VideogamesR);

router.use('/genres', GenresR);

module.exports = router;
