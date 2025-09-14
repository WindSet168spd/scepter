import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { Err } from "neverthrow";
import { AppError } from "src/utils/errors/app-error";
import { matchError } from "src/utils/errors/match-error";
import { errorMatcher } from "src/utils/errors/error-matcher";

@Catch(Err)
export class ResultFilter implements ExceptionFilter {
  catch(exception: Err<unknown, AppError>, _: ArgumentsHost) {
    matchError(exception.error, errorMatcher);
  }
}
