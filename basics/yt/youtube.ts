//defining a class


class YoutubeVideo {

    videoTitle : string;
    videoSource: string;
    category: string;
    license:string;
    description:string;
    numberOfViews : number; 
    numberOfLikes : number;
    numberOfComments : number; 
    numberOfShares: number; 
    
    
    constructor (videoTitle : string,videoSource : string, category: string,license:string,description:string, numberOfViews : number,
        numberOfLikes : number, numberOfComments: number,numberOfShares: number ){
       this.videoTitle = videoTitle;
       this.videoSource =videoSource;
       this.category = category;
       this.license= license;
       this.description = description;
       this.numberOfViews = numberOfViews;
       this.numberOfLikes=numberOfLikes
       this.numberOfComments=numberOfComments;
       this.numberOfShares=numberOfShares;

    }// end constructor
    
    // method.
    getNumberOfViews = ()=>{
        return this.numberOfViews
    }
    getNumberOfLikes = ()=>{
        return this.numberOfLikes
    }
    getNumberOfComments = ()=>{
        return this.numberOfComments
    }
    getNumberOfShares = ()=>{
        return this.numberOfShares
    }
    getvideoTitle = ()=>{
        return this.videoTitle
    }
    getvideoSource = ()=>{
        return this.videoSource
    }
    getDescription= ()=>{
        return this.description
    }
    getCategory = ()=>{
        return this.category
    }
    getLicense = ()=>{
        return this.license
    }
    }// end class 
    
    
    let sunRahahe = new YoutubeVideo("sunRahahemera","AdityaMusic","Music","Standard","Melodioussong",20,25,30,40);
    
    let views = sunRahahe.getNumberOfViews();
    let comments= sunRahahe.getNumberOfComments();
    let likes=sunRahahe.getNumberOfLikes();
    let shares=sunRahahe.getNumberOfShares();
    let description=sunRahahe.getDescription();
    let videoTitle=sunRahahe.getvideoTitle();
    let videoSource=sunRahahe.getvideoSource();
    let license=sunRahahe.getLicense();
    let category=sunRahahe.getCategory();

    console.log(views);
    console.log(comments);
    console.log(likes);
    console.log(shares);
    console.log(description);
    console.log(videoTitle);
    console.log(videoSource);
    console.log(license);
    console.log(category);