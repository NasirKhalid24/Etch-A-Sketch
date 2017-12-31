let Container = document.getElementById('GridArea');
let sqaure_df = new DocumentFragment();
let Reset = document.querySelector('.btn');
let form = document.getElementById('frm');
let square_form = document.getElementById('submit_number');
let number_square_form = document.getElementById('squares_per_side')
let fill_color = document.getElementById('fill_color');
let checkbox = document.getElementById('checkbox');
let square_per_side = 30;
let Squares = null;

function RandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;}
function GridMake(number){

	if (Squares!= null){
	Squares.forEach((hover_square) =>
		{
			hover_square.remove();
		})
	}
	// -------------- Adding Grid ----------------------------
	for (let i = 0; i < number*number; i++) 
	{
		let square = document.createElement('div');
		square.className = 'GridSquare';
		calc_value = (650/number) - 2;
		square.style.width = calc_value + 'px';
		square.style.height = calc_value + 'px';
		sqaure_df.appendChild(square);
	}
	Container.appendChild(sqaure_df);
	Squares = document.querySelectorAll('.GridSquare');}
function Paint(){
	Squares.forEach((hover_square) =>
		{
			hover_square.addEventListener('mouseenter', (e) =>
			{
				if (checkbox.checked == false){
				hover_square.style.backgroundColor = fill_color.value;}
				else{
				hover_square.style.backgroundColor = RandomColor();
				}

			})
		})}

GridMake(square_per_side);
Paint();

// ---------------- Reset Button  -------------------------

Reset.addEventListener('click' , (e) =>
{
	if (Squares!= null){
	Squares.forEach((hover_square) =>
	{
		hover_square.style.backgroundColor = 'transparent';
	})
	}
})

// ---------------- BULLSHIT  -------------------------

square_form.addEventListener('click', (e) =>
{
	if (number_square_form.value > 2 && number_square_form.value < 101)
	{
		square_per_side = number_square_form.value;
	}
	GridMake(square_per_side);
	Paint();
})



