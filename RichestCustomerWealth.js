var maximumWealth = function(accounts) {
    let arr =[]
    let sum = 0;
    for(let i=0; i<accounts.length;i++)
    {
        for(let j=0;j<accounts[i].length;j++)
        {
            sum = sum+ accounts[i][j]
            
        }
        arr.push(sum)
        sum = 0
    }
    return Math.max(...arr);
};

let accounts = [[2,8,7],[7,1,3],[1,9,5]]

console.log(maximumWealth(accounts))