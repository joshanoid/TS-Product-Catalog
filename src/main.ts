import { ProductList } from './features/ProductList/index.ts';

const app = new ProductList(document.querySelector('#root')!);
app.render();
