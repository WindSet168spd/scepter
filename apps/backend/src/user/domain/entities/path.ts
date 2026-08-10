export class Path {
  constructor(
    public readonly id: string,
    public name: string,
    public iconUrl: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
