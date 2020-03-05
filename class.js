var fs = require('fs').promises;

class MyDB {
    constructor(data) {
        this.data = data;
        console.log(this.data);
    }

    async save(path) {
        return (fs.writeFile(path, this.data), JSON.stringify(this.data));
    }
}

module.exports.MyDB = MyDB;