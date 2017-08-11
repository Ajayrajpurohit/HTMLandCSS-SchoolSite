function validate(){
    var fname = document.addForm.firstname.value;
    var lname = document.addForm.lastname.value;
    var faname = document.addForm.fathername.value;
    var moname = document.addForm.mothername.value;
    var std = document.addForm.class.value;
    var birth = document.addForm.birth.value;
    var photo = document.addForm.photo.value;
    var sign = document.addForm.sign.value;
    var phone = document.addForm.phone.value;
    var add = document.addForm.address.value;
    
    if( phone == "" || phone == null || isNaN(phone) || phone.length != 10)
        {
            alert("Invalid Phone no. ?");
            document.addForm.phone.focus();
            return false;
        }
    if( fname == "" || fname == null)
        {
            alert("You forgot your first name :)");
            document.addForm.firstname.focus();
            return false;
        }
    if( lname == "" || lname == null)
        {
            alert("You forgot your last name :)");
            document.addForm.lastname.focus();
            return false;
        }
    if( faname == "" || faname == null)
        {
            alert("You forgot your father's name :)");
            document.addForm.fathername.focus();
            return false;
        }
    if( moname == "" || moname == null)
        {
            alert("You forgot your mother's name :)");
            document.addForm.mothername.focus();
            return false;
        }
    
    if( std == "" || std == null || isNaN(std))
        {
            alert("You forgot to mention your class of Admission :)");
            document.addForm.class.focus();
            return false;
        }
    if( birth == "" || birth == null)
        {
            alert("You missed your date of birth :)");
            document.addForm.birth.focus();
            return false;
        }
    if( photo == "" || photo == null)
        {
            alert("You forgot to upload your Photo :)");
            document.addForm.photo.focus();
            return false;
        }
    if( sign == "" || sign == null)
        {
            alert("Please upload image of your sign :)");
            document.addForm.sign.focus();
            return false;
        }
    
    if( add == "" || add == null)
        {
            alert("Address human ! :)");
            document.addForm.address.focus();
            return false;
        }
}