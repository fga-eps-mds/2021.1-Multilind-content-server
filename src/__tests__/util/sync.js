const fs = require('fs');

const deleteDatabase = () => {
    fs.unlink('database.sqlite', function (err) {
        if (err) console.log(err);
        console.log('Database Deleted!');
    });
};

deleteDatabase();