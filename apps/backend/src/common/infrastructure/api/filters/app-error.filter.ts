import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { Response } from "express";
import {
  AppError,
  isAppError,
} from "src/common/infrastructure/api/errors/app-error";
import { CustomNotFoundException } from "src/common/infrastructure/api/exceptions/not-found.exception";

@Catch()
export class AppErrorFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const httpException = this.toHttpException(exception);
    const response = host.switchToHttp().getResponse<Response>();

    response
      .status(httpException.getStatus())
      .json(httpException.getResponse());
  }

  private toHttpException(exception: unknown): HttpException {
    if (exception instanceof HttpException) {
      return exception;
    }

    if (isAppError(exception)) {
      return this.toAppErrorException(exception);
    }

    return new InternalServerErrorException();
  }

  private toAppErrorException(error: AppError) {
    switch (error._tag) {
      case "HonkaiStarRailUserNotFoundError":
        return new CustomNotFoundException("Honkai Star Rail user", error.id);
      case "InvalidHonkaiStarRailUserError":
        return new UnprocessableEntityException(
          "Honkai Star Rail returned unexpected user data",
        );
      case "UnexpectedHonkaiStarRailApiError":
        return new InternalServerErrorException();
    }
  }
}
