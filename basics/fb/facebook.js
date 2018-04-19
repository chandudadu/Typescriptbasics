//defining a class
var FacebookProfilePage = /** @class */ (function () {
    function FacebookProfilePage(work, professionalSkill, college, highSchool, details, currentCity, homeTown, mobilePhone, email, dateOfBirth, gender, relationship, familyMembers, nickname, agenow) {
        var _this = this;
        // method.
        this.getWork = function () {
            return _this.work;
        };
        this.getProfessionalSkill = function () {
            return _this.professionalSkill;
        };
        this.getCollege = function () {
            return _this.college;
        };
        this.getHighSchool = function () {
            return _this.highSchool;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getHometown = function () {
            return _this.homeTown;
        };
        this.getDetails = function () {
            return _this.details;
        };
        this.getMobilePhone = function () {
            return _this.mobilePhone;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getDateofBirth = function () {
            return _this.dateOfBirth;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getRelationship = function () {
            return _this.relationship;
        };
        this.getFamilyMembers = function () {
            return _this.familyMembers;
        };
        this.getNickname = function () {
            return _this.nickname;
        };
        this.getAge = function () {
            console.log("DOB");
            var mydate = new Date(_this.getDateofBirth());
            console.log(mydate);
            var todayDate = new Date();
            console.log(todayDate);
            var age = (todayDate.getSeconds()) - (mydate.getSeconds());
            console.log(age);
            _this.agenow = age;
            return _this.agenow;
        };
        this.work = work;
        this.professionalSkill = professionalSkill;
        this.college = college;
        this.highSchool = highSchool;
        this.details = details;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.mobilePhone = mobilePhone;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.relationship = relationship;
        this.familyMembers = familyMembers;
        this.nickname = nickname;
        this.agenow = agenow;
    } // end constructor
    return FacebookProfilePage;
}()); // end class 
var myFacebook = new FacebookProfilePage("Software", "javascript", "RGM", "stannes", ["About You:I am a web developer", "Favouritequotes:Be calm",
    "Name Pronunciation:Chan-druh-SHAY-ker DAH-doo", "Othernames(Birthname):Kanna"], "Bangalore", "Kurnool", 9049583204, "chandrasekhar.dadu427@gmail.com", "24June1992", "Male", "Anusha", ["Deepak:Brother", "Nani:Brotherinlaw"], "dadu", 25);
var work = myFacebook.getWork();
var professionalSkill = myFacebook.getProfessionalSkill();
var college = myFacebook.getCollege();
var homeTown = myFacebook.getHometown();
var details = myFacebook.getDetails();
var currentCity = myFacebook.getCurrentCity();
var highSchool = myFacebook.getHighSchool();
var mobilePhone = myFacebook.getMobilePhone();
var email = myFacebook.getEmail();
var gender = myFacebook.getGender();
var relationship = myFacebook.getRelationship();
var familyMembers = myFacebook.getFamilyMembers();
var nickname = myFacebook.getNickname();
var dateOfBirth = myFacebook.getDateofBirth();
var agenow = myFacebook.getAge();
console.log(work);
console.log(professionalSkill);
console.log(college);
console.log(currentCity);
console.log(highSchool);
console.log(details);
console.log(homeTown);
console.log(mobilePhone);
console.log(email);
console.log(gender);
console.log(relationship);
console.log(familyMembers);
console.log(nickname);
console.log(dateOfBirth);
console.log(agenow);
