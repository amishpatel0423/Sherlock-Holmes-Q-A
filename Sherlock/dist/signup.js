var form=document.getElementById("SignUp");
form.addEventListener("submit",SignUpForm,false);

function SignUpForm(event)
{
    
    var result = true;
    var elements =event.currentTarget;
   
    var screename = elements[0].value;
    var email = elements[1].value;
    var dob = elements[2].value;
    var avatar = elements[3].value;
    var password = elements[4].value;
    var cpassword = elements[5].value;

    var email_v = /^[\w]+@uregina.ca$/;
    var pswd_v = /^[\w]{6,}[\d]{1,}$/;
    var scrn_v = /^[\w]+[\S*]+$/;
    var dob_v = /^\d{2}d{2}\d{4}$/;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
    
    var time=new Date();
    var currentyear= time.getFullYear();

    document.getElementById("email_msg").innerHTML = "";
    document.getElementById("scrn_msg").innerHTML = "";
    document.getElementById("dob_msg").innerHTML ="";
    document.getElementById("pswd_msg").innerHTML = "";
    document.getElementById("cpswd_msg").innerHTML = "";
    document.getElementById("avatar_msg").innerHTML = "";
    
    //screen name validation
    if (screename == null || screename == "") 
      {
        document.getElementById("scrn_msg").innerHTML = "*Empty.";        
        document.getElementById("s").style.color = "Red";
        result = false;
      } 
      else if (scrn_v.test(screename) == false) 
      {
        document.getElementById("scrn_msg").innerHTML ="Atleast 6 characters and no space";
        document.getElementById("s").style.color = "Red";
        result = false;
      }
      else
      {
        document.getElementById("s").style.color = "black";
      }

    //email validation
    if (email == null || email == "") 
      {
        document.getElementById("email_msg").innerHTML = "*Empty.";        
        document.getElementById("e").style.color = "Red";
        result = false;
      } 
      else if (email_v.test(email) == false) 
      {
        document.getElementById("email_msg").innerHTML ="*username@uregina.ca";
        document.getElementById("e").style.color = "Red";
        result = false;
      }
      else
      {
        document.getElementById("e").style.color = "black";
      }

      //date of birth validation
      var year=dob.substring(0,4);
      var month=dob.substring(5,7);
      var day=dob.substring(8,10);

      if (dob=="") 
      {
        document.getElementById("dob_msg").innerHTML = "*Empty.";        
        document.getElementById("d").style.color = "Red";
        result = false;
      } 
      
      else if(year<currentyear-100||year>currentyear-10)
      {
        document.getElementById("dob_msg").innerHTML ="*Check year";
        document.getElementById("d").style.color = "Red";

        result = false;
      }
      else if (month>13||month<=0)
      {
        document.getElementById("dob_msg").innerHTML ="*Check Month";
        document.getElementById("d").style.color = "Red";
        result = false;
      }
      else if (day>=32||month<=0)
      {
        document.getElementById("dob_msg").innerHTML ="*Check Day";
        document.getElementById("d").style.color = "Red";
        result = false;
      }
      else if(year>=currentyear)
      {
        document.getElementById("dob_msg").innerHTML ="*Year can't be in Future";
        document.getElementById("d").style.color = "Red";
        result = false;
      }
      else
      {
        document.getElementById("d").style.color = "black";
      }

      
    //avatar validation

   if (avatar=="")
    {
       // document.getElementById("avatar_msg").innerHTML ="*Choose an image";  
        document.getElementById("a").style.color = "Red";
        result= false;
    } 
    else if (!allowedExtensions.exec(avatar)) 
    { 
        document.getElementById("avatar_msg").innerHTML ="Invalid File Type";  
        document.getElementById("a").style.color = "Red";

        result= false; 
    }
    else
      {
        document.getElementById("a").style.color = "black";
      }
    
    
    //password validation
    if (password == null || password == "") 
      {
        document.getElementById("pswd_msg").innerHTML = "*Empty.";        
        document.getElementById("p").style.color = "Red";

        result = false;
      } 
      else if (pswd_v.test(password) == false) 
      {
        document.getElementById("pswd_msg").innerHTML ="Atleast 6 characters and one non-letter";
        document.getElementById("p").style.color = "Red";
        result = false;
      }
      else if (password.length <=5) 
      {
        document.getElementById("pswd_msg").innerHTML ="Should be atleast 6 characters";
        document.getElementById("p").style.color = "Red";
        result = false;
      }
      else
      {
        document.getElementById("p").style.color = "black";
      }
      
      //confirm password validation
      if (cpassword == null || cpassword == "") 
      {
        document.getElementById("cpswd_msg").innerHTML = "*Empty.";        
        document.getElementById("c").style.color = "Red";
        result = false;
      } 
      else if (pswd_v.test(cpassword) == false) 
      {
        document.getElementById("cpswd_msg").innerHTML ="Atleast 6 characters and one non-letter";
        document.getElementById("c").style.color = "Red";
        result = false;
      }
      else if (cpassword.length <=5) 
      {
        document.getElementById("cpswd_msg").innerHTML ="Should be atleast 6 characters";
        document.getElementById("c").style.color = "Red";
        result = false;
      }
      else if(cpassword!=password)
      {
        document.getElementById("cpswd_msg").innerHTML ="*Does not match password";
        document.getElementById("c").style.color = "Red";
        result = false;
      }
      else
      {
        document.getElementById("c").style.color = "black";
      }

      event.preventDefault();

    if (result == true)
    {
        location.href = "post.html";
        return true;
    }
    else
    {
        return false;
    }
}