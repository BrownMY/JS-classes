class Artist {
    constructor(name, age, genre, label) {
        this.name = name
        this.age = age
        this.genre = genre
        this.label = label 
        this.albums = [] 
        this.songs =[]
        this.image = ''
        this.instagram = null
    }

    addAlbum(album) {
        this.albums.push(album)
        console.log(`This is another ${album} for ${this.name}`)
        
    }

    addSong(song) {
        this.songs.push(song)
        console.log(`This is another ${song} for ${this.name}`)

    }

    addImage(imageLink) {
        this.image = imageLink
    }

    addIg(username) {
        this.instagram = username;
    }
}
//an instance of the artist class
const tameImpala = new Artist('Tame Impala', 'idk', 'alternative rock', 'idk')
const megTheeStallion = new Artist('Meg Thee Stallion👅', '25?', 'Rap', 'idk')
const nickHakim = new Artist('Nick Hakim', '?', 'RnB/Soul', '?')
const jamesBlake = new Artist('James Blake', '28?', 'Electronic Soul', '?')
const menITrust = new Artist('Men I Trust', '?', 'Alternative', '?')
const thugger = new Artist('Young Thug', '?', 'Rap', '?')
const steveLacy = new Artist('Steve Lacy', '24?', 'RnB', '?')

//look up artist
nickHakim.name()
//2 albums
nickHakim.addAlbum('Green Twins')
nickHakim.addAlbum('WILL THIS MAKE ME GOOD')
//2 songs
nickHakim.addSong('Green Twins')
nickHakim.addSong('The Want')
//find image
nickHakim.addImage('https://media.pitchfork.com/photos/5ecea56242a96343c1f4cc6e/1:1/w_1501,h_1501,c_limit/nickhakim-01.jpg')
//find ig hangle
nickHakim.addIg('en_hakim')