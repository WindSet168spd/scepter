import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResultAsync } from "neverthrow";
import { AppError } from "src/utils/errors/app-error";

@Injectable()
export class ResultInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<ResultAsync<unknown, AppError>>,
  ): Observable<unknown> {
    return next.handle().pipe(
      map((result) =>
        result.match(
          (user) => user,
          (error) => {
            throw error;
          },
        ),
      ),
    );
  }
}
