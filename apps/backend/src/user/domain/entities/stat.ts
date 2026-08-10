export class Stat {
  constructor(
    public id: string,
    public type: string,
    public name: string,
    public iconUrl: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
