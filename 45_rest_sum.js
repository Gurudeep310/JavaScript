function sum(...args)
{
    let result = 0;
    for(let arg of args)
    {
        result = result + arg;
    }
    console.log(result);
}

sum(1,2,3);
sum(1,2,3,4,5,6,7,8);