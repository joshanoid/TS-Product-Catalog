import { ProductList } from './features/ProductList/index.ts';
import './styles.scss';

const app = new ProductList(document.querySelector('#root')!);
app.render();
