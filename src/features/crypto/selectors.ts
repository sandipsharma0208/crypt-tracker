import { RootState } from "../../app/store";

export const selectAssets = (state: RootState) => state.crypto.assets;
