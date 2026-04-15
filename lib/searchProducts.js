function searchProducts(items, query) {
    if (!query) return items;

    return items.filter(item =>
        item.ProductTitle.toLowerCase().includes(query.toLowerCase())
    );
}

export default searchProducts;