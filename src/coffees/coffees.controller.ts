import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) { }

  // @Get()
  // findAll(@Res() response) {
  //   response.status(200).send('This action returns all coffees');// less nest compatible
  // }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
    return this.coffeeService.findAll();
  }

  // @Get('flavors')
  // findAllFlavors() {
  //   return 'This action returns all coffee flavors';
  // }

  // @Get(':id')
  // findOne(@Param() params) {
  //   return `This action returns #${params.id} coffee`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffee`;
    return this.coffeeService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    // return body;
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `This action updates #${id} cofee`;
    return this.coffeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} cofee`;
    return this.coffeeService.remove(id);
  }

}
