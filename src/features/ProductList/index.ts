import { fetchProducts } from '../../api';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import type { ProductsStore } from '../../types';
import { parseDomString } from '../../utils';
import { Product } from '../Product';
import productListTemplate from './template.html?raw';
import type { Store } from '../../store';
import './styles.scss';

export class ProductList {
  private parentNode: HTMLElement;
  private container: HTMLElement;
  private loadingSpinner: LoadingSpinner;
  private store: Store<ProductsStore>;

  constructor(parentNode: HTMLElement, store: Store<ProductsStore>) {
    this.parentNode = parentNode;
    this.container = parseDomString(productListTemplate);
    this.parentNode.appendChild(this.container);

    this.loadingSpinner = new LoadingSpinner();
    this.parentNode.appendChild(this.loadingSpinner.getContainer());

    this.store = store;
    this.store.subscribe(this.render.bind(this));
  }

  async render() {
    const { products, loading, error } = this.store.getState();

    this.loadingSpinner[loading ? 'show' : 'hide']();

    if (!products.length && !error) {
      try {
        const products = await fetchProducts();
        this.store.setState({ products, loading: false });
      } catch (error) {
        this.store.setState({ error: error as Error, loading: false });
      }
    }

    if (error) {
      console.error(error);
    }

    products.forEach((item) => {
      const product = new Product(this.container, item);
      product.render();
    });
  }
}
