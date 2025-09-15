import { CustomNotFoundException } from "src/utils/exceptions/not-found.exception";

export class HonkaiStarRailUserNotFoundException extends CustomNotFoundException {
  constructor(id: number) {
    super("HonkaiStarRailUser", id);
  }
}
