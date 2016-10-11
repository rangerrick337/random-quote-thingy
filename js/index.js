$(document).ready(function() {
  
  var getAQuote = function() {
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        console.log(data);
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        // $('footer').html(post.title);
        $('.quote').html(post.content + "<footer>" + post.title + "</footer>");
      },
      cache:false
    });
  }; 
  
  getAQuote();
  
  $("button").click(getAQuote);
});