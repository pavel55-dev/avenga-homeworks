function getType(value) {
  const type = typeof value;
  console.log(type);
  return type;
}

getType({});            // object
getType(true);          // boolean
getType(42);            // number
getType("Hello");       // string
getType(undefined);     // undefined
