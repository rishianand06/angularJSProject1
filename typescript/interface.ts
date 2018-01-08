interface IVehicle{
    accelerate() : void;
}

class Vehicle implements IVehicle{
    accelerate() : void{
        console.log("acceleration.....")
    }
}

let vehicle:Vehicle = new Vehicle();
vehicle.accelerate();