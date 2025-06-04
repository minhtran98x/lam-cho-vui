import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateBoardDto) {
    return this.boardsService.create(dto);
  }
}
