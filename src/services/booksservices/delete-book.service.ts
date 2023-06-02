import { Books, booksRepository } from "../../database/repositories/books.repositories";

async function deleteBookService(id: string) {
    try{
        const book = await booksRepository.findBook(id)

        if(!book){
            return{
                statusCode: 404,
                data: null,
                message: "Not Found"
            }
        }

        await booksRepository.removeBook(id);

        return{
            statusCode: 200,
            data: book,
            message: `Book ${id} sucesfully deleted`
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

export default deleteBookService