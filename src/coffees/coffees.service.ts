import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    }
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id) {
    return this.coffees.find(item => +id === item.id);
  }

  create(creteCoffeeDto: any) {
    const id = 1 + this.coffees.length;
    Object.assign(creteCoffeeDto, { id });
    this.coffees.push(creteCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const found = this.findOne(id);
    if (found) {
      Object.assign(found, updateCoffeeDto);
    }
  }

  remove(id: string) {
    const foundIndex = this.coffees.findIndex(item => +id === item.id);
    if (foundIndex >= 0) {
      this.coffees.splice(foundIndex, 1)
    }
  }
}
