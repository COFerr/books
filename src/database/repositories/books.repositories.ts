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

  interface IShoes{}
  
  class ShoesReporitory {
    async create(payload: IShoes) {
      return await database.insertOne(payload);
    }
  
    async getAll(filter = {}) {
      return await database.find(filter).toArray();
    }
  
    async getOnSale() {
      return await database.find({ onSale: true }).toArray();
    }
  
    async getById(id: string) {
      return await database.findOne({
        _id: new ObjectId(id),
      });
    }
  
    async updateById(id: string, payload: any) {
      return await database.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: payload }
      );
    }
  
    async delete(id: string) {
      return await database.deleteOne({
        _id: new ObjectId(id),
      });
    }
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

/* const patrono = {
    titulo: 'avada kedabra para leigos',
    descricao: 'O livro ensina a fazer um avadra kedabra lorem ipsum...',
    lancamento: 2000,
    autor: 'Alvo Dumbledore',
    categoria: 'ciências místicas'
}

const estatistica = {
    titulo: 'estatística para leigos',
    descricao: 'O livro ensina a elaborar e entender estatísticas lorem ipsum...',
    lancamento: 2000,
    autor: 'Ben Campbell',
    categoria: 'ciências exatas'
}

const vencer = {
    titulo: 'como vencer os inimigos no meio do deserto',
    descricao: 'O livro fala sobre tópicos importantes para vencer em quaisquer circunstâncias lorem ipsum...',
    lancamento: 2000,
    autor: 'Tony Stark',
    categoria: 'Motivação'
}

    ; (async () => {

        //const livro = await createBook(patrono, database);
        console.log(await findBook("avada kedabra para leigos", database))
        //console.log('---------------------------')
        //const atualiza = await updateOne('6463fa71ba03d2bafd1b36f2','estatística para gênios', database)
        //console.log(atualiza)
        console.log('---------------------------')
        remove = await removeBook("646549cf37195b087e6d3317", database)
        console.log('---------------------------')
        console.log(await findBooks('', database))

        await client.close();
    })()*\
//console.log("novo livro", await database.insertOne(newbook,));
//console.log('aqui')



 //buscar um livro
/* database.find();
database.findOne();
database.insertOne();
database.updateOne();
database.deleteOne(); */
