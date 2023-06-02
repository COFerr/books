import { Books, booksRepository } from "../../database/repositories/books.repositories";

async function updateBookService(id: string, payload: any){
    try{
        let book = await booksRepository.findBook(id)

        if(!book) {
            return{
                statusCode: 404,
                data: null,
                message: "Livro não encontrado"
            }
        }

        await booksRepository.updateOne(id, payload)
        book = await booksRepository.findBook(id)
        
        return{
            statusCode: 200,
            data: book,
            message: "Book sucessfully updated"
        }
    }
    catch(error){
        return{
            statusCode: 500,
            data: null,
            message: "Not defined Error"
        }
    }
}

export default updateBookService