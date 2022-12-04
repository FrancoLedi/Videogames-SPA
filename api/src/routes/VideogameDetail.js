
const { Router } = require('express');

const { getDbInfo, getDetail } = require('./AuxFunctions')

const router = Router();



router.get('/:idVideogame', async (req, res) => {
    
    const { idVideogame } = req.params;
    const detailApi = await getDetail(idVideogame);
    const dataDB = await getDbInfo();
    const detailDB = await dataDB.find( el =>  el.id == idVideogame);
    

        if (detailApi) return res.send(detailApi);

        else if (detailDB) return res.send(detailDB);
         
        else return res.send('ID inexistente');
        });

    module.exports = router; 

