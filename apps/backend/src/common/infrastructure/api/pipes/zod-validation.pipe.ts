import {
  type PipeTransform,
  UnprocessableEntityException,
} from "@nestjs/common";
import z, { type ZodType } from "zod";

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: unknown): unknown {
    const result = this.schema.safeParse(value);
    if (result.success) {
      return result.data;
    }
    const errors = z.flattenError(result.error);
    throw new UnprocessableEntityException(errors);
  }
}
