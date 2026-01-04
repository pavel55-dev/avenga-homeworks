function tellStory(person) {
    const story = `This is ${person[0]}. ${person[0]} is a nice person.
   Today they are ${person[1]}. They are ${person[2]} all day. The end.`;
    return story;
}
const person = [prompt("Enter name:"), prompt("Enter mood:"), prompt("Enter activity:")];

const storyOutput = tellStory(person);
console.log(storyOutput);