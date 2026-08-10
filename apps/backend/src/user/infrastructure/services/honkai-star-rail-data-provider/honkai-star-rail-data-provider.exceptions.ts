import { CustomNotFoundException } from "src/common/infrastructure/api/exceptions/not-found.exception";

export class HonkaiStarRailUserNotFoundException extends CustomNotFoundException {
  constructor(id: number) {
    super("HonkaiStarRailUser", id);
  }
}
