import { Test, TestingModule } from "@nestjs/testing";
import { HonkaiStarRailApiService } from "./honkai-star-rail-api.service";

describe("HonkaiStarRailApiService", () => {
  let service: HonkaiStarRailApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HonkaiStarRailApiService],
    }).compile();

    service = module.get<HonkaiStarRailApiService>(HonkaiStarRailApiService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
