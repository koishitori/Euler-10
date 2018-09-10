var prime = [ 2 ];
for( var i = 3; i < 2000000; i += 2 ){
  var flag = 1;
  for( var j= 1; i >= prime[ j ] * prime[ j ]; j++ )
    if( i % prime[ j ] == 0 ){
      flag = 0;
      break;
    }
  if(flag)
    prime.push( i );
}
var ans = 0;
for(var i = 0; i < prime.length; i++ ) {
  ans += prime[i];
}
ans;
