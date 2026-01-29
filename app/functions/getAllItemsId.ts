// Layer 1: Turning the pages to get all IDs
export async function getAllItemIds(sellerId: string, accessToken: string) {
    let allIds: string[] = [];
    let offset = 0;
    const limit = 50;
    let total = 1; // Start with 1 to enter the loop

    while (allIds.length < total) {
        const res = await fetch(
            `https://api.mercadolibre.com/users/${sellerId}/items/search?status=active&limit=${limit}&offset=${offset}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const data = await res.json();

        // Safety check if the API returns an error
        if (!data.results) break;

        allIds.push(...data.results);
        total = data.paging.total; // Update with the actual total from ML
        offset += limit;
    }

    return allIds;
}