// Complete Day 1 goals here
// let song_names=['Lilac','Celebrity','bibibi'];
// let song_links=['https://www.youtube.com/watch?v=v7bnOxV4jAc','https://www.youtube.com/watch?v=0-q1KafFCLU ','https://www.youtube.com/watch?v=nM0xDI5R50E'];
// let song_artist=['iu','iu','iu']
// let song_time=['3:34',"3:19","3:29"]
// let song_image=["https://doopiano.com/wp-content/uploads/2021/03/LILAC.jpg","https://hashtaglegend.com/wp-content/uploads/2021/01/IU-2.jpg","https://thebiaslistcom.files.wordpress.com/2018/10/iu-bbibbi.jpg "]
// let indexes =[0,1,2]
let song1 = {name:"Lilac", link:"https://www.youtube.com/watch?v=v7bnOxV4jAc",artist:"iu", image:"https://doopiano.com/wp-content/uploads/2021/03/LILAC.jpg", time:"3:34",}
let song2 = {name:"Celebrity", link:"https://www.youtube.com/watch?v=0-q1KafFCLU",artist:"iu", image:"https://hashtaglegend.com/wp-content/uploads/2021/01/IU-2.jpg", time:"3:19",}
let song3 = {name:"Bibibi", link:"https://www.youtube.com/watch?v=nM0xDI5R50E",artist:"iu", image:"https://thebiaslistcom.files.wordpress.com/2018/10/iu-bbibbi.jpg ", time:"3:29",}
let organizer = [song1,song2,song3]
function displaySongInfo() {
  organizer.forEach(function(one){
      $(".images").append(`<img src="${one.image}">`);
      $(".songs").append(`<p>${one.name}</p>`);
      $(".artists").append(`<p>${one.artist}</p>`);
      $(".lengths").append(`<p>${one.time}</p>`);
      $(".links").append(`<a href="${one.link}">Link here</a>`);
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

  let song_name = $(".title").val();
  let song_link= $(".link").val();
  let song_artist = $(".artist").val();
  let song_time = $(".length").val();
  let song_image = $(".image").val();
  let new_song = {
    name:song_name,
    time:song_time,
    link:song_link,
    artist:song_artist,
    image:song_image
  };
  organizer.push(new_song);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
