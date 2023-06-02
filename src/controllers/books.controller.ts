import { Request, Response } from "express"

import createBookService from "../services/booksservices/create-books.service"
import deleteBookService from "../services/booksservices/delete-book.service"
import findBookService from "../services/booksservices/find-book.service"
import findBooksService from "../services/booksservices/find-books.service"
import updateBookService from "../services/booksservices/update-book.service"

class BooksController {
    static async create(req: Request, res: Response) {
        const payload = req.body;

        const result = await createBookService(payload)

        const { statusCode, data, message } = result;

        res.status(statusCode).json({
            message,
            data,
        });
    }

    static async getBooks(req: Request, res: Response) {
        const query = req.query;
        console.log(query)

        const result = await findBooksService(query);

        const { statusCode, data, message, currentPage, totalPages } = result;

        res.status(statusCode).json({
            message,
            currentPage,
            totalPages,
            data,
        }
        );
    }

    static async getBook(req: Request, res: Response){
        const id = req.params.id;

        const result = await findBookService(id)

        const { statusCode, message, data } = result;

        res.status(statusCode).json({
            message,
            data,
        });
    }

    static async updateBook(req: Request, res: Response){
        const id = req.params.id;
        const payload = req.body;

        const result = await updateBookService(id, payload);

        const {statusCode, data, message} = result;

        res.status(statusCode).json({
            message,
            data,
        })
    }

    static async deleteBook(req: Request, res: Response){
        const id = req.params.id;

        const result = await deleteBookService(id);

        const {statusCode, data, message} = result;

        res.status(statusCode).json({
            message,
            data,
        })
    }
}

export default BooksController;