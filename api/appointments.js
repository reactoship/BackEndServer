const router = require('express').Router()
const { Appointment } = require('../db/models')

router.get('/', (req, res, next) =>
    Appointment.findAll().then(appts => res.json(appts)).catch(next)
)

router.post('/', (req, res, next) => {
    const { startTime: time, location, attendeeId, userId } = req.body
    Appointment.create({ time, location, attendeeId, userId }).then(appt => {
        console.log(appt);
        res.send('Success')
    })
})

module.exports = router