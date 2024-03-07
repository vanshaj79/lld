let laptop = {
    name:'HP',
    ram:'8',
    price:'40000',
    Storage:'512'
}

let DellLaptop = {
    name:'Dell',
    ram:'16',
    price:'60000',
    Storage:'1024'
}

let AppleLaptop = {
    name:'Apple',
    ram:'16',
    price:'160000',
    Storage:'1024'
}

function createLaptop(_name,_ram,_price,_storage){
    let laptop = {}
    laptop.name = _name
    laptop.ram = _ram
    laptop.price = _price
    laptop.Storage = _storage

    return laptop
}

let lenovoLaptop = createLaptop('lenovo','16','50000',1024)
console.log(lenovoLaptop);

function Laptop(_name,_ram,_price,_storage){
    this.name = _name
    this.ram = _ram
    this.price = _price
    this.Storage = _storage
}

let acerLaptop = new Laptop('acer','8','30000','1024')
// new keyword is creating an empty object
// and 'this' keyword is pointing to the empty object created by keyword 'new'
console.log(acerLaptop)
