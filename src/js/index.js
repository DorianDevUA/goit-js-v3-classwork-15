console.log('Hello from Parcel');
import validatePasword from './validate-password';
import { addUser } from './api-service';

addUser('mango');

console.log(validatePasword('qweqweqeqweqweqweqw'));

// import {
//   fetchAllUsers,
//   fetchUserById,
//   updateUserById,
//   x as value,
//   y as name,
// } from './js/api-service';
// import * as apiService from './js/api-service';

// console.log(validatePasword);
// console.log(validatePasword('qweqweqwe'));

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
// console.log(name);

// console.log(apiService);
