export class UserLightcone {
  constructor(
    public id: string,
    public lightconeLevel: number,
    public lightconeSuperimposition: number,
    public ascension: number,
    public lightconeId: number,
    public userCharacterId: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
