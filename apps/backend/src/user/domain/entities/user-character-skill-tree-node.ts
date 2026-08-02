export class UserCharacterSkillTreeNode {
  constructor(
    public id: string,
    public level: number,
    public skillTreeNodeId: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
