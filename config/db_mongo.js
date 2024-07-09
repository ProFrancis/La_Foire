const mongoose = require('mongoose');

const connectDB = (mongoURL, dbName) => {
  mongoose.connect(mongoURL, {dbName: dbName})
    .then(() => console.log('Connexion à mongoDB réussi !'))
    .catch((error) => console.error('Erreur de connexion à mongoDB : ', error))
}

module.exports = connectDB