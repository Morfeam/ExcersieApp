

const bcrypt = require('bcrypt');
const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;

async function getAllFollows(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All Follows")
    return await mysql.query(`SELECT * FROM ${PREFIX}Followers`);
}

async function getFollowers(Follower_id){
    const sql = `SELECT *, (SELECT Value FROM ${PREFIX}Followers Where Follower_id = ${PREFIX}Users.id`;
    const rows = await mysql.query(sql, [Follower_id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such FollowerId" };
    return rows[0];
}

async function getFollowing(Following_id){
    const sql = `SELECT *, (SELECT Value FROM ${PREFIX}Followers Where Following_id = ${PREFIX}Users.id`;
    const rows = await mysql.query(sql, [Following_id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such Following id" };
    return rows[0];
}

async function addFollow(Following_id,Follower_id,IsAccepted){
    const sql = `INSERT INTO ${PREFIX}Followers (created_at, Following_id,Follower_id,IsAccepted) VALUES ? ;`;
    const params = [[new Date(), Following_id,Follower_id,IsAccepted]];
    return await mysql.query(sql, [params]);
}

async function updateFollow(id,Following_id,Follower_id,IsAccepted){
    const sql = `UPDATE ${PREFIX}Followers SET ? WHERE id = ?;`;
    const params = { Following_id,Follower_id,IsAccepted };
    return await mysql.query(sql, [params, id]);
}

async function removeFollow(id){
    const sql = `DELETE FROM ${PREFIX}Followers WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Following_id, Follower_id FROM ${PREFIX}Followers WHERE Following_id LIKE ? OR Follower_id LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAllFollows, getFollowers,getFollowers, getFollowing,addFollow,updateFollow,removeFollow, search, Types }
