$(document).ready(function(){
	function set_number(position,value) {
		$('#number_'+position).text(value);
	}	
	for (var i=0; i<10; i++) {
		(function(index) {
			$('#inp_number_left_'+index).on('click', function(e){
				set_number('left',index);
			});
		})(i);
		(function(index) {
			$('#inp_number_right_'+index).on('click', function(e){
				set_number('right',index);
			});
		})(i);
	}  
  });


