console.table([2 < 1, 2 <= 2, 2 > 1, 2 >= 2, 2 == 1, 2 != 1]);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* Note:
    The reason is that an equality check == and comparisons <, >, <=, >= works differently.
    Comparisons convert null to a number, treating it as 0.
    That's why (3) null >= 0 is true and (1) null > 0 is false.
*/
