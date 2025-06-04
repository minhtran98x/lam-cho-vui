import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('boards/:boardId/columns/:columnId/cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll(
    @Param('boardId') boardId: number,
    @Param('columnId') columnId: number,
  ) {
    return this.cardsService.findAll(Number(boardId), Number(columnId));
  }

  @Post()
  create(
    @Param('boardId') boardId: number,
    @Param('columnId') columnId: number,
    @Body() dto: CreateCardDto,
  ) {
    return this.cardsService.create(
      Number(boardId),
      Number(columnId),
      dto,
    );
  }
}
