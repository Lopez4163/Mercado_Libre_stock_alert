"use client";

import { useEffect, useState } from "react";
import type { SellerInventory } from "./lib/types/data_types";
import { MOCK_INVENTORY } from "./lib/helpers/mock_data";
import Table from "./components/Table";

export default function Home() {
  const [sellerInventory, setSellerInventory] = useState<SellerInventory>([]);

  useEffect(() => {
    setSellerInventory(MOCK_INVENTORY);
  }, []);

//   const syncUserInventory = async () => {
//     try {
//         setLoading(true);
        
//         // 1. Get every single ID (Paging)
//         const ids = await getAllItemIds(sellerId, token);
        
//         // 2. Get the actual stock/price for those IDs (Batching)
//         const fullInventory = await getInventoryDetails(ids, token);
        
//         // 3. Update your app state
//         setUserInventoryState(fullInventory);
        
//     } catch (error) {
//         console.error("Failed to sync inventory:", error);
//     } finally {
//         setLoading(false);
//     }
// };

  return (
    <main className="min-h-screen bg-zinc-50 p-4 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-4 text-xl font-semibold">Seller Inventory</h1>
        <Table inventory={sellerInventory} />
      </div>
    </main>
  );
}
