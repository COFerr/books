import { Router } from "express";

import BooksController from "../controllers/books.controller";

const booksRouter = Router();

booksRouter.get("/", BooksController.getBooks);
booksRouter.get("/:id", BooksController.getBook);

booksRouter.post("/", BooksController.create);

booksRouter.put("/:id", BooksController.updateBook);

booksRouter.delete("/:id", BooksController.deleteBook);

export default booksRouter;