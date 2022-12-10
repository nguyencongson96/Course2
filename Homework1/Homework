// ===================array method============

{
  // 1: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
  // The function should not modify the array. It should return the new array.

  let arr = [5, 3, 8, 1];
  function filterRange(arr, a, b) {
    return arr.filter((item) => {
      return item >= a && item <= b;
    });
  }
  let filtered = filterRange(arr, 1, 4);
  console.log(filtered);
  console.log(arr);
}

{
  // 2: Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
  // The function should only modify the array. It should not return anything.
  let arr = [5, 3, 8, 1];
  function filterRangeInPlace(array, a, b) {
    for (i = 0; i < array.length; i += 1) {
      if (array[i] < a || arr[i] > b) {
        array.splice(i, 1);
      }
    }
    return array;
  }
  filterRangeInPlace(arr, 1, 4);
  console.log(arr);
}

{
  // 3:We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
  // Create a function copySorted(arr) that returns such a copy.
  let arr = ["HTML", "JavaScript", "CSS"];
  function copySorted(array) {
    let arrClone = [...array];
    return arrClone.sort();
  }
  let sorted = copySorted(arr);
  console.log(sorted); // CSS, HTML, JavaScript
  console.log(arr); // HTML, JavaScript, CSS (no changes)
}

{
  // 4: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
  // For instance:
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  let users = [john, pete, mary];

  function arrName(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
      result[i] = arr[i].name;
    }
    return result;
  }
  let names = arrName(users);
  console.log(names); // John, Pete, Mary
}

{
  // 5: You have an array of user objects, each one has name, surname and id.
  // Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
  // For instance:
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };
  let users = [john, pete, mary];
  function arrFullname(arr) {
    let result = [];
    for (i = 0; i < arr.length; i += 1) {
      result[i] = {
        fullName: `${arr[i].name} ${arr[i].surname}`,
        id: `${arr[i].id}`,
      };
    }
    return result;
  }
  // /*
  // usersMapped = [
  //   { fullName: "John Smith", id: 1 },
  //   { fullName: "Pete Hunt", id: 2 },
  //   { fullName: "Mary Key", id: 3 }
  // ]
  // */
  let usersMapped = arrFullname(users);
  console.log(usersMapped[0].id); // 1
  console.log(usersMapped[0].fullName); // John Smith
}

{
  // 6: Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
  // For instance:
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  let arr = [pete, john, mary];
  function sortByAge(array) {
    array.sort((a, b) => (a.age > b.age ? 1 : -1));
  }
  sortByAge(arr);
  console.log(arr);
  // // now: [john, mary, pete]
  // console.log(arr[0].name); // John
  // console.log(arr[1].name); // Mary
  // console.log(arr[2].name); // Pete
}

{
  // 7: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
  // Multiple runs of shuffle may lead to different orders of elements. For instance:
  let arr = [1, 2, 3, 4];
  function shuffle(array) {
    let currentIndex = array.length - 1,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      [array[randomIndex], array[currentIndex]] = [
        array[currentIndex],
        array[randomIndex],
      ];
      currentIndex -= 1;
    }
    return array;
  }
  shuffle(arr);
  console.log(arr);
  // All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
}
{
  // 8*: Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
  // The formula for the average is (age1 + age2 + ... + ageN) / N.
  // For instance:
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  let arr = [john, pete, mary];
  function getAverageAge(array) {
    let sum = 0;
    array.forEach((item) => {
      sum += item.age;
    });
    return sum / array.length;
  }
  console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
}
{
  // 9: Let arr be an array.
  // Create a function unique(arr) that should return an array with unique items of arr.
  // For instance:
  function unique(array) {
    let result = [],
      arrayClone = [...array].sort();
    for (i = 0; i < arrayClone.length - 1; i += 1) {
      if (arrayClone[i] !== arrayClone[i + 1]) {
        result.push(arrayClone[i]);
      }
    }
    result.push(arrayClone[arrayClone.length - 1]);
    return result;
  }
  let strings = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];

  console.log(unique(strings)); // Hare, Krishna, :-O
}
{
  // 10*: Let’s say we received an array of users in the form {id:..., name:..., age:... }.
  // Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
  // For example:
  // let users = [
  //   {id: 'john', name: "John Smith", age: 20},
  //   {id: 'ann', name: "Ann Smith", age: 24},
  //   {id: 'pete', name: "Pete Peterson", age: 31},
  // ];
  // let usersById = groupById(users);
  // /*
  // // after the call we should have:
  // usersById = {
  //   john: {id: 'john', name: "John Smith", age: 20},
  //   ann: {id: 'ann', name: "Ann Smith", age: 24},
  //   pete: {id: 'pete', name: "Pete Peterson", age: 31},
  // }
  // */
  // Such function is really handy when working with server data.
  // In this task we assume that id is unique. There may be no two array items with the same id.
  // Please use array .reduce method in the solution.
}

// ===================================Destructuring assignment===================
{
  // 1: We have an object:
  let user = {
    name: "John",
    years: 30,
  };
  // Write the destructuring assignment that reads:
  // name property into the variable name.
  // years property into the variable age.
  // isAdmin property into the variable isAdmin (false, if no such property)
  let { name: name, years: age, isAdmin: isAdmin = false } = user;
  console.log(name); // John
  console.log(age); // 30
  console.log(isAdmin); // false
}

{
  // 2: There is a salaries object:
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  let arrSalaries = Object.entries(salaries);
  function topSalary(array) {
    array.sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return 1;
      }
    });
    console.log(array);
    return array[0][0];
  }
  console.log(topSalary(arrSalaries));
  // Create the function topSalary(salaries) that returns the name of the top-paid person.
}
