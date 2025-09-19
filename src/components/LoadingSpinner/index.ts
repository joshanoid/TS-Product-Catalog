import { parseDomString } from '../../utils';
import template from './template.html?raw';
import './styles.scss';

export class LoadingSpinner {
  private container: HTMLElement;

  constructor() {
    this.container = parseDomString(template);
  }

  getContainer() {
    return this.container;
  }

  show() {
    this.container.style.display = 'flex';
  }

  hide() {
    this.container.style.display = 'none';
  }
}
