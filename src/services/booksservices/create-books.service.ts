import { Books, booksRepository } from "../../database/repositories/books.repositories";

async function createBookService(payload: Books) {
    try {
        const book = {
            ...payload,
            createdAt: new Date()
        }

        await booksRepository.createBook(book)

        return {
            statusCode: 201,
            data: book,
            message: "book created"
        }
    }
    catch (error) {
        return{
            statusCode: 500,
            data: null,
            message: "Not defined error"
        }
    }
}

export default createBookService
