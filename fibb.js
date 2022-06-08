//Step 1. Create function and variables n1, n2, n, sum, and an array.
//Step 2. Create a for loop that goes from 0 up to num(localInput).
//Step 3. Make sure if you are at 0 (x = 0) that your value, n also equals 0. Or if you are at 1 (x = 1) your value also equals 1 because n1 and n2 are not assigned yet.
//Step 4. Use the fibonacci formula to give values to n1 and n2, then use them accordingly in the formula (n = n1 + n2).
//Step 5. After completing the formula and creating a fibonacci sequence, find only even numbers using the formula (n % 2 == 0)
//Step 6. Then push() the values to the array.
//Step 7. Then create another for loop to add all the values together.

function fibonacci(num)
{
        let n = 0;
        let n1 = 0;
        let n2 = 0;
        let sum = 0;
        const evens = [];

        for(let x = 0;x<=num;x++)
        {
                if(x==0)
                        n = 0;
                if(x==1)
                        n = 1;
                n1 = n;
                n = n1 + n2;
                n2 = n1;
                if(n % 2 == 0)
                {
                        //console.log(n);
                        evens.push(n);
                }
        }

        for(let y =0;y<evens.length;y++)
        {
                sum += evens[y];
        }



        return sum;
}

console.log(fibonacci(10));
