import { useSelector, useDispatch } from "react-redux";
import { selectAssets } from "../features/crypto/selectors";
// import { Sparklines, SparklinesLine } from "react-sparklines";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

export const CryptoTable = () => {
  type Props = {
    tooltipText: string;
  };
  const assets = useSelector(selectAssets);
  const dispatch = useDispatch();
  const maxSupply = 1000000000;

  const [bookmarkedAssets, setBookmarkedAssets] = useState(new Set());

  const formatVolume = (value: number): string => {
    if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
    return value.toFixed(2);
  };

  const toggleBookmark = (symbol: string) => {
    setBookmarkedAssets((prev) => {
      const updatedBookmarks = new Set(prev);
      if (updatedBookmarks.has(symbol)) {
        updatedBookmarks.delete(symbol);
      } else {
        updatedBookmarks.add(symbol);
      }
      return updatedBookmarks;
    });
  };

  function InfoWithTooltip({ tooltipText }: Props) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <div className="relative inline-block">
        <i
          className="fas fa-info-circle text-gray-400 text-[10px] ml-1 cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        ></i>
        {showTooltip && (
          <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
            {tooltipText}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-sm text-left border">
        <thead className="bg-gray-100">
          <tr>
            {[
              "",
              "#",
              "Name",
              "Price",
              "1h%",
              "24h%",
              "7d%",
              "Market Cap",
              "Volume(24h)",
              "Circulating Supply",
              "Last 7 Days",
            ].map((header, i) => {
              const showTooltip = [
                "Market Cap",
                "Volume(24h)",
                "Circulating Supply",
                "Max Supply",
              ].includes(header);
              const tooltipText = {
                "Market Cap": "Total market value of a cryptocurrency",
                "Volume(24h)": "Total volume traded in the last 24 hours",
                "Circulating Supply": "Currently circulating supply of coins",
                "Max Supply": "Maximum possible supply of coins",
              }[header];

              return (
                <th
                  key={i}
                  className={`py-3 whitespace-nowrap px-2 header ${
                    header === "Name"
                      ? ""
                      : header === "Circulating Supply"
                      ? "text-end"
                      : "text-center"
                  }`}
                >
                  {header}
                  {showTooltip && tooltipText && (
                    <InfoWithTooltip tooltipText={tooltipText} />
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {assets.map((asset, idx) => {
            console.log("asset", asset);
            return (
              <tr key={asset.symbol} className="border-t hover:bg-gray-50">
                {/* Bookmark */}
                <td className="px-2 py-3">
                  <button
                    onClick={() => toggleBookmark(asset.symbol)}
                    className="text-gray-600"
                  >
                    {bookmarkedAssets.has(asset.symbol) ? (
                      <StarIcon className="text-yellow-500" />
                    ) : (
                      <StarOutlineIcon className="text-size-sm text-gray-500" />
                    )}
                  </button>
                </td>

                {/* Index */}
                <td className="px-2 py-3">{idx + 1}</td>

                {/* Name + Logo */}
                <td className="px-2 py-3">
                  <div className="flex mr-5 gap-2">
                    <img
                      src={asset.logo}
                      alt={asset.name}
                      className="w-6 h-6"
                    />
                    <div className="font-medium">
                      {asset.name} {asset.symbol}
                    </div>
                  </div>
                </td>

                {/* Price */}
                <td className="px-2 py-3 text-center">
                  ${asset.price.toFixed(2)}
                </td>

                {/* 1h / 24h / 7d % changes */}
                {[asset.change1h, asset.change24h, asset.change7d].map(
                  (change, i) => (
                    <td key={i} className="px-2 py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {change >= 0 ? (
                          <ArrowDropUpIcon
                            className="text-green-500"
                            fontSize="small"
                          />
                        ) : (
                          <ArrowDropDownIcon
                            className="text-red-500"
                            fontSize="small"
                          />
                        )}
                        <span
                          className={
                            change >= 0 ? "text-green-500" : "text-red-500"
                          }
                        >
                          {change}%
                        </span>
                      </div>
                    </td>
                  )
                )}

                {/* Market Cap */}
                <td className="px-2 py-3 text-center">
                  ${asset.marketCap.toLocaleString()}
                </td>

                {/* Volume */}
                <td className="px-2 py-3 text-end">
                  ${asset.volume24h.toLocaleString()}
                  <p className="text-end">
                    {formatVolume(asset.volume24h)} {asset.symbol}
                  </p>
                </td>

                {/* Circulating Supply */}
                <td className="px-2 py-3 text-right">
                  {formatVolume(asset.circulatingSupply)} {asset.symbol}
                  {asset.circulatingSupply > 19000000 && (
                    <div className="w-25 h-1 mt-1 bg-gray-200 rounded">
                      <div
                        className="h-full bg-gray-500 rounded"
                        style={{
                          width: `${
                            (asset.circulatingSupply / maxSupply) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  )}
                </td>

                {/* Last 7 days chart */}
                <td className="px-2 py-3 text-center w-32 h-16">
                  {/* <Sparklines
                    data={generateSmoothHistory(asset.price)}
                    limit={10}
                    width={120}
                    height={60}
                    margin={5}
                  >
                    <SparklinesLine
                      color="#90ee90"
                      style={{ strokeWidth: 2 }}
                    />
                  </Sparklines> */}
                  <img
                    src={asset.last7}
                    alt={asset.name}
                    className="w-40 h-8"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
