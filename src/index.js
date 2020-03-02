module.exports = function toReadable (number) {
    let to19=['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tens=['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let resultString="";
    if(number<20)
    resultString=to19[Math.floor(number)];
    if(number>19&&number<100){
        resultString=number%10==0?tens[Math.floor(number/10)]:tens[Math.floor(number/10)]+" "+to19[number%10];
    }
    if(number>99){
        resultString=to19[Math.floor(number/100)]+" hundred";
        if((number%100)>19)
        resultString+=" "+tens[Math.floor(number/10)%10]+((number%10)>0?" "+to19[number%10]:"");
        if((number%100)<20&&(number%100)!=0)
        resultString+=" "+to19[number%100]
    }

    return resultString;
}
