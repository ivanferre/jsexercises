// people.js

// class Person definition

let numPeople = 0;
class Person {

constructor(
    name,
    familyname,
    city,
    profession,
    hobbies,
    picture,
    bigPicture
) {
  this.id = numPeople++;
    this.name = name;
    this.familyname = familyname;
    this.city = city;
    this.profession = profession;
    this.hobbies = hobbies;
    this.picture = picture;
    this.bigPicture = bigPicture;
}
}

// create individuals
// ! DEBUG Data NOT RELIABLE
let sumeyra = new Person(
  "Sümeyra",
  "Sevin",
  "Bern",
  "Cybersecurity Analyst",
  "Cosmos and nature",
  "img/00-PowerCoders_62.jpg",
  "img/00-PowerCoders_62.jpg"
);

let susanne = new Person(
  "Susanne",
  "König",
  "Lausanne",
  "Training & Talent Development",
  "Web Development",
  "img/02-PowerCoders_02.jpg",
  "img/02-PowerCoders_02.jpg"
);

let anastasiia = new Person(
  "Anastasiia",
  "Shedluko",
  "Zürich",
  "Talented Programmer",
  "Fashion",
  "img/03-PowerCoders_03.jpg",
  "img/03-PowerCoders_03.jpg"
);

let merve = new Person(
  "Merve",
  "Cildag",
  "Zürich",
  "Data Analyst",
  "Fashion",
  "img/05-PowerCoders_05.jpg",
  "img/05-PowerCoders_05.jpg"
);


// create list and include the individuals
let people = [sumeyra, susanne, anastasiia, merve];

/*
 * Reads the people array and loads it into the table
 * returns TRUE if all ok, FALSE otherwise.
 */

function displayPerson() {
  // display picture as a figure
  // compose figcaption
  //    name + familyName bold
  //    profession, city
  //    `Likes ${hobbies}`
  return true;
}

function displayAllPeople() {
  people.forEach(displayPerson(), p, i);
  return true;
}
