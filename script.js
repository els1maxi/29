const Vehicle = {
    start: function () {
        console.log("Транспортний засіб запущено.");
    },
    stop: function () {
        console.log("Транспортний засіб зупинено.");
    }
};

const Car = {
    __proto__: Vehicle,
    honk: function () {
        console.log("Автомобіль сигналить.");
    },
    openTrunk: function () {
        console.log("Багажник автомобіля відкрито.");
    }
};


const Bike = {
    __proto__: Vehicle,
    ringBell: function () {
        console.log("Дзвінок велосипеда дзвенить.");
    },
    kickStand: function () {
        console.log("Підніжка велосипеда опущена.");
    }
};


const Truck = {
    __proto__: Car,
    loadCargo: function () {
        console.log("Вантажівка завантажує вантаж.");
    },
    unloadCargo: function () {
        console.log("Вантажівка розвантажує вантаж.");
    }
};

const Sedan = {
    __proto__: Car,
    startAirConditioner: function () {
        console.log("Кондиціонер седана увімкнено.");
    },
    adjustSeat: function () {
        console.log("Сидіння седана відрегульовано.");
    }
};

const SportBike = {
    __proto__: Bike,
    doWheelie: function () {
        console.log("Спортивний мотоцикл виконує підйом на задньому колесі.");
    },
    increaseSpeed: function () {
        console.log("Швидкість спортивного мотоцикла збільшено.");
    }
};

const Scooter = {
    __proto__: Bike,
    fold: function () {
        console.log("Самокат складено.");
    },
    chargeBattery: function () {
        console.log("Акумулятор самоката заряджається.");
    }
};

Truck.start();
Truck.loadCargo();
Sedan.start();
Sedan.startAirConditioner();
SportBike.start();
SportBike.doWheelie();
Scooter.start();
Scooter.chargeBattery();


const Vehicle = {
    start: function () {
        console.log("Транспортний засіб запущено.");
    },
    stop: function () {
        console.log("Транспортний засіб зупинено.");
    }
};


const Car = {
    honk: function () {
        console.log("Автомобіль сигналить.");
    },
    openTrunk: function () {
        console.log("Багажник автомобіля відкрито.");
    }
};
Object.setPrototypeOf(Car, Vehicle);


const Bike = {
    ringBell: function () {
        console.log("Дзвінок велосипеда дзвенить.");
    },
    kickStand: function () {
        console.log("Підніжка велосипеда опущена.");
    }
};
Object.setPrototypeOf(Bike, Vehicle);


const Truck = {
    loadCargo: function () {
        console.log("Вантажівка завантажує вантаж.");
    },
    unloadCargo: function () {
        console.log("Вантажівка розвантажує вантаж.");
    }
};
Object.setPrototypeOf(Truck, Car);

const Sedan = {
    startAirConditioner: function () {
        console.log("Кондиціонер седана увімкнено.");
    },
    adjustSeat: function () {
        console.log("Сидіння седана відрегульовано.");
    }
};
Object.setPrototypeOf(Sedan, Car);

const SportBike = {
    doWheelie: function () {
        console.log("Спортивний мотоцикл виконує підйом на задньому колесі.");
    },
    increaseSpeed: function () {
        console.log("Швидкість спортивного мотоцикла збільшено.");
    }
};
Object.setPrototypeOf(SportBike, Bike);

const Scooter = {
    fold: function () {
        console.log("Самокат складено.");
    },
    chargeBattery: function () {
        console.log("Акумулятор самоката заряджається.");
    }
};
Object.setPrototypeOf(Scooter, Bike);


Truck.start();
Truck.loadCargo();
Sedan.start();
Sedan.startAirConditioner();
SportBike.start();
SportBike.doWheelie();
Scooter.start();
Scooter.chargeBattery();



function Vehicle() { }

Vehicle.prototype.start = function () {
    console.log("Транспортний засіб запущено.");
};

