import productTemplate from './template.html?raw';
import type { Product as ProductType } from '../../types';
import { parseDomString } from '../../utils';
import './styles.scss';

export class Product {
  private product: ProductType;
  private parentNode: HTMLElement;
  private container: HTMLElement;

  constructor(parentNode: HTMLElement, product: ProductType) {
    this.parentNode = parentNode;
    this.container = parseDomString(productTemplate);
    this.parentNode.appendChild(this.container);
    this.product = product;
  }

  render() {
    this.container.querySelector('.product-name')!.innerHTML =
      this.product.name;
    (this.container.querySelector('.product-image') as HTMLImageElement).src =
      this.product.image_url;
    this.container.classList.add(`background-${this.product.ibu}`);
  }
}
