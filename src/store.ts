type State<T> = T;
type Listener<T> = (state: State<T>) => void;

export class Store<T> {
  private state: State<T>;
  private listeners: Set<Listener<T>> = new Set();

  constructor(initialState: State<T>) {
    this.state = initialState;
  }

  public getState(): State<T> {
    return this.state;
  }

  public setState(newState: Partial<State<T>>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener(this.state));
  }

  public subscribe(listener: Listener<T>) {
    this.listeners.add(listener);
  }
}
