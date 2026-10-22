
// ==========================================
// 1. BASE PARENT CLASS
// ==========================================
class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  // A common method for everyone in the school
  introduce() {
    console.log(`Hello, my name is ${this.name} and my ID is ${this.id}.`);
  }
}

// ==========================================
// 2. CHILD CLASS: STUDENT
// ==========================================
class Student extends Person {
  constructor(name, id, gpa) {
    super(name, id); // Call the parent class constructor (Person)
    this.gpa = gpa;  // Unique property for Student
  }

  // Unique method for Student
  study() {
    console.log(`${this.name} is studying for exams.`);
  }

  // Overriding: We modify the introduce method specifically for students
  introduce() {
    super.introduce(); // Call the original introduce method from Person
    console.log(`I am a student and my GPA is ${this.gpa}.`);
  }
}

// ==========================================
// 3. CHILD CLASS: TEACHER
// ==========================================
class Teacher extends Person {
  constructor(name, id, subject) {
    super(name, id); // Call the parent class constructor (Person)
    this.subject = subject; // Unique property for Teacher
  }

  // Unique method for Teacher
  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

// ==========================================
// 4. INSTANTIATION AND TESTING
// ==========================================

// Create a student instance
const student1 = new Student("Alice Smith", "S101", 3.8);

// Create a teacher instance
const teacher1 = new Teacher("Mr. John Doe", "T505", "Mathematics");

// --- Testing Student ---
console.log("--- Student Actions ---");
student1.introduce(); // Inherited + Customized method
student1.study();     // Student specific method

// --- Testing Teacher ---
console.log("\n--- Teacher Actions ---");
teacher1.introduce(); // Inherited from Person directly
teacher1.teach();     // Teacher specific method
