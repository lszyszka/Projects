

 /*   var addTask = document.querySelector(".addTask");
    var ul = document.querySelector(".tasks");
    var liList = document.querySelectorAll(".task");


    addTask.addEventListener('click', function () {
        var text = document.querySelector("input").value;
        if (text != "" && text != null) {
            var newLi = document.createElement("li");
            newLi.classList.add("task");
            newLi.innerHTML = text;
            ul.appendChild(newLi);
            document.querySelector("input").value = "";
        }

    });

    document.querySelector("input").addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            var text = document.querySelector("input").value;
            if (text != "" && text != null) {
                var newLi = document.createElement("li");
                var removeA = document.createElement("a");
                var completeA = document.createElement("a");
                newLi.classList.add("task");
                removeA.classList.add("remove");
                completeA.classList.add("complete");
                removeA.innerHTML="<i class='fa fa-trash-o'></i>";
                completeA.innerHTML="<i class='fa fa-check'></i>";
                newLi.appendChild(removeA);
                newLi.appendChild(completeA);
                newLi.innerHTML = text;
                ul.appendChild(newLi);

                document.querySelector("input").value = "";



            }
        }
    });

    for(var i=0;i<liList.length;i++) {
        liList[i].addEventListener('mouseenter', function () {
            this.querySelector(".remove").style.display="inline-block";
            this.querySelector(".complete").style.display="inline-block";
            console.log("hello");

        })

        liList[i].addEventListener('mouseout', function () {
            this.querySelector(".remove").style.display="none";
            this.querySelector(".complete").style.display="none";

        })
    }


*/


 $(function() {
     // nasz kod



$(".add").click(function () {
    $(".new-task").slideToggle();
    $("input").focus();

});


    $(document).keypress(function(e) {
        var str = $( "input" ).val();

        if(e.which == 13 && str != "" && str != null ) {
            $( "<li class='task'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='complete' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
            $( "input" ).val("");
            $( "input" ).focus();
        }
    });

 $(".new-task").click(function(){
     var str = $( "input" ).val();

     if( str != "" && str != null) {
         $( "<li class='task'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='complete' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
         $( "input" ).val("");
         $( "input" ).focus();
     }
 });

 $(document).on('click', '.remove', function() {
     $(this).parent().slideUp();
 });

 $(document).on('click', '.complete', function() {
     $(this).parent().toggleClass(" done");
     console.log($(this).parent());
 });

     $(".tasks").sortable();





 });



