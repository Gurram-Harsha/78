var images = ["https://m.media-amazon.com/images/I/81+LYm8AyGL._AC_UF1000,1000_QL80_.jpg",
"https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg",
"https://t4.ftcdn.net/jpg/00/70/25/85/360_F_70258553_Ef1iWAEe7o3d0yQQIYrYwbNPAyE9wtf1.jpg",
"https://i.pinimg.com/564x/13/95/9a/13959adfbc9c48213e74ee6e0dc4f519.jpg" ,
"https://img.freepik.com/premium-vector/happy-girl-cartoon-character_1639-38093.jpg?w=360"];
var names = ["Fmaily Book","Father", " Mother", "me", "Sister"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
