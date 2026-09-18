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
import { isValidRFC } from './modules/rfcValidation';
import { isValidCURP } from './modules/curpValidation';
import { isValidEmpresarialPassword } from './modules/empresarialPasswordValidation';

//Validación de email
console.log(`Este email retornó: ${isValidEmail('juan.perez@empresa.com.mx')}`);
console.log(`Este email retornó: ${isValidEmail('usuario@.com')}`);
console.log('\n');

//Validación del cel
console.log(`Este número de telefono retornó: ${isValidPhoneNumber('6621234567')}`);
console.log(`Este número de telefono retornó: ${isValidPhoneNumber('662-123-4567')}`);
console.log('\n');

//Validación del código postal
console.log(`Este código postal retornó: ${isValidPostalCode('83100')}`);
console.log(`Este código postal retornó: ${isValidPostalCode('8310')}`);
console.log('\n');

//Validación de número enteros
console.log(`Este número entero retornó: ${isValidInteger('-12')}`);
console.log(`Este número entero retornó: ${isValidInteger('12.3')}`);
console.log('\n');

//Validación de número enteros
console.log(`Este número entero retornó: ${isValidDecimal('100.99')}`);
console.log(`Este número entero retornó: ${isValidDecimal('10.')}`);
console.log('\n');

//Validación de password
console.log(`Esta contraseña retornó: ${isValidPassword('Hola123!')}`);
console.log(`Esta contraseña retornó: ${isValidPassword('HolaMundo')}`);
console.log('\n');

//Validación de username
console.log(`Este nombre de usuario retornó: ${isValidUsername('Luis_123')}`);
console.log(`Este nombre de usuario retornó: ${isValidUsername('123Luis')}`);
console.log('\n');

//Validación de nombre
console.log(`Este nombre retornó: ${isValidName('Luis')}`);
console.log(`Este nombre retornó: ${isValidName('123Luis')}`);
console.log('\n');

//Validación de fecha
console.log(`Esta fecha retornó: ${isValidDate('31/12/2023')}`);
console.log(`Esta fecha retornó: ${isValidDate('31-12-2023')}`);
console.log('\n');

//Validación de the houurs
console.log(`Esta hora retornó: ${isValidHour('23:59')}`);
console.log(`Esta hora retornó: ${isValidHour('24:00')}`);
console.log('\n');

//Validación de tarjeta
console.log(`Esta tarjeta retornó: ${isValidCard('1234567890123456')}`);
console.log(`Esta tarjeta retornó: ${isValidCard('1234 5678 9012 3456')}`);
console.log('\n');

//Validación de RFC
console.log(`Este RFC retornó: ${isValidRFC('NACJ900101ABC')}`);
console.log(`Este RFC retornó: ${isValidRFC('NACJ900101')}`);
console.log('\n');

//Validación de CURP
console.log(`Esta CURP retornó: ${isValidCURP('NACJ900101HDFABC01')}`);
console.log(`Esta CURP retornó: ${isValidCURP('NACJ900101HDFABC0')}`);
console.log('\n');


//Validación de Contraseña Empresarial
console.log(`Esta contraseña empresarial retornó: ${isValidEmpresarialPassword('HolaMundo123!')}`);
console.log(`Esta contraseña empresarial retornó: ${isValidEmpresarialPassword('Hola1234!')}`);
