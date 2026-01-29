import type { SellerInventory } from "../lib/types/data_types";
export async function getInventoryDetails(itemIds: string[], accessToken: string) {
    const inventoryData: SellerInventory = [];
    
    // Process in batches of 20
    for (let i = 0; i < itemIds.length; i += 20) {
        const chunk = itemIds.slice(i, i + 20).join(',');
        
        // Use 'attributes' to keep the payload small and fast
        const res = await fetch(
            `https://api.mercadolibre.com/items?ids=${chunk}&attributes=title,price,currency_id,available_quantity,sold_quantity`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        
        const details = await res.json();
        
        // Map the results into your SellerInventory format
        const batchDetails = details.map((item: any) => item.body);
        inventoryData.push(...batchDetails);
    }

    return inventoryData;
}