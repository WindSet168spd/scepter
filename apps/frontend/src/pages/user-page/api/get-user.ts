import { apiClient } from "@/shared/api/client";

import ScepterChar from "../../../../../backend/src/user.entity";

export async function getUser(uid: number) {
  return await apiClient.get<ScepterChar[]>(`/?uid=${uid}`);
}
