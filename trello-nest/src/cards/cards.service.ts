import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';

interface Card {
  id: number;
  boardId: number;
  columnId: number;
  title: string;
}

@Injectable()
export class CardsService {
  private cards: Card[] = [];
  private idSeq = 1;

  findAll(boardId: number, columnId: number) {
    return this.cards.filter(
      (c) => c.boardId === boardId && c.columnId === columnId,
    );
  }

  create(boardId: number, columnId: number, dto: CreateCardDto) {
    const card = {
      id: this.idSeq++,
      boardId,
      columnId,
      title: dto.title,
    };
    this.cards.push(card);
    return card;
  }
}
