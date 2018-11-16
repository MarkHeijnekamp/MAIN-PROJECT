  let q1 = 2
  let butt = document.getElementById("Button")
  butt.addEventListener('click', () => {
        let ans = document.getElementById("q1").value
      if (q1 == ans) {
          document.getElementById("q").innerHTML = "this gud";
        console.log("ignore next log")
      }

      console.log(ans)
  })
 let crash = document.getElementById("Button2")

 let p = 0
 if(crash){
crash.addEventListener('click', () => {
p = 1;
})
}
while(p = 1){

    alert("HI");
}