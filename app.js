{
    // 1 - code (Abbreviate a Two Word Name)
    // Sharti: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
    // Sam Harris => S.H

    function abbrevName(name){
        const upper = name.split(' ')
        let first = upper[0][0].toUpperCase()
        let last = upper[1][0].toUpperCase()
        return `${first}.${last}`;
    }
}

{
    // 2 - code (Simple multiplication)
    // Sharti: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

    function simpleMultiplication(number) {
        return number % 2 === 0 ? number * 8 : number * 9
    }
}

{
    // 3 - code (Are You Playing Banjo?)
    // Sharti: Create a function which answers the question "Are you playing banjo?".
    // If your name starts with the letter "R" or lower case "r", you are playing banjo!

    function areYouPlayingBanjo(name) {
        return name[0] === "R" || name[0] === "r" ? `${name} plays banjo` : `${name} does not play banjo`  
    }
}

{
    // 4 - code (Beginner Series #2 Clock)
    // Sharti: Your task is to write a function which returns the time since midnight in milliseconds.

    function past(h, m, s){
        return h * 3600000 + m * 60000 + s * 1000;
    }
}

{
    // 5 - code (MakeUpperCase)
    // Sharti: Write a function which converts the input string to uppercase.

    function makeUpperCase(str) {
        return str.toUpperCase()
    }
}

{
    // 6 - code (Beginner Series #1 School Paperwork)
    // Sharti: Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
    // if n= 5, m=5: 25 else n=-5, m=5:  0

    function paperwork(n, m) {
        if (n < 0 || m < 0) return 0;
        return n * m;
    }
}

{
    // 7 - code (Opposites Attract)
    // Sharti: Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

    function lovefunc(flower1, flower2){
        return (flower1 % 2 !== flower2 % 2);
    }
}

{
    // 8 - code (Convert number to reversed array of digits)
    // Sharti: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
    // 35231 => [1,3,2,5,3]
 
    function digitize(n) {
        return String(n).split('').reverse().map(Number);
    }
}

{
    // 9 - code (Beginner - Lost Without a Map)
    // Sharti: Given an array of integers, return a new array with each value doubled.
    // [1, 2, 3] --> [2, 4, 6]

    function maps(x){
        return x.map(i => i * 2, 0)
    }
}

{
    // 10 - code (Century From Year)
    // Sharti: The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
    // 1705 --> 18

    function century(year) {
        return Math.ceil(year / 100);
    }
}

{
    // 11 - code (Basic Mathematical Operations)
    // Sharti: Your task is to create a function that does four basic mathematical operations.
    // ('+', 4, 7) --> 11

    function basicOp(operation, value1, value2){
        if(operation === '+') return value1 + value2
        else if(operation === '-') return value1 - value2
        else if(operation === '*') return value1 * value2
        else return value1 / value2
    }
}

{
    // 12 -  code (Returning Strings)
    // Sharti: Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?"

    function greet(name){
        return `Hello, ${name} how are you doing today?`
    }
}

{
    // 13 - code (Convert a Boolean to a String)
    // Sharti: Implement a function which convert the given boolean value into its string representation.

    function booleanToString(b){
        return b.toString()
    }
}

{
    // 14 - code (You Can't Code Under Pressure #1)
    // Sharti: Code as fast as you can! You need to double the integer and return it.

    function doubleInteger(i) {
        return i * 2;
    }
}

{
    // 15 - code (Counting sheep...)
    // Sharti: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

    function countSheeps(sheep) {
        return sheep.filter( i => i === true).length;
    }
}

{
    // 16 - code (Hello, Name or World!)
    // Sharti: Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

    function hello(name) {
        if (!name) {
            return "Hello, World!";
        } 
        else {
            let changed = name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().slice(1);
            return `Hello, ${changed}!`;
        }
    }
}

{
    // 17 - code (String ends with?)
    // Sharti: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

    function solution(str, ending){
        return str.endsWith(ending)
    }
}

{
    // 18 - code (Sum without highest and lowest number)
    // Sharti: The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

    function sumArray(array) {
        if(array == null || array.length == 2 || array.length == 1 || array.length == 0) return 0
        return array.sort((a, b) => a - b).slice(1, -1).reduce((sum, num) => sum + num, 0)
    }
}

{
    // 19 - code (Sum of two lowest positive integers)
    // Sharti: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

    function sumTwoSmallestNumbers(numbers) {  
        return numbers.sort((a, b) => b - a).slice(-2).reduce((sum, num) => sum + num) 
    }
}

{
    // 20 - code (Count of positives / sum of negatives)
    // Sharti: Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

    function countPositivesSumNegatives(input) {
        if (!input || input.length === 0) return []
        let positiveCount = 0;
        let negativeSum = 0;
        for (let num of input) {
            if (num > 0) return positiveCount++
            else if (num < 0) return negativeSum += num;
        }
        return [positiveCount, negativeSum];
    }
}




















{
    // Mustaqil ishi
    const Matematik = {
        plus(a, b){
            return a + b
        },
        minus(a, b){
            return a - b
        },
        exist(a, b){
            return a / b
        },
        increase(a, b){
            return a * b
        },
        square(a, b){
            return a ** b
        },
        module(num){
           return num >= 0 ? num : -num
        },
        sum(...rest){
            let sum = 0
            for(let i of rest){
                sum += i
            }
            return sum
        },
        pi(number){
            p = 3,14
            return number * p
        }
    }
}

