function removacz(e) {
    let result='';
    for (let i = 0; i < e.length; i++) {
       
      if (e[i]==="a"||e[i]==="c"||e[i]==="z") {
       continue; 
      }  
      result+=e[i];
    }
    return result;
}