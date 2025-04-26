import bitcoin from "../assets/bitcoin-btc-logo.png";
import Ethereum from "../assets/ethereum-eth-logo.png";
import xrp from "../assets/xrp-xrp-logo.png";
import tether from "../assets/tether-usdt-logo.png";
import solana from "../assets/solana-sol-logo.png";
import bnb from "../assets/bnb-bnb-logo.png";
import Graph1 from "../assets/graph2.png";
import Graph2 from "../assets/graph3.png";
import Graph3 from "../assets/graph4.png";
import Graph4 from "../assets/graph5.png";
import Graph5 from "../assets/graph2.png";
export const sampleAssets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 66000,
    change1h: 1,
    change24h: -0.4,
    change7d: 2,
    marketCap: 1_200_000_000_000,
    volume24h: 32_000_000_000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    logo: bitcoin,
    last7: Graph1,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 3200,
    change1h: -0.1,
    change24h: 0.4,
    change7d: 2.1,
    marketCap: 500_000_000_000,
    volume24h: 15_000_000_000,
    circulatingSupply: 115000000,
    maxSupply: 15000000,
    logo: Ethereum,
    last7: Graph2,
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: 66000,
    change1h: 1,
    change24h: -0.3,
    change7d: 1.5,
    marketCap: 1_200_000_000_000,
    volume24h: 30_000_000_000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    logo: xrp,
    last7: Graph3,
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: 3200,
    change1h: -0.1,
    change24h: 0.4,
    change7d: 2.1,
    marketCap: 500_000_000_000,
    volume24h: 12_000_000_000,
    circulatingSupply: 115000000,
    maxSupply: 18000000,
    logo: tether,
    last7: Graph4,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 66000,
    change1h: 0.8,
    change24h: -0.9,
    change7d: 1.5,
    marketCap: 1_200_000_000_000,
    volume24h: 33_000_000_000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    logo: solana,
    last7: Graph5,
  },
  {
    name: "BNB",
    symbol: "BNB",
    price: 3200,
    change1h: -0.4,
    change24h: 0.1,
    change7d: 3,
    marketCap: 500_000_000_000,
    volume24h: 17_000_000_000,
    circulatingSupply: 115000000,
    maxSupply: 1000000,
    logo: bnb,
    last7: Graph2,
  },
];
