const db = require("../models");
const axios = require ("axios");

module.exports = {
findAll: function(req, res) {
  console.log(req);
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results => {
       const books = results.data.items.map(book => {
          return (book.volumeInfo);
        });
        console.log(books);
        res.json(books);
        })
      .catch(err => res.status(422).json(err));
  }
}
 