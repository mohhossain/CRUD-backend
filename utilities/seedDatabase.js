const { Student, Campus } = require('../database/models');

const seedDatabase = async () => {
  console.log('before')
  await Promise.all([
    
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      gpa: 3.5,
      email: 'student@gmail.com',
      image: 'djshnfdskjgfbnsjlkdfbgksfjb'
    }),
    Student.create({
      firstName: "LeBron",
      lastName: "James",
      gpa: 3.5,
      email: 'student@gmail.com',
      image: 'djshnfdskjgfbnsjlkdfbgksfjb'
    }),
    Student.create({
      firstName: "Luka",
      lastName: "Doncic",
      gpa: 3.5,
      email: 'student@gmail.com',
      image: 'djshnfdskjgfbnsjlkdfbgksfjb'
    }),
    Campus.create({

      name: 'Brooklyn College',
      image: 'dsfaddsfsfs',
      description: 'CUNY',
      adress: 'Brooklyn'

    })
  ]);
  console.log('after')
}

module.exports = seedDatabase;
