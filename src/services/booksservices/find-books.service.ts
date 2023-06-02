import { Books, booksRepository } from "../../database/repositories/books.repositories";

async function findBooksService(query? : any){
    try{
        const{lt, gt} = query;

        const filter = 
        lt && gt ? 
        {lancamento : {$lt : parseFloat(lt), $gt : parseFloat(gt)}}
        : lt ?
        {lancamento: {$lt: parseFloat(lt)}}
        : gt ?
        {lancamento:  {$gt : parseFloat(gt)}}
        : null;
        
        const books = filter ?
        await booksRepository.findBooks(filter)
        : await booksRepository.findBooks()

        const page = parseInt(query.page) || 1
        const pageSize = parseInt(query.pageSize) || 5

        const startIndex = (page-1) * pageSize
        const endIndex = page * pageSize
        const booksPaginated = books.slice(startIndex, endIndex)

        return {
            statusCode: 200,
            data: booksPaginated,
            currentPage: page,
            totalPages: Math.ceil(books.length/pageSize),
            message: "Ok!"
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

export default findBooksService