const { Student } = require('../database/models');

const seedDatabase = async () => {
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
    })
  ]);
}

module.exports = seedDatabase;
