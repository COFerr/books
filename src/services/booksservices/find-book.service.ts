import { Books, booksRepository } from "../../database/repositories/books.repositories";

async function findBookService(id: string){
    try{
        const book = await booksRepository.findBook(id)

        if(!book){
            return{
                statusCode: 404,
                data: null,
                message: "Book not found"
            }
        }

        return{
            statusCode: 200,
            data: book,
            message: "Book Sucessfuly Found"
        }
    }
    catch(error){
        return{
            statusCode: 500,
            data: null,
            message: "Not defined error"
        }
    }
}

export default findBookService