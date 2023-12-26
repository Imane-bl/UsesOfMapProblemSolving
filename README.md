##This repository contains solutions to three problems solved using JavaScript.
Each problem is approached with different techniques involving string manipulation and array methods.

## Problem 1: Swapping Cases in a String

The swappinCases variable holds a string.
The solution uses .split("") to convert the string into an array of characters, 
then .map() to swap the case of each character based on its case (upper to lower and vice versa), 
and finally, .join("") to rejoin the characters into a string with swapped cases.
Problem 2: Inverting Numbers in an Array

## The invertnmbr array contains both positive and negative numbers.
.map() is utilized to invert the sign of each number by multiplying it by -1, 
effectively turning negative numbers into positive and vice versa.
Problem 3: Eliminating Numbers from a String

## The ib string contains both letters and numbers.
.split("") is employed to convert the string into an array of characters, then .map() is used with a check to eliminate numbers from the string by checking 
if each character is a number or not using isNaN(parseInt(elm)). Finally, .join("") reconstructs the string excluding the numbers.
