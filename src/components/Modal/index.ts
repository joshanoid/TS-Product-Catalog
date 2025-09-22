import template from './template.html?raw';
import './styles.scss';
import { parseDomString } from '../../utils';

export class Modal {
  private container: HTMLElement;
  private content: HTMLElement;
  private closeButton: HTMLButtonElement;
  private backdrop: HTMLElement;
  private readonly boundKeydown: (event: KeyboardEvent) => void;

  constructor() {
    this.container = parseDomString(template);
    this.content = this.container.querySelector(
      '.modal-content',
    ) as HTMLElement;
    this.closeButton = this.container.querySelector(
      '.modal-close-button',
    ) as HTMLButtonElement;
    this.backdrop = this.container.querySelector(
      '.modal-backdrop',
    ) as HTMLElement;
    document.body.appendChild(this.container);
    this.boundKeydown = this.handleKeydown.bind(this);

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    this.container.addEventListener('transitionend', () => {
      if (!this.container.classList.contains('is-open')) {
        document.body.removeChild(this.container);
      }
    });
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.backdrop.addEventListener('click', this.close.bind(this));
    document.addEventListener('keydown', this.boundKeydown);
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (
      event.key === 'Escape' &&
      this.container.classList.contains('is-open')
    ) {
      this.close();
    }
  }

  public open(content: HTMLElement): void {
    this.content.appendChild(content);
    document.body.classList.add('modal-open');
    this.container.classList.add('is-open');
  }

  public close(): void {
    document.body.classList.remove('modal-open');
    this.container.classList.remove('is-open');
    document.removeEventListener('keydown', this.boundKeydown);
  }
}
