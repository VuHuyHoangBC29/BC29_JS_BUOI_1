//alert("Bootcamp 29");
/*console.log("Hello Cybersoft");
console.log("Vu Huy Hoang");*/

/**
 * Variable - Biến
 * = phép gán, bên phải dấu bằng thực thi trước, sau đó mới gán vào biến bên trái dấu bằng.
 * -string
 * -number
 * -boolean
 * -undefined
 * -null
 */
var username = "Hoang"; //string
console.log(username);

var address = "112 Cao Thang"; //string
console.log(address);

var numberStudent = 40; //number
console.log(numberStudent);

var isLogin = true; //boolean (true/false)

var age;
console.log(age);

var empty = null; //null
//Cập nhật giá trị Cybersoft cho biế empty
empty = "Cybersoft";
console.log(empty);

/**
 * Toan tu
 */

var a = 5;
var b = 5;
//Cộng (+): cộng số & nối chuỗi

var tong = a + b;
console.log("Tong la: " + tong);

//Trừ (-)
var hieu = a - b;
console.log("Hieu la: " + hieu);

//Nhan (*)
var tich = a*b;
console.log("Tich la " + tich);

//Chia (/): Chia lấy phần nguyên
var thuong = a/b;
console.log("Thuong la " + thuong);

//Chia (%): Chia lấy phần dư
var layPhanDu = a % b;
console.log("Chia phan du la: " + layPhanDu);

//Tăng 1 đơn vị (++)
var count = 0;
var newCount = ++count; //count + 1
//++ phía trước sẽ cộng trước rồi mới gán giá trị, ++ phía sau sẽ gán trước rồi mới cộng
console.log(newCount);

//Giảm 1 đơn vị (--)


//Phep gan (+=) -= *= /b %b
var number = 0;
number += 1; //number = number + 1
console.log(number);

var a; //undefined
var b = 2; // b = 2
a = 4; // a = 4 b = 2
b =  (++b) + (++a); // b = 8 a = 5
console.log(a, b);

var a = 3; // a = 3
var b = 1; // a = 3 b = 1
a += b; // a = 4 b = 1
b = (b++) + (a++); // b = 5 a = 5   
console.log(a, b);

/**
 * Hằng số (ES6)
 */
const PI = 3.14;

/**
 * - Đầu vào
 *      + canh1 = 3
 *      + canh2 = 4
 * 
 *  - Xử lý
 *      + binhPhuongCanhHuyen = (canh1 * canh1) + (canh2 * canh2)
 *      + Can bac hai binhPhuongCanhHuyen
 * 
 *  - Đầu ra
 *      + canhHuyen
 */

var canh1 = 3;
var canh2 = 4;
var canhHuyen = 0;

//Binh phuong canhHuyen
canhHuyen = (canh1 * canh1) + (canh2 * canh2)

//can bac hai canhHuyen
canhHuyen = Math.sqrt(canhHuyen);

//show ket qua
console.log("Canh huyen la: " + canhHuyen);

/**
 * Gia su:
 * n = 245 => 2 + 4 + 5 => 11?
 * 
 *  - Đầu vào
 *      + n = 245
 * 
 *  - Xử lý
 *      + Tách lấy hàng trăm: Math.floor(n/100) - Mathfloor làm tròn xuống
 *      + Tách lấy hàng chục: Math.floor(n % 100 / 10)
 *      + Tách lấy hàng đơn vị: n % 10
 *      + hang tram + hang chuc + hang dv
 *  
 *  - Đầu ra: show ket qua
 */
var n = 245;

var hangTram = Math.floor(n/100);
var hangChuc = Math.floor(n%100/10)
var hangDV = n%10;

var tongKySo = hangTram + hangChuc + hangDV;
console.log("Tong ky so la: " + tongKySo);