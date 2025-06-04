import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards = [] as { id: number; title: string }[];
  private idSeq = 1;

  findAll() {
    return this.boards;
  }

  create(dto: CreateBoardDto) {
    const board = { id: this.idSeq++, title: dto.title };
    this.boards.push(board);
    return board;
  }
}
