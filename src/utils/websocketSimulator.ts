import { store } from "../app/store";
import { updateAssets } from "../features/crypto/cryptoSlice";

export const startWebSocketSimulation = () => {
  setInterval(() => {
    const currentAssets = store.getState().crypto.assets;

    const updated = currentAssets.map((asset) => {
      const randomFactor = Math.random() * 0.02 - 0.01; // ±1%
      const price = +(asset.price * (1 + randomFactor)).toFixed(2);
      const volume24h = +(asset.volume24h * (1 + randomFactor)).toFixed(2);
      const change1h = +((Math.random() * 2 - 1).toFixed(2));   // ±1%
      const change24h = +((Math.random() * 4 - 2).toFixed(2));  // ±2%
      const change7d = +((Math.random() * 6 - 3).toFixed(2));   // ±3%

      return { ...asset, price, change1h, change24h, change7d, volume24h };
    });

    store.dispatch(updateAssets(updated));
  }, 1500);
};
