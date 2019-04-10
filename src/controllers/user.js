import models from '../models'
import express from 'express';

const router = express.Router();
const user = models.User;


router.get('/', (req, res) => {
    user.findAll({
        attributes: ['id', 'firstName', 'lastName', 'created_at'],
        include: [{
            model: models.Category,
        }]
    }).then(data => {
        return res.status(200).send(data)
    })
});

router.post('/', (req, res) => {
    const body = req.body;
    console.log("body ", body)
    user.create(body).then(data => {
        return res.status(200).send(data)
    }).catch(err => {
        return res.status(500).send({err: err.errors})
    })
});

router.put('/', (req, res) => {
    const {firstName, lastName, email} = req.body;
    user.update({
        firstName,
        lastName
    }, {
        where: {
            email
        }
    }).then(data => {
        return res.status(200).send(data)
    }).catch(err => {
        return res.status(500).send({err: err.errors})
    })
});


module.exports = router;