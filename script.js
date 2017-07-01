$(function(){
    for(var i = 1; i <= 151; i++) {
        $('#pokemon').append("<img id='"+ i +"'class='pokemon' src='http://pokeapi.co/media/img/" + i + ".png'/>")
    };

    $('.pokemon').click(function(){
	    var id = this.id;
	    $.get('http://pokeapi.co/api/v1/pokemon/' + id, function(res){
			var str = "";
			str += "<h2>Name: " + res['name'] + "</h2>";
			str += "<img id='" + id + "'class='pokemon' src='http://pokeapi.co/media/img/" + id + ".png'/>";
			str += "<h4>Height: " + res['height'] + "</h4>";
			str += "<h4>Weight: " + res['weight'] + "</h4>";
			str += "<h4>Types:</h4>";
			str += "<ul>"; 
			for(var i = 0; i < res.types.length; i++) {
				str += "<li>" + res.types[i].name + "</li>";
			}
	    	str += "</ul>";
	   		 $("#index").html(str);
		}, "json");
 	});
});