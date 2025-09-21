import { ProductList } from './features/ProductList/index.ts';
import { Store } from './store.ts';
import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store({ products: [], loading: true, error: null });
  const app = new ProductList(document.querySelector('#root')!, store);

  app.render();
});
