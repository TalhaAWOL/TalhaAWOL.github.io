$("#alertClose").click(function() {	
    $("#alertDiv").css("display", "none")
})

function formatDate(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

function formatTime(date){

    d = new Date(date);
    var hours=d.getHours(),minute=d.getMinutes(),l="AM";
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours < 10){
        hours = '0'+hours;
    }
    if(minute < 10){
        minute = '0'+minute;
    }
    if(d.getHours() >= 12){
    l="PM"
    }else{
    l="AM"
    }

    return hours+':'+minute+' '+'<span id="amText">'+l+'</span>';

}


(function(){
    // Acquire the date
    var date = new Date();
    // Acquire the time as a string
    var time = date.toLocaleTimeString();
    $("#clockText").html(formatTime(date));
    $("#dateText").html(formatDate(date));
    setTimeout(arguments.callee, 1000);
})();

var jsonReddit = [{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
},
{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
},
{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
},
{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
},
{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
},
{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
},
{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
},
{
    "title" : "WebGL Fluid Simulation",
    "postedBy": "u/magenta_placenta",
    "redditScore": "426"
}];

for(var i = 0; i < jsonReddit.length; i++) {
    $("#redditNews").html( $("#redditNews").html() + '<div class="posts"><a href=""><p class="text-white">'+jsonReddit[i].title+'<br><span style="color:#31ABBB">Posted by:</span><br><span style="color:#C0C56F">'+jsonReddit[i].postedBy+'</span><br><span class="text-muted">Reddit Score: '+jsonReddit[i].redditScore+'</span><br><span id="postLink">Link to Comments</span></p></a></div><br>')
}

var jsonHistory = [{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
},
{
    "title" : "JavaScript this",
    "time": "16"
}];

for(var i = 0; i < jsonHistory.length; i++) {
    $("#jsHistory").html( $("#jsHistory").html() + '<div class="row mt-3"><div class="col-5"><img class="jsHistoryIcon mr-1" width="16px" src="w3school.jpg" alt=""><a href="" class="text-muted jsHistroyText">'+jsonHistory[i].title+'</a></div><div class="col-7"><span class="jsHistroyText jsHistoryTimeText">'+jsonHistory[i].time+' hours ago</span></div></div>')
}

var jsonGit = [{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
},
{
    "Repo" : "example/name",
    "Issue": "2139",
    "Warning": "This is unkown DOM propertyfor. Did you mean htmlFor?"
}];

for(var i = 0; i < jsonGit.length; i++) {
    $("#gitIssues").html( $("#gitIssues").html() + '<div class="postsGit mt-3"><a href=""><p><span class="text-muted">Repo: '+jsonGit[i].Repo+'</span><br><span style="color:#C0C56F">Issue #'+jsonGit[i].Issue+'</span><br><span style="color:white">Warning: '+jsonGit[i].Warning+'</span></p></a></div>')
}