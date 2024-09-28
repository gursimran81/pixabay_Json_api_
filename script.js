var key="45758073-87a32ada52e05b969e61882b3";
var endpoint="https://pixabay.com/api/?key="+key+"&q="

function getImages(e){
    e.preventDefault();
    var q=document.getElementById('query').value;
    var url=endpoint+q;
    var content=""
    $("#imgresult").empty();
    $.getJSON( url, function(data) {
        $.each(data.hits, function( key, val) {
            content+=`<div class="col-md-3 mb-3">
            <img src=${val.largeImageURL} class='w-100 border p-2'
            title='$(val.type)'
            alt='$(val.tags)' height="250px"/>
            </div>`
        })
        $('#imgresult').append(content);
    })
}