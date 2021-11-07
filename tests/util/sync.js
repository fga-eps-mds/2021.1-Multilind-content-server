const fs = require('fs');
const path = require('path'); 

const deleteDatabase = () => {
    fs.unlink(path.resolve(__dirname, '..', 'database.sqlite'), function (err) {
        if (err){ 
            console.log(err); 
            return;
        }
        console.log('Database Deleted!');
    });
};

deleteDatabase();