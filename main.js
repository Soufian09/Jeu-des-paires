let a = [1,2,3,4,5,6,1,2,3,4,5,6]
	.map (p => [p,Math.random()])
	.sort ((a,b) => a [1]-b[1])
	.map (p => p[0])
	console.log(a);

let pics =document.getElementsByTagName('img');

	for (let i=0;i<pics.length;i++){
		pics[i].src2 = 'img/carte' + a[i] + '.jpeg';
	} 

let step = 1;
let p1,p2;
let timer= null;

	document.addEventListener('click',function(e){
		switch (step){
			case 1:
				if(e.target.tagName == "IMG"){
				e.target.src = e.target.src2;
				p1=e.target;
				step =2;
			}
			break;

			case 2:
				if(e.target.tagName == "IMG"){
				e.target.src = e.target.src2;
				p2=e.target;
				step =3;
			}
				timer = setTimeout(check ,1300);
			break;

			case 3 :
				clearTimeout(timer);
				check();
			
			break;
		}
	});

function check (){
	if (p1.src2==p2.src2){
			p1.replaceWith(document.createElement('span'))
			p2.replaceWith(document.createElement('span'))

		}	else {
			p2.src = p1.src ='img/carte0.jpeg';
				}
				step =1;
}