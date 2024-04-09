import mysql from 'mysql';

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'karthi123#',
    database: 'jobportal'
});

db.connect(err => {
    if (err) {
        console.error("error connecting mysql database", err);
    } else {
        console.log("connected to mysql");
    }
});

export default db;
