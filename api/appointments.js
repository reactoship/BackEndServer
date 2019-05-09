const router = require('express').Router()
const { Appointment } = require('../db/models')

router.get('/', (req, res, next) =>
    Appointment.findAll().then(appts => res.json(appts)).catch(next)
)

router.post('/', (req, res, next) => {
    const { startTime: time, location, attendeeId, userId } = req.body
    Appointment.create({ time, location, attendeeId, userId }).then(appt => {
        res.json('Successfully created.')
    })
})

router.delete('/', (req, res, next) => {
    const { appointmentId: id } = req.body
    Appointment.destroy({ where: { id } }).then(appt => res.send('Successfully deleted.'))
})

module.exports = router