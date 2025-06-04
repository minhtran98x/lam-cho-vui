import { Injectable } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';

@Injectable()
export class ColumnsService {
  private columns = [] as { id: number; boardId: number; title: string }[];
  private idSeq = 1;

  findAll(boardId: number) {
    return this.columns.filter((c) => c.boardId === boardId);
  }

  create(boardId: number, dto: CreateColumnDto) {
    const column = { id: this.idSeq++, boardId, title: dto.title };
    this.columns.push(column);
    return column;
  }
}
