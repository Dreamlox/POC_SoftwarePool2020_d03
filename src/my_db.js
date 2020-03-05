const MyDB = require('../class.js');

const data = new MyDB({coucou : "yo"});
data.save("db.json");