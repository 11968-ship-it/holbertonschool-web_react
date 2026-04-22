// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // مح بإضافة أي خاصية إضافية
  [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Teacher
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

// Example Director
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher3);
console.log(director1);
