class Singleton {
  static readonly instance = new Singleton()

  private constructor() {}

  static getInstance() {
    return this.instance
  }
}
