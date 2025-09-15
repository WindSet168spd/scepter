import { NotFoundException } from "@nestjs/common";

export class CustomNotFoundException extends NotFoundException {
  constructor(entity: string, id: string | number) {
    const message = `${entity} with id ${id} not found`;
    super(message);
  }
}
