import express from "express";
const router = express.Router();
import { Book } from "../models/bookMode.js";

//save a book
router.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .json({ message: "Send all required fields:title,author,publishYear" });
    }
    const { title, author, publishYear } = req.body;
    const newBook = {
      title,
      author,
      publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

//get all books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    if (books)
      res.status(200).json({
        count: books.length,
        books,
      });
  } catch (error) {
    console.log(error.message);
  }
});

//get single book
router.get("/single-book", async (req, res) => {
  try {
    const { bookId } = req.query;
    const singleBook = await Book.findOne({ _id: bookId });
    if (!singleBook) return res.status(400).json({ message: "Not found" });
    res.status(200).json(singleBook);
  } catch (error) {
    console.log(error.message);
  }
});

//edit single books
router.put("/update-book/:bookId", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .json({ message: "Send all required fields:title,author,publishYear" });
    }
    const { bookId } = req.params;
    const data = await Book.findByIdAndUpdate(bookId, req.body);
    if (!data) return res.status(404).json({ message: "Not found" });
    return res.status(200).json({ message: "Book Updated Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//delete a book
router.delete("/delete-book/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const isDeleted = await Book.deleteOne({ _id: bookId });
    console.log(isDeleted);
    if (isDeleted.deletedCount == 0)
      return res.status(400).json({ message: "Not found" });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;
