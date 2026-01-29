import React from "react";
import type { SellerInventory } from "../lib/types/data_types";

type Props = {
  inventory: SellerInventory;
};

export default function Table({ inventory }: Props) {
  if (inventory.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 p-10 text-center text-sm text-zinc-500 dark:border-zinc-800">
        No inventory items found.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* MOBILE: Cards (default) */}
      <ul className="grid grid-cols-1 gap-3 md:hidden">
        {inventory.map((item, index) => (
          <li
            key={(item as any).id ?? index}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2">
                {item.title}
              </p>

              <span className="shrink-0 rounded-md bg-zinc-100 px-2 py-1 text-[11px] font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                {item.sold_quantity} Sold
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900/40">
                <p className="text-[11px] text-zinc-500">Price</p>
                <p className="mt-1 text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
                  {item.price.toFixed(2)}{" "}
                  <span className="text-[11px] font-medium text-zinc-500">
                    {item.currency_id}
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-zinc-50 p-3 text-right dark:bg-zinc-900/40">
                <p className="text-[11px] text-zinc-500">Stock</p>
                <p className="mt-1 text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
                    {item.available_quantity}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* DESKTOP: Table (md and up) */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <tr>
              <th className="px-5 py-3 font-semibold">Product</th>
              <th className="px-5 py-3 font-semibold text-right">Price</th>
              <th className="px-5 py-3 font-semibold text-center">Stock</th>
              <th className="px-5 py-3 font-semibold text-center">Sold</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {inventory.map((item, index) => (
              <tr
                key={(item as any).id ?? index}
                className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30"
              >
                <td className="px-5 py-3 font-medium text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </td>

                <td className="px-5 py-3 text-right tabular-nums text-zinc-900 dark:text-zinc-100">
                  {item.price.toFixed(2)}{" "}
                  <span className="text-[11px] text-zinc-500">
                    {item.currency_id}
                  </span>
                </td>

                <td className="px-5 py-3 text-center tabular-nums text-zinc-700 dark:text-zinc-200">
                  {item.available_quantity}                  {item.sold_quantity}

                </td>

                <td className="px-5 py-3 text-center tabular-nums text-zinc-700 dark:text-zinc-200">
                  {item.sold_quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
