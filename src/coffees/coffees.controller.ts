import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  // @Get()
  // findAll(@Res() response) {
  //   response.status(200).send('This action returns all coffees');// less nest compatible
  // }

  @Get()
  findAll() {
    return 'This action returns all coffees';
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} cofee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} cofee`;
  }

}
