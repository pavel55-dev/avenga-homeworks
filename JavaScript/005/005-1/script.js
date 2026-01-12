const input = [prompt("Enter the name of the animal:"), prompt("Enter the kind of the animal:"), prompt("What is the animal saying?")];

const animal = {
    name: input[0],
    kind: input[1],
    speak: function() {
        console.log(`The ${this.kind} named ${this.name} says: ${input[2]}`);
    }
}
animal.speak();
