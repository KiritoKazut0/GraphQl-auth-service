import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'database-2.c2lflgg77rry.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'lizzy198027',
  database: 'basededatos'
});

export const createConnection = () => {
  return mysql.createConnection(db);
}

