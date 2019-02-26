function function2(){
    var result = document.getElementById('search-text').value;
    $.ajax({
       url: "https://www.googleapis.com/books/v1/volumes?q="+result,
       type: 'GET',
       dataType: 'json', // added data type
       success: handleResponse
   });
   function handleResponse(res){
       $('#result').html("");
       $.each(res.items,function(i,item){
           var title = item.volumeInfo.title,
               author = item.volumeInfo.authors[0],
               thumb = item.volumeInfo.imageLinks.thumbnail,
               url = item.volumeInfo.infoLink;
           var elTitle = $('<br><br><h3 class="title" ></h3>').html(title),
           elAuthor = $('<h4 class="author"></h4>').html(author),
           elThumb = $('<img src="" alt="" class="thumbnail"><br>').attr('src', thumb);
           elurl = $('<br><a href="" ><button class="btn btn-light btn-sm">Read More</button></a><br>').attr('href',url);
           $('#result').append(elTitle, elAuthor, elThumb,elurl);
   })
   } 
}