/*
  目的：　コード提出の練習
  L: 2 sec 256 MB
  Q: 整数a, b, c 文字列s input
     a + b + c > result
     output result , s
  l_input: 1<= a, b, c <= 1,000
  1<= s <= 100
  input_data
  a
  b c
  s
  l_output: resultとsを空白区切りで1行に出力
  出力末尾に改行
*/

/*
  解答例
*/

function Main(input) {
    input = input.split('\n');
    tmp = input[1].split(' ');
    const a = parseInt(input[0], 10);
    const b = parseInt(tmp[0], 10);
    const c = parseInt(tmp[0], 10);
    const s = input[2];
    console.log('%d %s', a+b+c, s);
    // %d Number出力
    // %s String出力
    // %f Float出力

}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));