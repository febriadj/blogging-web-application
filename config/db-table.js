'use strict'

exports.tableArticles = function() {
  return new Promise((resolve, reject) => {
    let sql = `CREATE TABLE IF NOT EXISTS articles (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) UNIQUE KEY NOT NULL,
      description TINYTEXT,
      url TINYTEXT UNIQUE KEY NOT NULL,
      file_name CHAR(12) UNIQUE KEY NOT NULL,
      file_size INT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    )`

    resolve(sql)
  })
}