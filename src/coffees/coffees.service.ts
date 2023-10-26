import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: number) {
    // throw 'A random error';
    const found = this.coffees.find(item => +id === item.id);
    if (!found) {
      // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return found;
  }

  create(creteCoffeeDto: any) {
    const id = 1 + this.coffees.length;
    Object.assign(creteCoffeeDto, { id });
    this.coffees.push(creteCoffeeDto);
    return creteCoffeeDto;// id is included
  }

  update(id: number, updateCoffeeDto: any) {
    const found = this.findOne(id);
    if (found) {
      Object.assign(found, updateCoffeeDto);
    }
  }

  remove(id: number) {
    const foundIndex = this.coffees.findIndex(item => +id === item.id);
    if (foundIndex >= 0) {
      this.coffees.splice(foundIndex, 1)
    }
  }
}
