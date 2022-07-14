(function(num) {
    let flag= 0;
    while(num!==0)
    {
        if(num%2===0)
        {
            num = num/2
            flag++;
        }
        else{
            num = num-1;
            flag++;
        }
    }
    console.log(flag)
})(123);