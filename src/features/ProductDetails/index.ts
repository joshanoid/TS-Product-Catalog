import template from './template.html?raw';
import type { Product as ProductType } from '../../types';
import { parseDomString } from '../../utils';
import './styles.scss';

export class ProductDetails {
  private product: ProductType;
  private container: HTMLElement;

  constructor(product: ProductType) {
    this.container = parseDomString(template);
    this.product = product;
  }

  get() {
    return this.container;
  }

  render() {
    this.container.ariaLabel = `Product name: ${this.product.name}`;

    const imageElement = this.container.querySelector(
      'img',
    ) as HTMLImageElement;
    imageElement.alt = this.product.name;
    imageElement.src = this.product.image_url;

    this.container.querySelector('.product-details-ibu')!.innerHTML =
      this.product.ibu.toString();
    this.container.querySelector('.product-details-abv')!.innerHTML =
      this.product.abv.toString();
    this.container.querySelector('.product-details-title h1')!.innerHTML =
      this.product.name;
    this.container.querySelector('.product-description')!.innerHTML =
      this.product.description;
  }
}
