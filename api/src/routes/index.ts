import {Router} from 'express';

// Importo los routers:
const VideogamesR = require('./Videogames');
const GenresR = require('./Genres');
const VideogameDetailR = require('./VideogameDetail')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/videogame', VideogameRouter)

router.use('/videogame/', VideogameDetailR);

router.use('/videogames', VideogamesR);

router.use('/genres', GenresR);

export default router;
