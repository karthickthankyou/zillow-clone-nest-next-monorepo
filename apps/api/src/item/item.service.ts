import { Injectable } from '@nestjs/common'
import { CreateItemInput } from './dto/create-item.input'
import { UpdateItemInput } from './dto/update-item.input'

@Injectable()
export class ItemService {
  create(createItemInput: CreateItemInput) {
    return 'This action adds a new item'
  }

  findAll() {
    return [{ id: 2 }, { id: 3 }]
  }

  findOne(id: number) {
    return { id: 23 }
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`
  }

  remove(id: number) {
    return `This action removes a #${id} item`
  }
}
