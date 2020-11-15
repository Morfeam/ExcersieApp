

const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { ADMIN:5, USER:6 };

async function getAllExerciseTypes(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All Exercise_Types")
    return await mysql.query(`SELECT * FROM ${PREFIX}Exercise_Types`);
}


async function addExercise(Name,Type,Muscle_group,Relative_Difficulty){
    const sql = `INSERT INTO ${PREFIX}Exercise_Types (created_at,Name,Type,Muscle_group,Relative_Difficulty ) VALUES ? ;`;
    const params = [[new Date(), Name,Type,Muscle_group,Relative_Difficulty]];
    return await mysql.query(sql, [params]);
}

async function updateExercise(id, Name,Type,Muscle_group,Relative_Difficulty){
    const sql = `UPDATE ${PREFIX}Exercise_Types SET ? WHERE id = ?;`;
    const params = { Name,Type,Muscle_group,Relative_Difficulty };
    return await mysql.query(sql, [params, id]);
}

async function removeExercise(id){
    const sql = `DELETE FROM ${PREFIX}Exercise_Types WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

module.exports = {getAllExerciseTypes,addExercise,updateExercise,removeExercise};
