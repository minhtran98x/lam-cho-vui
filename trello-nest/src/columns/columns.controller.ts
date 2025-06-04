import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/create-column.dto';

@Controller('boards/:boardId/columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Get()
  findAll(@Param('boardId') boardId: number) {
    return this.columnsService.findAll(Number(boardId));
  }

  @Post()
  create(
    @Param('boardId') boardId: number,
    @Body() dto: CreateColumnDto,
  ) {
    return this.columnsService.create(Number(boardId), dto);
  }
}
