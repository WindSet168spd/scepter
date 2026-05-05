import { apiClient } from "@/shared/api/client";
import { User } from "@/../../packages/domains/src/user";

export async function getUser(uid: number) {
  return await apiClient.get<User>(`user/${uid}`);
}
