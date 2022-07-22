const faker = require('faker');

const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];
    const usernames= ['slimdom', 'K-Bugs', 'thenextmj400', 'SJMHOCHESS', 'adityasharma57001', 'rtilghman', 'cesl15']
    for (let i = 0; i < usernames.length; i += 1) {
        const username = usernames[i];
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);



    console.log('all done!');
    process.exit(0);
});
