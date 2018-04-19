//defining a class


class FacebookProfilePage{

    work : string;
    professionalSkill: string;
    college: string;
    details:string[];
    highSchool:string;
    currentCity:string;
    homeTown : string; 
    mobilePhone: number;
    email: string; 
    dateOfBirth:string;
    gender:string;
    relationship:string;
    familyMembers : string[];
    nickname;string; 
    agenow:number;
    

    constructor (work : string,professionalSkill : string, college: string,highSchool:string,details:string[],currentCity:string, homeTown : string,
        mobilePhone : number, email: string,dateOfBirth: string,gender:string,relationship:string,familyMembers:string[],nickname:string ,agenow:number){
       this.work = work;
    this.professionalSkill =professionalSkill;
       this.college = college;
       this.highSchool= highSchool;
       this.details=details;
       this.currentCity = currentCity;
       this.homeTown = homeTown;
       this.mobilePhone=mobilePhone;
       this.email=email;
       this.dateOfBirth=dateOfBirth;
       this.gender=gender;
       this.relationship=relationship;
       this.familyMembers=familyMembers;
       this.nickname=nickname;
       this.agenow=agenow;

    }// end constructor
    
    // method.
    getWork = ()=>{
        return this.work;
    }
    getProfessionalSkill = ()=>{
        return this.professionalSkill;
    }
    getCollege = ()=>{
        return this.college;
    }
    getHighSchool = ()=>{
        return this.highSchool
    }
    getCurrentCity= ()=>{
        return this.currentCity
    }
    getHometown = ()=>{
        return this.homeTown
    }
    getDetails=()=>
    {
        return this.details
    }
    getMobilePhone= ()=>{
        return this.mobilePhone
    }
    getEmail = ()=>{
        return this.email}
    getDateofBirth = ()=>{
        return this.dateOfBirth
    }
    getGender= ()=>{
        return this.gender}
    getRelationship= ()=>{
        return this.relationship
    }
    getFamilyMembers= ()=>{
        return this.familyMembers}
    getNickname= ()=>{
        return this.nickname
    }
getAge=()=>{
    console.log("DOB");
let mydate = new Date(this.getDateofBirth());
console.log(mydate);
let todayDate=new Date();
console.log(todayDate);
let age = (todayDate.getSeconds())-(mydate.getSeconds());
console.log(age);
this.agenow=age;
return this.agenow;

}
    }// end class 
    
    
    let myFacebook = new FacebookProfilePage("Software","javascript","RGM","stannes",["About You:I am a web developer","Favouritequotes:Be calm",
    "Name Pronunciation:Chan-druh-SHAY-ker DAH-doo","Othernames(Birthname):Kanna"],
    "Bangalore","Kurnool",
    9049583204,"chandrasekhar.dadu427@gmail.com","24June1992","Male","Anusha",["Deepak:Brother","Nani:Brotherinlaw"],"dadu",25);
    
    let work = myFacebook.getWork();
    let professionalSkill= myFacebook.getProfessionalSkill();
    let college=myFacebook.getCollege();
    let homeTown=myFacebook.getHometown();
    let details=myFacebook.getDetails();
    let currentCity=myFacebook.getCurrentCity();
    let highSchool=myFacebook.getHighSchool();
    let mobilePhone=myFacebook.getMobilePhone();
    let email=myFacebook.getEmail();
    let gender=myFacebook.getGender();
    let relationship=myFacebook.getRelationship();
    let familyMembers=myFacebook.getFamilyMembers();
    let nickname=myFacebook.getNickname();
    let dateOfBirth=myFacebook.getDateofBirth();
    let agenow=myFacebook.getAge();
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