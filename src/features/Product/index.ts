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
    this.container.dataset.id = this.product.id.toString();
  }

  render() {
    this.container.ariaLabel = `Product name: ${this.product.name}`;
    this.container.querySelector('.title > h2')!.innerHTML = this.product.name;

    const imageElement = this.container.querySelector(
      '.image',
    ) as HTMLImageElement;
    imageElement.alt = this.product.name;
    imageElement.src = this.product.image_url;

    this.container.querySelector('.ibu-value')!.innerHTML =
      this.product.ibu.toString();
    this.container.querySelector('.abv-value')!.innerHTML =
      this.product.abv.toString();

    this.container.classList.add(`background-${this.product.ibu}`);
  }
}
