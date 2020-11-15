

const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;

async function getAllComments(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All Comments")
    return await mysql.query(`SELECT * FROM ${PREFIX}Comments`);
}

async function getComment(id){
    const sql = `SELECT Value FROM ${PREFIX}Comments Where id = LIKE %${id}%`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such comment" };
    return rows[0];
}

async function getCommentsonWorkoutId(Workout_id){
    const sql = `SELECT *, (SELECT Value FROM ${PREFIX}Comments Where Workout_id = LIKE %${Workout_id}%`;
    const rows = await mysql.query(sql, [Workout_id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such Workout" };
    return rows[0];
}

async function getCommentsonOwnerId(Owner_id){
    const sql = `SELECT *, (SELECT Value FROM ${PREFIX}Comments Where Owner_id = LIKE %${Owner_id}%`;
    const rows = await mysql.query(sql, [Owner_id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such Owner" };
    return rows[0];
}


async function addComment(Text,Workout_id,Owner_id){
    const sql = `INSERT INTO ${PREFIX}Comments (created_at,Text,Workout_id,Owner_id) VALUES ? ;`;
    const params = [[new Date(), Text, Workout_id, Owner_id]];
    return await mysql.query(sql, [params]);
}


async function removeComment(id){
    const sql = `DELETE FROM ${PREFIX}Comments WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Workout_id, Owner_id FROM ${PREFIX}Comments WHERE Text LIKE ? OR Workout_id LIKE ? OR Owner_id; `, [`%${q}%`, `%${q}%`, `%${q}%`]);

module.exports = { getAllComments, getComment, getCommentsonOwnerId, getCommentsonWorkoutId, addComment, removeComment, search};
