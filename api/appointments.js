const router = require('express').Router()
const { Appointment } = require('../db/models')

router.get('/', (req, res, next) =>
    Appointment.findAll().then(appts => res.json(appts)).catch(next)
)

module.exports = router