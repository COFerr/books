const { ObjectId } = require('mongodb');
import database from ".."

export interface Books {
    id?: string;
    titulo: string;
    descricao: string;
    lancamento: Number;
    autor: string;
    categoria: string;
    createdAt?: Date;
  }
  
class BooksRepository{
    
    async createBook(newBook : Books): Promise<any> {
        return await database.insertOne({ ...newBook })
    }
    
    async findBooks(filter = {}) {
        const books = await database.find(filter).toArray()
        return books
    }
    
    async findBook(id : string) {
        const book = await database.findOne({ _id: new ObjectId(id) })
        return book
    }
    
    async updateOne(id : string, payload = {}) {
        return await database.updateOne({ _id: new ObjectId(id) }, { $set: payload })
    }
    async removeBook(id : string){
        return await database.deleteOne({_id: new ObjectId(id)})
    }
  }

export const booksRepository = new BooksRepository();
