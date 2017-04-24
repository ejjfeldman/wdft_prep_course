/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

for(var number=1; number<=100; number++){
    console.log(number);
}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/


var result="#";

for(var number=1; number<=7; number++){
    console.log(result);
    result+="#";
}


