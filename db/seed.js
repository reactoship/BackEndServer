const db = require('./db');
const { User } = require('./models');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced!');

  const [alfred, barbara, carol, derrick, erica] = await Promise.all([
    User.create({
      email: 'alfred@example.com',
      password: '12345',
      firstName: 'Alfred',
      lastName: 'Example'
    }),
    User.create({
      email: 'barbara@example.com',
      password: '12345',
      firstName: 'Barbara',
      lastName: 'Example'
    }),
    User.create({
      email: 'carol@example.com',
      password: '12345',
      firstName: 'Carol',
      lastName: 'Example'
    }),
    User.create({
      email: 'derrick@example.com',
      password: '12345',
      firstName: 'Derrick',
      lastName: 'Example'
    }),
    User.create({
      email: 'erica@example.com',
      password: '12345',
      firstName: 'Erica',
      lastName: 'Example'
    })
  ]);

  const today = new Date();

  const appointments = await Promise.all([
    alfred.createAppointment({
      time: today.setDate(today.getDate() + 7),
      location: 'Oasis'
    }),
    barbara.createAppointment({
      time: today.setDate(today.getDate() + 3),
      location: 'Java'
    }),
    carol.createAppointment({
      time: today.setDate(today.getDate() + 5),
      location: 'Ruby'
    }),
    derrick.createAppointment({
      time: today.setDate(today.getDate() + 1),
      location: 'Hallway'
    })
  ]);

  await appointments[1].setAttendee(erica);
  await appointments[2].setAttendee(barbara);
};

(async () => {
  try {
    await seed();
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
})();
