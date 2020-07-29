export class Todo {
    id: number;
    name: string;
    status: boolean;

    constructor(name: string) {
      this.name = name;
      this.id = Math.random();
      this.status = false;
    }
}
