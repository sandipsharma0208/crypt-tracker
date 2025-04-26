import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sampleAssets } from "../../data/sampleAssets";

export type Asset = (typeof sampleAssets)[0];

interface CryptoState {
  assets: Asset[];
}
const initialState: CryptoState = {
  assets: sampleAssets.map((asset) => ({
    ...asset,
    change1h: asset.change1h,
    change24h: asset.change24h,
    change7d: asset.change7d,
  })),
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssets: (state, action: PayloadAction<Asset[]>) => {
      state.assets = action.payload;
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
