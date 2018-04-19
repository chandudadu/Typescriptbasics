//defining a class
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(videoTitle, videoSource, category, license, description, numberOfViews, numberOfLikes, numberOfComments, numberOfShares) {
        var _this = this;
        // method.
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getNumberOfShares = function () {
            return _this.numberOfShares;
        };
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getvideoSource = function () {
            return _this.videoSource;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getLicense = function () {
            return _this.license;
        };
        this.videoTitle = videoTitle;
        this.videoSource = videoSource;
        this.category = category;
        this.license = license;
        this.description = description;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
        this.numberOfComments = numberOfComments;
        this.numberOfShares = numberOfShares;
    } // end constructor
    return YoutubeVideo;
}()); // end class 
var sunRahahe = new YoutubeVideo("sunRahahemera", "AdityaMusic", "Music", "Standard", "Melodioussong", 20, 25, 30, 40);
var views = sunRahahe.getNumberOfViews();
var comments = sunRahahe.getNumberOfComments();
var likes = sunRahahe.getNumberOfLikes();
var shares = sunRahahe.getNumberOfShares();
var description = sunRahahe.getDescription();
var videoTitle = sunRahahe.getvideoTitle();
var videoSource = sunRahahe.getvideoSource();
var license = sunRahahe.getLicense();
var category = sunRahahe.getCategory();
console.log(views);
console.log(comments);
console.log(likes);
console.log(shares);
console.log(description);
console.log(videoTitle);
console.log(videoSource);
console.log(license);
console.log(category);
