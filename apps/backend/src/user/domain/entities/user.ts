export class User {
  constructor(
    public readonly uid: number,
    public achievementCount: number,
    public icon: string,
    public level: number,
    public nickname: string,
    public signature: string | null,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
