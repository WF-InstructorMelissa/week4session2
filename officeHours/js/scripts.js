$(document).ready(function(){
    var api_key = "VkYQSndefnBQ5q5V1naRuoT6yzq3flH1klT9an9L"
    var url = 'https://api.nasa.gov/planetary/apod?api_key='

    $.get(`${url}${api_key}`, function(res) {
        console.log(res)
        var html_str = ""
        html_str += "<video width='320' height='240' controls autoplay loop muted><source src='" + res.url + "' type='video/mp4'></video>"
        $(".photo").html(html_str)
    }, "json")
    $('button').click(function() {
        $('video').animate( {
            width: 'toggle'
        })
    })
})

// CRUD = Create (POST) Read (GET) Update (Update) Delete (Delete)