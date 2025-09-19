import { fetchProducts } from '../../api';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import type { Products } from '../../types';
import { parseDomString } from '../../utils';
import { Product } from '../Product';
import productListTemplate from './template.html?raw';

export class ProductList {
  private products?: Products;
  private parentNode: HTMLElement;
  private container: HTMLElement;
  private loadingSpinner: LoadingSpinner;

  constructor(parentNode: HTMLElement) {
    this.parentNode = parentNode;
    this.container = parseDomString(productListTemplate);
    this.parentNode.appendChild(this.container);

    this.loadingSpinner = new LoadingSpinner();
    this.parentNode.appendChild(this.loadingSpinner.getContainer());
  }

  async render() {
    this.loadingSpinner.show();

    try {
      this.products = await fetchProducts();
    } catch (error) {
      console.error(error);
    }

    this.loadingSpinner.hide();

    this.products?.forEach((item) => {
      const product = new Product(this.container, item);
      product.render();
    });
  }
}
