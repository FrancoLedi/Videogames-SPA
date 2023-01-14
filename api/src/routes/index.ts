import {Router} from 'express';

// Importo los routers:
import VideogamesR from './Videogames';
import GenresR from './Genres';
import VideogameDetailR from './VideogameDetail';

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/videogame', VideogameRouter)

router.use('/videogame/', VideogameDetailR);

router.use('/videogames', VideogamesR);

router.use('/genres', GenresR);

export default router;
