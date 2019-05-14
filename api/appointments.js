const router = require('express').Router()
const { Appointment } = require('../db/models')

router.get('/', (req, res, next) =>
    Appointment.findAll().then(appts => res.json(appts)).catch(next)
)

router.post('/', (req, res, next) => {
    const { startTime: time, location, attendeeId, userId } = req.body
    Appointment.create({ time, location, attendeeId, userId }).then(appt => {
        res.json('Successfully created.')
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
    const appointmentId = +req.params.id
    const { attendeeId } = req.body

    Appointment.findByPk(appointmentId).then(appt => {
        appt.update({ attendeeId }).then(updated => res.json(updated)).catch(next)
    })
})

router.delete('/', (req, res, next) => {
    const { appointmentId: id } = req.body
    Appointment.destroy({ where: { id } }).then(appt => res.send('Successfully deleted.')).catch(next)
})

module.exports = router