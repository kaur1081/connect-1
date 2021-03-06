'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Trips', [{
      title: 'Fishing trip',
      location: 'Florida Keys',
      Description: 'I want to catch a shark!',
      tripDate: '2022-12-12',
      image: 'https://www.usnews.com/dims4/USNEWS/51a07af/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F47%2Fcb%2F12d46a8a47fb9616e593f5667cf4%2F1.%20Florida%20Keys%20Getty.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});

  }
};
