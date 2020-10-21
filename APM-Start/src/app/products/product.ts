export interface Product {
  id: number;
  categoryId?: number;
  description?: string;
  price?: number;
  productCode?: string;
  productName: string;
  quantityInStock?: number;
  searchKey?: string[];
  supplierIds?: number[];
}
