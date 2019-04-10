import models from '../models'
import express from 'express';

const router = express.Router();
const category = models.Category;


router.get('/:id', (req, res) => {
    category.findAll({
        attributes: ['id', 'name', 'createdAt', 'userId'],
        where: {
            id: req.params.id
        },
        include: [{
            model: models.User,
        }]
    }).then(data => {
        return res.status(200).send(data)
    })
});


module.exports = router;