/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов 
(передайте аргумент). Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, 
подумайте, какими свойствами он обладает.
План:
Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
*/
function Electro(time, mesure){
    this.timeUnit = "minutes"
    this.mesure = "wats"
  }  
  Electro.prototype.energyConsumed = function(switchOn, powerconsumption, switchTime, deviceName ){
    if(switchOn === true){
      console.log(`${this.devicePlace}${deviceName} is turned on ${switchTime} ${this.timeUnit} and the device consuposed ${powerconsumption * switchTime / 60} ${this.mesure}`)
      }
    else{
      console.log(`${deviceName} is not turned on`)
    }
  };
  function RoomDevice() { 
    this.devicePlace = 'working at room '
  }
  function KitchenDevice() {
    this.devicePlace = 'working at kitchen '
  }
  RoomDevice.prototype = new Electro();
  KitchenDevice.prototype = new Electro();
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
  