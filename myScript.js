function test()
   {
      var uIx = document.getElementById("userInputx").value; 
      var uIy = document.getElementById("userInputy").value;
      var uIr= document.getElementById("userInputr").value; 

      var canvasElement = document.querySelector("#myCanvas");
      var c=Math.sqrt(Math.pow(uIx,2)+Math.pow(uIy,2));
   canvasElement.height=c*60;
   canvasElement.width=c*60;
      document.getElementById("myCanvas").style.overflow="scroll";
      var w=canvasElement.height;
      var context = canvasElement.getContext("2d");
      var x=c*60;
     context.translate(c*30,c*30);
     context.rotate(-uIr*Math.PI/180);
               // the triangle

 
          context.beginPath();
          context.moveTo(5, 5);
	  context.lineTo(5,uIy*30);
          context.lineTo(uIx*30, uIy*30);
          context.closePath();

          // the outline
          context.lineWidth = 5;
	  context.strokeStyle = '#000000';
          context.stroke();

          // the fill color
	 context.fillStyle = "#FF0000";
         context.fill();
         context.moveTo(x,x);

     var area=uIy*uIx/2;
     var para= parseInt(uIx) +parseInt(uIy) +parseInt(c);
     var p=document.getElementById("detail");

     p.innerHTML="Value of hypotenous is "+c+". Area is "+area+"  .Perimeter is "+para ;


}
