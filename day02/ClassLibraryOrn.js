
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;

    }

    borrowBook() {
        if(this.isAvailable) {
            this.isAvailable = false;
            console.log(`You borrowed "${this.title}" by ${this.author}. Enjoy reading!`);
        } else {
            console.log(`Sorry, "${this.title}" is already borrowed by someone else.`);
        }
    }
    returnBook() {
        this.isAvailable = true;
        console.log(`Thank you! "${this.title}" has been returned to the library.`);
}

}

const book1 = new Book("Harry Potter", "J.K Rowling");
const book2 = new Book("the Hobbit", "J.R.R Tolkien");

book1.borrowBook();
book1.borrowBook();
book1.returnBook();


console.log("----------------------------------------");

class Student {
  // constructor = Yeni kayıt alanı
  constructor(name, id, gpa) {
    this.name = name; // Adı
    this.id = id;     // Okul Numarası
    this.gpa = gpa;   // Not Ortalaması
  }

  // introduce = Kendini tanıtma eylemi
  introduce() {
    console.log(`Hello, I am ${this.name}. My student ID is: ${this.id}`);
  }

  // study = Ders çalışma eylemi (+5 puan)
  study() {
    this.gpa += 5;
    console.log(`${this.name} studied hard! New GPA: ${this.gpa}`);
  }
}

// ------ USING THE CLASS (Kalıbı Kullanma) ------

// Ali ve Ayşe'yi İngilizce kalıbımızla oluşturuyoruz
const ali = new Student("Ali", 101, 70);
const ayse = new Student("Ayşe", 102, 95);

// Eylemleri tetikliyoruz
ali.introduce(); 
ayse.study();
