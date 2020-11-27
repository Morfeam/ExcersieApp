

const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Privacy_Setting = { hidden:0, onlyme:1, onlyfriends:2,public:4};

async function getAllWorkouts(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All Workouts")
    return await mysql.query(`SELECT * FROM ${PREFIX}Workouts`);
}

async function getUserWorkouts(Owner_id){
    console.log("Get all user workouts:", Owner_id)
    return await mysql.query(`SELECT * FROM ${PREFIX}Workouts Where Owner_id = ?`,[Owner_id]);
}

async function getPublicWorkouts(Setting){
    console.log("Get all Public workouts:", Setting)
    return await mysql.query(`SELECT * FROM ${PREFIX}Workouts Where Privacy_Setting = ?`,[Setting]);
}

async function getWorkout(id){
    console.log("Get workout at: ", id)
    return await mysql.query(`SELECT VALUE FROM ${PREFIX}Workouts Where id= ?`,[id]);
}

async function addWorkout( Owner_id, Privacy_Setting, Time, Exercise_Type, Note, Distance, Other_Info){
    const sql = `INSERT INTO ${PREFIX}Workouts (created_at, Owner_id, Privacy_Setting, Time, Exercise_Type, Note, Distance, Other_Info) VALUES ? ;`;
    const params = [[new Date(), Owner_id, Privacy_Setting, Time, Exercise_Type, Note, Distance, Other_Info]];
    return await mysql.query(sql, [params]);
}

async function updateWorkout (id, Privacy_Setting, Other_Info){
    const sql = `UPDATE ${PREFIX}Workouts SET ? WHERE id = ?;`;
    const params = { Privacy_Setting, Other_Info};
    return await mysql.query(sql, [params, id]);
}

async function removeWorkout(id){
    const sql = `DELETE FROM ${PREFIX}Workouts WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Owner_id, Exercise_Type FROM ${PREFIX}Workouts WHERE Owner_id LIKE ? OR Exercise_Type LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAllWorkouts, getUserWorkouts, getPublicWorkouts, getWorkout, addWorkout, updateWorkout,removeWorkout, search, Privacy_Setting }
