import {isValidEmail} from './modules/emailValidation';
import {isValidPhoneNumber} from './modules/phoneValidation';
import {isValidPostalCode} from './modules/postalCodeValidation';
import {isValidInteger} from './modules/IntegerValidation';
import { isValidDecimal } from './modules/decimalValidation';
import { isValidPassword } from './modules/strongPasswordValidation';
import { isValidUsername } from './modules/userNameValidation';
import { isValidName } from './modules/nameValidation';
import { isValidDate } from './modules/dateValidation';
import { isValidHour } from './modules/hourValidation';
import { isValidCard } from './modules/cardValidations';

//Validación de email
console.log(`Este email retornó: ${isValidEmail('juan.perez@empresa.com.mx')}`);
console.log(`Este email retornó: ${isValidEmail('usuario@.com')}`);

//Validación del cel
console.log(`Este número de telefono retornó: ${isValidPhoneNumber('6621234567')}`);
console.log(`Este número de telefono retornó: ${isValidPhoneNumber('662-123-4567')}`);

//Validación del código postal
console.log(`Este código postal retornó: ${isValidPostalCode('83100')}`);
console.log(`Este código postal retornó: ${isValidPostalCode('8310')}`);

//Validación de número enteros
console.log(`Este número entero retornó: ${isValidInteger('-12')}`);
console.log(`Este número entero retornó: ${isValidInteger('12.3')}`);

//Validación de número enteros
console.log(`Este número entero retornó: ${isValidDecimal('100.99')}`);
console.log(`Este número entero retornó: ${isValidDecimal('10.')}`);

//Validación de password
console.log(`Esta contraseña retornó: ${isValidPassword('Hola123!')}`);
console.log(`Esta contraseña retornó: ${isValidPassword('HolaMundo')}`);

//Validación de username
console.log(`Este nombre de usuario retornó: ${isValidUsername('Luis_123')}`);
console.log(`Este nombre de usuario retornó: ${isValidUsername('123Luis')}`);

//Validación de nombre
console.log(`Este nombre retornó: ${isValidName('Luis')}`);
console.log(`Este nombre retornó: ${isValidName('123Luis')}`);

//Validación de fecha
console.log(`Esta fecha retornó: ${isValidDate('31/12/2023')}`);
console.log(`Esta fecha retornó: ${isValidDate('31-12-2023')}`);

//Validación de the houurs
console.log(`Esta hora retornó: ${isValidHour('23:59')}`);
console.log(`Esta hora retornó: ${isValidHour('24:00')}`);

//Validación de tarjeta
console.log(`Esta tarjeta retornó: ${isValidCard('1234567890123456')}`);
console.log(`Esta tarjeta retornó: ${isValidCard('1234 5678 9012 3456')}`);