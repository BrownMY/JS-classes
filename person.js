
class person {
    constructor(name, softwareEngineer) {
        this.arms = 2
        this.emoji = '🅱️'
        this.name = name
        this.softwareEngineer = softwareEngineer;
        this.artist = []
    }
    // this is a method
    greet() {
        console.log('Goood morning Ya\ll')
    }
    //method - whenever someone uses, this will print
    walk() {
        console.log('walking along the beach')
    }
    //method with a parameter
    eat(food) {
        console.log(`Today, I\'m eating ${food}`)
    }
    //method working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`)
        this.artist.push(artist)
    }

}

//this is an instance of a class
//known as an object
const leleB = new person('Leo Brooks', true);
//print attributes
console.log(leleB.name)
console.log(leleB.softwareEngineer)

leleB.walk()
leleB.eat('Dinosaur Chicken Nuggets')
// leleB.jump() {
//     console.log('Weeeeeee')
// }

//calling the methods (invoke)
leleB.jump()
leleB.addArtist('Rico Nasty')
leleB.addArtist('Yeye')
console.log(princeLeo.artist)
console.log(leleB.name)
console.log(leleB.softwareEngineer)

const phiphiD = new person('Sophia Dipaola', true)
phiphiD.walk()
phiphiD.eat('GUYAKI')
phiphiD.jump()
phiphiD.addArtist('Dlo')
console.log(phiphiD.artist)



