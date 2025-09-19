import type { Product, ProductsResponse } from './types';

export const fetchProducts = async (): Promise<ReadonlyArray<Product>> => {
  let response: Response;

  try {
    response = await fetch(
      'https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9',
    );
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new TypeError(
        `${error.message}${navigator.onLine ? '' : ' (offline)'}`,
      );
    }
    throw error;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { record } = (await response.json()) as ProductsResponse;

  return record;
};
