const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const selectAllUser = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `select * from Message`;

  const list = await connection.queryAsync(sql);

  await connection.endAsync();

  return list;
};

const addUser = async (Message) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO Message(id,name,msg) values(?,?,?)`;

  connection.queryAsync(sql, [Message.id, Message.name, Message.msg]);
  console.log("Record Added");
  await connection.endAsync();
};

module.exports = { selectAllUser, addUser };
