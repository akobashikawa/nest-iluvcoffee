import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get()
  findAll(@Res() response) {
    return 'This action returns all coffees';
    // response.status(200).send('This action returns all coffees');// less nest compatible
  }

  @Get('flavors')
  findAllFlavors() {
    return 'This action returns all coffee flavors';
  }

  // @Get(':id')
  // findOne(@Param() params) {
  //   return `This action returns #${params.id} coffee`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

}