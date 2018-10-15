function Eq() {
		var a = document.getElementById("id_a").value;
		var b = document.getElementById("id_b").value;
		var c = document.getElementById("id_c").value;
		
		var delta = b * b - (4 * a * c);
		
		var x1, x2, x1_re, x2_re, x1_im, x2_im;
		if(delta >= 0)
		{
			x1_re = (-b + Math.sqrt(delta)) / (2 * a);
			x2_re = (-b - Math.sqrt(delta)) / (2 * a);
		}
		else
		{
			x1_re = -b / (2 * a);
			x1_img = -Math.sqrt(-delta) / (2 * a);
			x2_re = -b / (2 * a);
			x2_img = Math.sqrt(-delta) / (2 * a);
		}

		
	document.getElementById("id_x1").innerHTML = x1_re + " + " + x1_im + "i";
}