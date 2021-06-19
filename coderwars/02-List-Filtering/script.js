const filter_list = l => l.filter(list => typeof list == 'number');

//  [1, 2]
console.log(filter_list([1, 2, 'a', 'b']));

//  [1, 0, 15]
console.log(filter_list([1, 'a', 'b', 0, 15]));

// [1, 2, 123]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
