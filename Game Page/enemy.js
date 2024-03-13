AFRAME.registerComponent("enemy",{
    init: function () {

        for (var i=0; i <= 10; i++) {
            const id = `points${i}`;
           // console.log(id)
            const posX = Math.random()*100;
           // console.log(posX)
            const posY = 2
            const posZ = -20+i;

            const position = { x:posX, y: posY, z: posZ};
            this.createPoint(id, position)

        }
    },

    createPoint:function(id, position){
        var point = document.querySelector("#enemy_c")
        var pointEl = document.createElement("a-entity");

        
         
        pointEl.setAttribute("id", id)
        pointEl.setAttribute("position", position)
        pointEl.setAttribute("material", "color", "#ff9100")
        pointEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 10
        })
        pointEl.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop:"true",
            dur:1000
        })
        pointEl.setAttribute("scale",{
            x:0.05,
            y:0.05,
            z:0.05
        })

        pointEl.setAttribute("dynamic-body",{
            shape:"sphere",
            mass:0
        })

        point.appendChild(pointEl)
      //  console.log(point.id)

    }
    
 })
 
 
 
//  init:function(){
//         this.enemy_f()
//     },
//     enemy_f:function(){
//         var en_count=10
//         var X=Math.random()
//         var Y=Math.random()
//         var Z=Math.random()
//         for(var i=0;i<en_count;i++){
//             var enemy = document.createElement("a-entity")
//                 enemy.setAttribute("geometry",{
//                     primitive:"sphere",
//                     radius:1 ,               
//                 })
//                 enemy.setAttribute("material","color","black")
//                 enemy.setAttribute

//         }
//     }