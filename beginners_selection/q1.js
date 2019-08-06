/*
  L 2sec, 256MB
  正の整数a,b
  abの積が偶数か奇数か
  入力　a b
  出力　奇数　'Odd' 偶数　'Even'
*/
const input = '6 8';
function Main(input) {
    const rowData = input.split(' ');
    const a = rowData[0];
    const b = rowData[1];
    const result = a * b;
    if(result % 2 === 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
