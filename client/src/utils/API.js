//calling axios to use with our api
import axios from "axios";

export default {
// Get book from google search 
getGoogleSearchBooks: function(query) {
    console.log("query", query);
    
    //using the googleAPI from https://developers.google.com/books/docs/v1/getting_started#REST
    return axios.get("/api/google", { params: { q: "title:" + query } });
},
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};