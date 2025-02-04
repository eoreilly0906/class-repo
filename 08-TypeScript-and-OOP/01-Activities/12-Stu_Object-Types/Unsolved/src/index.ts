const cat: {
  name: string;
  age: number;
  pattern: string;
  isSleepy?: boolean;
  siblings?: string[];
  speak: () => void;
} = {
  name: 'Garfield',
  age: 3,
  pattern: 'striped',
  isSleepy: true,
  siblings: ['Odie', 'Spike'],
  speak: () => {
    console.log(`${cat.name} says "MEEEEEOWW"`);
  },
};


console.log(cat);

if (cat.siblings) {
  for (const sibling of cat.siblings) {
    console.log(sibling);
  }
}

cat.speak();

// TODO: create a cat object called 'cat' with the following properties: name: string, age: number, pattern: string, isSleepy (optional) : boolean, and siblings (optional) : string[]
// TODO: console.log the cat object
// TODO: console.log the cat's siblings if they exist
