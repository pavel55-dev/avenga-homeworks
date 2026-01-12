const inputFromUser = [prompt("What is the Title of the Book:"), prompt("What is the name of the Author:"), prompt("What is the status of the Book (read/not read):")];

const book = {
    title: inputFromUser[0],
    author: inputFromUser[1],
    status: inputFromUser[2],
    readingStatus: function() {
        if (this.status.toLowerCase() === "read") {
            return `You have already read "${this.title}" by ${this.author}.`;
        } else {
            return `You still need to read "${this.title}" by ${this.author}.`;
        }   
    
    }
};
console.log(book.readingStatus());
// Samata vezba e napravena bez upotreba na AI kako sto pisuvase vo zadacata.
