export class Eidolon {
  constructor(
    public readonly id: number,
    public order: number,
    public name: string,
    public iconUrl: string,
    public characterId: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
