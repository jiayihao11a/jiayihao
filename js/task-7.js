function contxt() //���庯��
      {
		 if($("#test").hasClass("row-10-on")){
                        $("#test").removeClass("row-10-on").addClass("row-10-dowm");
                    }else{
                        $("#test").removeClass("row-10-dowm").addClass("row-10-on");
                    }
      }