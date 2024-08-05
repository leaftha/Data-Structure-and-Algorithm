function solution(phoneBook) {
  const table = {};

  for (const number of phoneBook) {
    table[number] = true;
  }

  for (const number of phoneBook) {
    for (let i = 1; i < number.length; i += 1) {
      const prefix = number.slice(0, i);
      if (table[prefix]) return false;
    }
  }

  return true;
}

// -------------------------------------------------------

function solution(phone_book) {
  var answer = true;
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return answer;
}
