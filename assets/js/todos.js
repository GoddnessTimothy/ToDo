/*
	Todo List Features:
		1. Remove item
		2. Add item
*/

//Add listeners to entire ul parent
$("ul").on("click", "li", function(item) 
{
	$(this).toggleClass("completed");
	console.log($(this).textContent);
	
});

// //Add listeners to entire ul parent
$("ul").on("click","span", function(event)
{
	if(confirm("Are you sure you want to remove this item?")) 
	{
		$(this).parent().fadeOut(500, function() 
		{
			$(this).remove();
		});

	}	
	event.stopPropagation();
});

//on() will add listeners for all potential FUTURE elements
//click() only adds listeners for existing elements
$("input[type='text']").keypress(function(event) 
{
	if(event.which == 13) 
	{
		var todoText = $("input[type='text']");
		$("ul").append("<li class='collection-item'><span class='remove'><i class='material-icons'>delete</i></span>" + " " + $(todoText).val() + "</li>");
		$(todoText).val("");
	}
});