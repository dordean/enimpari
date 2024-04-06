class User {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const Amy = new User(3);
console.log(Amy.id); // Outputs: 3
