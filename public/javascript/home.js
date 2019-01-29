//when loaded, load at top of document
$(document).ready(function() {
  $(this).scrollTop(0);
});

//initiate baguettebox.js's gallery instance upon document load
$(document).ready(function() {
  baguetteBox.run('.gallery');
});

//the following has been temporarily commented out due to issues with the API account's bandwidth

//instantiate cloudinary
// const cld = cloudinary.Cloudinary.new({ cloud_name: "clckport", secure: true });
//
// //coding demo players and their sources
// const hangmanPlayer = cld.videoPlayer('hangman-player');
// const hangmanSource = "v1538508067/demos/hangman-vid.mp4";
//
// const sqlPlayer = cld.videoPlayer('sql-player');
// const sqlSource = "v1538508432/demos/SQL-Database-Example-480.mp4";
//
// const feedbagPlayer = cld.videoPlayer('feedbag-player');
// const feedbagSource = "v1539637745/demos/Feedbag-Concept-480.mp4";
//
// const reactPlayer = cld.videoPlayer('react-player');
// const reactSource = "v1538507999/demos/Indecision-app-react.mp4";
//
// //motion graphic players and sources
// const robotPlayer = cld.videoPlayer('robot-player');
// const roboSource = "v1540515229/mogr/robot-480.mp4";
//
// const nlcPlayer = cld.videoPlayer('nlc-player');
// const nlcSource = "v1540520757/nlc-low.mp4"
//
// const lidl1Player = cld.videoPlayer('lidl1-player', {
//   transformation: {
//     crop: "fill"
//   }
// })
//
// const lidl1Source = "v1540514570/mogr/CW30_NF_Exit.mp4";
//
// const lidl2Player = cld.videoPlayer('lidl2-player');
// const lidl2Source = "v1540514568/mogr/CW31_NF_Exit_monwed.mp4"
//
// const lidl3Player = cld.videoPlayer('lidl3-player');
// const lidl3Source = "v1540514567/mogr/CW31_Exit_NF_Drill_Vacuum.mp4";
//
// //instantiate coding players
// hangmanPlayer.source(hangmanSource);
// sqlPlayer.source(sqlSource);
// feedbagPlayer.source(feedbagSource);
// reactPlayer.source(reactSource);
//
// //instantiate motion graphic players
// robotPlayer.source(roboSource);
// nlcPlayer.source(nlcSource);
// lidl1Player.source(lidl1Source);
// lidl2Player.source(lidl2Source);
// lidl3Player.source(lidl3Source);
