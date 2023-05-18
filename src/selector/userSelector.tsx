import { RootState } from "../store";

export const getAuthStatus = (state: RootState) => state.auth.success;
