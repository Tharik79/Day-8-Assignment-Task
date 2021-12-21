// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//  a String representing the studio, and a String representing the rating as its arguments, 
//  and sets the respective class properties to these values.

class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getrating(){
        return "the rating is  "  + this.rating;
    }
}


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
// the studio “Eon Productions”, and the rating “PG­13”

const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");


// 3. Write a “person” class to hold all the details.

class person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}

let person1 = new person ("Tharik", "uthuman", 43 );
console.log(person1.age);
console.log(person1.getFullName());


// 4. write a class to calculate uber price.
class uberFare {
    constructor (city, fare, customerName) {
        this.city = city;
        this.fare = fare;
        this.customerName  = customerName;

    }
        getFareCity(){
            return "fare for the City is " +  this.fare;
        }

}

let cityA = new uberFare( "cityA", 600, "customer1");
let cityB = new uberFare( "cityB", 300, "customer2");

console.log(cityA.getFareCity()); // 600
console.log(cityB.getFareCity()); // 300
