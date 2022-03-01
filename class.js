// 1.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(title, studio, rating = "PG") {//b)
        this.title = title;
        this.studio = studio;
        this.rating = rating;//a)
    }

    getPG(arr) {
        return arr.filter((val) => val.rating === "PG");
    }//c)
}


var movie1 = new Movie("Saw", "Lions Gate Films", "R");
var movie2 = new Movie("Beauty and the Beast", "Walt Disney Pictures", "G")
var movie3 = new Movie("Spirited Away", "Studio Ghibli")
var movie4 = new Movie("How to Train Your Dragon", "DreamWorks Animation")


var moviearr = [movie1, movie2, movie3, movie4];

var goodmovie = new Movie("Casino Royale", "Eon Productions", "PG13")//d)


console.log(goodmovie.getPG(moviearr));

// 2.Circle - Class
// Convert the UML diagram to Typescript class. - use number for double
class Circle {
    constructor(...args) //radius=1.0, color="Red")
        {
            if (args.length == 0) {

            } else if (args.length == 1) {
                this.radius = args[0];
            } else if (args.length == 2) {
                this.radius = args[0];
                this.color = args[1];
            }
        }

    getRadius() {
        return this.radius;
    }
    getColor() {
        return this.color;
    }
    setRadius(num) {
        this.radius = num;
    }
    setColor(col) {
        this.color = col;
    }
    getArea() {
        return (Math.pow(this.radius, 2)*(Math.PI)).toFixed(2);
    }
    getCircumference() {
        return (2*this.radius*(Math.PI)).toFixed(2);
    }
}

var circle = new Circle(1,"red");

console.log(circle.getArea());
console.log(circle.getColor());
console.log(circle.getCircumference());

// 3.Write a “person” class to hold all the details.
class Person{
    static CompanyName="GUVI";
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    getData(){
        let personData=`
        Name:${this.name}
        Age:${this.age}
        Address:${this.address}
        `
        console.log(personData);
    }
    static getCompanyName(){
        console.log(Person.CompanyName);//GUVI
    }
}
class Employee extends Person{
    static companyNew="ZEN";
    constructor(name,age,address,designation,salary){
        super(name,age,address);
        this.designation=designation;
        this.salary=salary;
    }
    getData(){
        let employeeData=`
        Name:${this.name}   
        Age:${this.age}
        Address:${this.address}
        Designation:${this.designation}
        Salary:${this.salary}
        `
        console.log(employeeData);
    }
    static getCompanyName(){
        console.log(Employee.companyNew);//ZEN
    }
}
let employee1=new Employee("Ram",25,"Bangalore","Junior Engineer",500000);

employee1.getData();
Employee.getCompanyName();

let person1=new Person("Rahul",29,"Chennai");
person1.getData();
Person.getCompanyName();

// // 4.write a class to calculate uber price.
// // Base Fare + 
// // (Cost per minute x time of the ride) + 
// // (cost per mile x ride distance) x surge boost multiplier) + 
// // booking fee = Passengers Ride Fare
class RideFare{
    constructor(BaseFare,CostPerMinute,TimeOfRide,CostPerMile,Distance,Multiplier,BookingFee)
    {
        this.BaseFare =BaseFare;
        this.CostPerMinute =CostPerMinute;
        this.TimeOfRide =TimeOfRide;
        this.CostPerMile =CostPerMile;
        this.Distance =Distance;
        this.Multiplier =Multiplier;
        this.BookingFee =BookingFee;
    }
    getRideFee() {
        return ((this.BaseFare) + (((this.CostPerMinute * this.TimeOfRide) + (this.CostPerMile * this.Distance)) * this.Multiplier) + (this.BookingFee)).toFixed(0)
        // console.log(a)
    }
}
let UberRide = new RideFare(30,2,20,5,5,1.5,20)
console.log(UberRide.getRideFee());