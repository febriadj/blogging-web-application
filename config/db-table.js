'use strict'

exports.tableArticles = function() {
  return new Promise((resolve, reject) => {
    let sql = `CREATE TABLE IF NOT EXISTS articles (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) UNIQUE KEY NOT NULL,
      description TINYTEXT,
      url TINYTEXT UNIQUE KEY NOT NULL,
      file_name CHAR(100) UNIQUE KEY NOT NULL,
      file_size INT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    )`

    resolve(sql)
  })
}

exports.tableComments = function() {
  return new Promise(resolve => {
    let sql = `CREATE TABLE IF NOT EXISTS comments (
      id INT PRIMARY KEY AUTO_INCREMENT,
      id_articles INT UNIQUE KEY NOT NULL,
      username VARCHAR(100) DEFAULT 'Anonymous' NOT NULL,
      email TINYTEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
      FOREIGN KEY(id_articles) REFERENCES articles(id) ON DELETE CASCADE ON UPDATE CASCADE 
    )`

    resolve(sql)
  })
}