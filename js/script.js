// Complete Day 1 goals here
let song_names=['Lilac','Celebrity','bibibi'];
let song_links=['https://www.youtube.com/watch?v=v7bnOxV4jAc','https://www.youtube.com/watch?v=0-q1KafFCLU ','https://www.youtube.com/watch?v=nM0xDI5R50E'];
let song_artist=['iu','iu','iu']
let song_time=['3:34',"3:19","3:29"]
let song_image=["https://doopiano.com/wp-content/uploads/2021/03/LILAC.jpg","https://hashtaglegend.com/wp-content/uploads/2021/01/IU-2.jpg","https://thebiaslistcom.files.wordpress.com/2018/10/iu-bbibbi.jpg "]
let indexes =[0,1,2]

function displaySongInfo() {
  indexes.forEach(function(one){
      $(".images").append(`<img src="${song_image[one]}">`);
      $(".songs").append(`<p>${song_names[one]}</p>`);
      $(".artists").append(`<p>${song_artist[one]}</p>`);
      $(".lengths").append(`<p>${song_time[one]}</p>`);
      $(".links").append(`<a href="${song_links[one]}">Link here</a>`);
  });

}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  indexes.push(indexes.length)
  song_names.push($(".title").val());
  song_links.push($(".link").val());
  song_artist.push($(".artist").val());
  song_time.push($(".length").val());
  song_image.push($(".image").val());
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
