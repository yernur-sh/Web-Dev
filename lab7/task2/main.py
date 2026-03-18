from models import Car, Motorcycle, Dog

def main():
    
    my_car = Car("Toyota", "Camry", 2023, "Petrol")
    my_bike = Motorcycle("Yamaha", "MT-07", 2022, False)
    dog = Dog(name = "Aktos")
    
    vehicles = [my_car, my_bike]

    print("--- Vehicle Demonstration ---")
    for v in vehicles:
        print(f"Vehicle Info: {v}")
        print(v.start_engine())
        print(v.drive())
        print("-" * 30)

   
    print(my_car.refuel())
    print(my_bike.wheelie())

    print(dog.sit())
    print(dog.bark(3))

if __name__ == "__main__":
    main()