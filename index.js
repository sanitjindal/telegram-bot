require('dotenv').config();
const axios = require("axios")
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters')


// t.me/coding_examples_js_cpp_bot.
let binarysearch= `
// Binary Search in C++

#include <iostream>
using namespace std;

int binarySearch(int array[], int x, int low, int high) {
  
	// Repeat until the pointers low and high meet each other
  while (low <= high) {
    int mid = low + (high - low) / 2;

    if (x == array[mid])
      return mid;

    if (x > array[mid])
      low = mid + 1;

    else
      high = mid - 1;
  }

  return -1;
}

int main(void) {
  int array[] = {3, 4, 5, 6, 7, 8, 9};
  int x = 4;
  int n = sizeof(array) / sizeof(array[0]);
  int result = binarySearch(array, x, 0, n - 1);
  if (result == -1)
    printf("Not found");
  else
    printf("Element is found at index %d", result);
}

`
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome to the New Coding Bot from Sanit'))

bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch))
bot.command('whomadethis', (ctx) => ctx.reply('Sanit Jindal'))
bot.command('binarytreejs', async function (ctx) {
    const response = await axios.get("https://raw.githubusercontent.com/singhsanket143/FrontendDSA/refs/heads/master/Aug_29/trees.js");
    console.log(response.data)
    return ctx.reply(response.data)
})

bot.on(message('sticker'), (ctx) => ctx.reply('👍'))

bot.launch()