function add(numbers) {
  if (numbers === "") return 0;
  if (!isNaN(numbers)) return parseInt(numbers, 10);
  return null;
}

module.exports = { add };
