import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: 1,
      title: "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurablebabe ",
      cover: 	"https://images.pexels.com/photos/11794227/pexels-photo-11794227.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      isRead: true,
      author: "Darrell Etherington",
      synopsis: "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable..."
    },
    {
      id: 2,
      title: "Penguin Classics",
      cover:
        "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-2-540x861.jpg",
      isRead: false,
      author: "Henry Eliot",
      synopsis: "The Penguin Classics Book covers all the greatest works of fiction, poetry, drama, history, and philosophy in between, this reader's companion encompasses 500 authors, 1,200 books, and 4,000 years of world literature, from ancient Mesopotamia to World War I."
    },
    {
      id: 3,
      title: "Becoming",
      cover:
        "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-7-540x861.jpg",
      isRead: false,
      author: "Michelle Obama",
      synopsis: "“Becoming” is an autobiography detailing the highs and lows of Michelle Obama's incredible journey from humble beginnings in the less glamourous South Side of Chicago, to the grandeur of the White House and life as America's first African-American First Lady."
    },
    {
      id: 4,
      title: "Sonnets",
      cover:
        "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-5-540x861.jpg",
      isRead: false,
      author: "James Anthony",
      synopsis: "Shakespeare wrote 154 sonnets published in his 'quarto' in 1609, covering themes such as the passage of time, mortality, love, beauty, infidelity, and jealousy. The first 126 of Shakespeare's sonnets are addressed to a young man, and the last 28 addressed to a woman – a mysterious 'dark lady'."
    },
    {
      id: 5,
      title: "Hands Holding Melting Candle",
      cover:
        "https://images.pexels.com/photos/15420089/pexels-photo-15420089/free-photo-of-hands-holding-melting-candle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      isRead: true,
      author: "Simon Jenkins",
      synopsis: "In this dazzling new history, bestselling author Simon Jenkins grippingly tells the story of its evolution from warring peoples to peace, wealth and freedom - a story that twists and turns from Greece and Rome, through the Dark Ages, the Reformation and the French Revolution, to the Second World War and up to the present day."
    },
    {
      id: 6,
      title: "Black and White beautiful horse",
      cover:
        "https://images.pexels.com/photos/1524628/pexels-photo-1524628.jpeg?auto=compress&cs=tinysrgb&w=800",
      isRead: true,
      author: "Pitsi Kagisho",
      synopsis: "The Penguin Classics Book covers all the greatest works of fiction, poetry, drama, history, and philosophy in between, this reader's companion encompasses 500 authors, 1,200 books, and 4,000 years of world literature, from ancient Mesopotamia to World War I."
    },
    {
      id: 7,
      title: "Web Development",
      cover:
        "https://images.pexels.com/photos/1181703/pexels-photo-1181703.jpeg?auto=compress&cs=tinysrgb&w=800",
      isRead: false,
      author: "Christina Murillo",
      synopsis: "“Becoming” is an autobiography detailing the highs and lows of Michelle Obama's incredible journey from humble beginnings in the less glamourous South Side of Chicago, to the grandeur of the White House and life as America's first African-American First Lady."
    },
    {
      id: 8,
      title: "",
      cover:
        "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isRead: false,
      author: "James Anthony",
      synopsis: "Shakespeare wrote 154 sonnets published in his 'quarto' in 1609, covering themes such as the passage of time, mortality, love, beauty, infidelity, and jealousy. The first 126 of Shakespeare's sonnets are addressed to a young man, and the last 28 addressed to a woman – a mysterious 'dark lady'."
    },
    {
      id: 9,
      title: "The Great Gatsby",
      cover: "https://images.pexels.com/photos/13881720/pexels-photo-13881720.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      isRead: false,
      author: "F. Scott Fitzgerald",
      synopsis: "Set in the Jazz Age on Long Island, The Great Gatsby tells the story of the mysterious Jay Gatsby, his lavish parties, and his obsession with the beautiful Daisy Buchanan. A tale of love, wealth, and the American Dream."
    },
    {
      id: 10,
      title: "To Kill a Mockingbird",
      cover: "https://images.pexels.com/photos/20140182/pexels-photo-20140182/free-photo-of-castillo-de-san-marcos-national-monument.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      isRead: false,
      author: "Harper Lee",
      synopsis: "Harper Lee's classic novel explores themes of racial injustice and moral growth through the eyes of young Scout Finch in the fictional town of Maycomb, Alabama."
    },
    {
      id: 11,
      title: "1984",
      cover: "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-5-540x861.jpg",
      isRead: false,
      author: "George Orwell",
      synopsis: "In a dystopian future where Big Brother watches your every move, Winston Smith struggles against the oppressive regime of the Party. A chilling portrayal of surveillance, propaganda, and totalitarianism."
    }
  ],
  reducers: {
    addBook: (books, action) => {
      let newBook = action.payload;
      newBook.id = books.length ? Math.max(...books.map(book => book.id)) + 1 : 1;
      books.push(newBook);
    },
    eraseBook: (books, action) => {
        return books.filter(book => book.id != action.payload);
    },
    toggleRead: (books, action) => {
        books.map(book => {
          if (book.id == action.payload) {
            book.isRead = !book.isRead;
          }
        });
    }
  }
})

export const { addBook, eraseBook, toggleRead } = booksSlice.actions;

export const selectBooks = state => state.books;

export default booksSlice.reducer;