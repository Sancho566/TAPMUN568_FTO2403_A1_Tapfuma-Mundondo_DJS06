const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// ForEach Basics
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Uppercase Transformation
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log('Uppercase provinces:', provincesUppercase);

// Name Lengths
const nameLengths = names.map(name => name.length);
console.log('Name lengths:', nameLengths);

// Sorting
const sortedProvinces = [...provinces].sort();
console.log('Sorted provinces:', sortedProvinces);

// Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Filtered provinces (without "Cape"):', filteredProvinces);
console.log('Count of remaining provinces:', filteredProvinces.length);

// Finding 'S'
const containsS = names.map(name => name.includes('S'));
console.log('Names containing "S":', containsS);

// Creating Object Mapping
const nameToProvince = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
}, {});
console.log('Name to province mapping:', nameToProvince);

// Advanced Exercises (Single console.log Execution)

// Log Products
console.log('Products:', products.map(p => p.product));

// Filter by Name Length
const filteredByNameLength = products.filter(p => p.product.length <= 5);
console.log('Filtered by name length <= 5:', filteredByNameLength);

// Price Manipulation
const validProducts = products.filter(p => p.price.toString().trim() !== '');
const totalPrices = validProducts.map(p => ({ ...p, price: Number(p.price) }))
  .reduce((total, p) => total + p.price, 0);
console.log('Total price of all products:', totalPrices);

// Concatenate Product Names
const concatenatedNames = products.reduce((acc, p) => acc + p.product, '');
console.log('Concatenated product names:', concatenatedNames);

// Find Extremes in Prices
const priceExtremes = validProducts.map(p => ({ ...p, price: Number(p.price) }))
  .reduce((acc, p) => {
    if (acc.highest.price < p.price) acc.highest = p;
    if (acc.lowest.price > p.price) acc.lowest = p;
    return acc;
  }, { highest: { product: '', price: -Infinity }, lowest: { product: '', price: Infinity } });
console.log(`Highest priced item: ${priceExtremes.highest.product} (${priceExtremes.highest.price})`);
console.log(`Lowest priced item: ${priceExtremes.lowest.product} (${priceExtremes.lowest.price})`);

// Object Transformation
const transformedProducts = Object.entries(products).reduce((acc, [index, product]) => {
  acc[index] = { name: product.product, cost: product.price };
  return acc;
}, {});
console.log('Transformed products:');
Object.entries(transformedProducts).forEach(([key, value]) => {
  console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
});
