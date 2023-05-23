

class Book
{
  constructor(name, id, author_id, img, price){
    this.name = name;
    this.id = id;
    this.author = author_id;
    this.image = img;
    this.price = price;
  }
}

module.exports = Book;