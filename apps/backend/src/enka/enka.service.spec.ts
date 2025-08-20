import { Test, TestingModule } from "@nestjs/testing";
import { EnkaService } from "./enka.service";

describe("EnkaService", () => {
  let service: EnkaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnkaService],
    }).compile();

    service = module.get<EnkaService>(EnkaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