Vehicle.prototype.stop = function () {
    console.log("Транспортний засіб зупинено.");
};


function Car() { }

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
    console.log("Автомобіль сигналить.");
};

Car.prototype.openTrunk = function () {
    console.log("Багажник автомобіля відкрито.");
};


function Bike() { }

Bike.prototype = Object.create(Vehicle.prototype);

Bike.prototype.ringBell = function () {
    console.log("Дзвінок велосипеда дзвенить.");
};

Bike.prototype.kickStand = function () {
    console.log("Підніжка велосипеда опущена.");
};



function Truck() { }

Truck.prototype = Object.create(Car.prototype);

Truck.prototype.loadCargo = function () {
    console.log("Вантажівка завантажує вантаж.");
};

Truck.prototype.unloadCargo = function () {
    console.log("Вантажівка розвантажує вантаж.");
};



function Sedan() { }

Sedan.prototype = Object.create(Car.prototype);

Sedan.prototype.startAirConditioner = function () {
    console.log("Кондиціонер седана увімкнено.");
};

Sedan.prototype.adjustSeat = function () {
    console.log("Сидіння седана відрегульовано.");
};



function SportBike() { }

SportBike.prototype = Object.create(Bike.prototype);

SportBike.prototype.doWheelie = function () {
    console.log("Спортивний мотоцикл виконує підйом на задньому колесі.");
};

SportBike.prototype.increaseSpeed = function () {
    console.log("Швидкість спортивного мотоцикла збільшено.");
};



function Scooter() { }

Scooter.prototype = Object.create(Bike.prototype);

Scooter.prototype.fold = function () {
    console.log("Самокат складено.");
};

Scooter.prototype.chargeBattery = function () {
    console.log("Акумулятор самоката заряджається.");
};



const truck = new Truck();
truck.start();
truck.loadCargo();

const sedan = new Sedan();
sedan.start();
sedan.startAirConditioner();

const sportBike = new SportBike();
sportBike.start();
sportBike.doWheelie();

const scooter = new Scooter();
scooter.start();
scooter.chargeBattery();




const System = {
    users: [],
    onlineUsers: new Set(),

    addUser: function (user) {
        this.users.push(user);
    },

    removeUser: function (userId) {
        this.users = this.users.filter(user => user.id !== userId);
        this.onlineUsers.delete(userId);
    },

    getOnlineUsers: function () {
        return Array.from(this.onlineUsers);
    },

    getUser: function (userId) {
        return this.users.find(user => user.id === userId);
    }
};



function User(username, email) {
    this.id = Date.now();
    this.username = username;
    this.email = email;
}

User.prototype.login = function () {
    if (System.users.find(user => user.id === this.id)) {
        System.onlineUsers.add(this.id);
        console.log(`${this.username} увійшов до системи.`);
    } else {
        console.log(`${this.username} не зареєстрований у системі.`);
    }
};

User.prototype.logout = function () {
    System.onlineUsers.delete(this.id);
    console.log(`${this.username} вийшов із системи.`);
};



function Admin(username, email) {
    User.call(this, username, email);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.removeUser = function (userId) {
    if (this.id !== userId && System.onlineUsers.has(this.id)) {
        System.removeUser(userId);
        console.log(`Користувач із ID ${userId} видалений адміністратором ${this.username}.`);
    } else {
        console.log("Адміністратор не може видалити цього користувача.");
    }
};




const user1 = new User("Alice", "alice@example.com");
const user2 = new User("Bob", "bob@example.com");
const admin = new Admin("Admin", "admin@example.com");

System.addUser(user1);
System.addUser(user2);
System.addUser(admin);

user1.login();
user2.login();
admin.login();

console.log("Користувачі онлайн:", System.getOnlineUsers());

admin.removeUser(user1.id);
console.log("Користувачі онлайн після видалення:", System.getOnlineUsers());

admin.removeUser(admin.id);

user2.logout();
admin.logout();
