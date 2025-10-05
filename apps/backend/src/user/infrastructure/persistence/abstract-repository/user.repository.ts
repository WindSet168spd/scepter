import { NullableType } from "@scepter/utilities";
import { User } from "@scepter/domains";

export abstract class AbstractUserRepository {
  abstract create(
    data: Omit<User, "id" | "createdAt" | "updatedAt">,
  ): Promise<User>;

  abstract findByUid(id: User["uid"]): Promise<NullableType<User>>;

  // abstract update(
  //   id: User["uid"],
  //   payload: DeepPartial<User>,
  // ): Promise<User | null>;
}
