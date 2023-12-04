//Переписать консольное приложение из предыдущего юнита на классы.
class Electro {
    constructor(){
        this.timeUnit = "minutes"
        this.mesure = "wats"
    }
    energyConsumed(switchOn, powerconsumption, switchTime, deviceName ){
        if(switchOn === true){
        console.log(`${this.devicePlace}${deviceName} is turned on ${switchTime} ${this.timeUnit} and the device consuposed ${powerconsumption * switchTime / 60} ${this.mesure}`)
        }
        else{
        console.log(`${deviceName} is not turned on`)
        }
    };
}
  class RoomDevice extends Electro {
    constructor() {
        super();
        this.devicePlace = 'working at room '
    }
  }
  class KitchenDevice extends Electro {
    constructor() {
        super();
        this.devicePlace = 'working at kitchen '
    }
  }
  const kettle ={
    func: new KitchenDevice(),
    switchOn: true,
    power: 2200,
    time: 10,
    name: 'Philips',
  };
  
  const microwawe ={
      func: new KitchenDevice(),
      switchOn: true,
      power: 1800,
      time: 15,
      name: 'Miele',
  };
  const computer ={
      func: new RoomDevice(),
      switchOn: true,
      power: 300,
      time: 240,
      name: 'Lenovo',
  };  
  const lamp ={
      func: new RoomDevice(),
      switchOn: true,
      power: 600,
      time: 60,
      name: 'Led',
  };    
    function switchDevice(arg) {
      if (arg === undefined) {
          console.log('no items to track');
      }
   
      else {
          for (let i = 0; i < arguments.length; i++) {
              arguments[i].func.energyConsumed(arguments[i].switchOn, arguments[i].power, arguments[i].time, arguments[i].name);
          }
      }
    };
lamp.switchOn = false;
switchDevice();
switchDevice(computer, microwawe); 
  