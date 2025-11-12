const MOVIES = [
  {id:1, title:'Interstellar', year:2014, rating:8.7, genres:['Sci-Fi','Adventure','English'], 
   overview:'An exploration of a distant exoplanet and the crew who risk everything.', 
   poster:'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 
   ott: [
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/interstellar/1971000531?search_query=inter'},
    {platform: 'prime', url: 'https://www.primevideo.com/detail/0PUNMGZEWOMYFKR1XIGOLTL2YM/ref=atv_dl_rdr'}
   ],
   director:'Christopher Nolan', music:'Hans Zimmer', awards:['Academy Award for Best Visual Effects','BAFTA for Best Production Design']},

  {id:2, title:'The Dark Knight Rises', year:2012, rating:7.1, genres:['Drama','Superhero','English'], 
   overview:'In this epic conclusion to the Dark Knight trilogy, the emergence of Bane drives Batman out of his self-imposed exile.', 
   poster:'https://picfiles.alphacoders.com/360/thumb-1920-360099.jpg', 
   ott: [
    {platform: 'prime', url: 'https://www.primevideo.com/detail/0HX4ZJ73JRAEWPVUE5ZA7ALIIX/ref=atv_sr_fle_c_sr3aca3c_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07HF38CHS&qid=1760534646042'},
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/the-dark-knight-rises/1971000392?search_query=The+Dark+Knight+Rises'}
   ],
   director:'Christopher Nolan', music:'Hans Zimmer', awards:['Academy Award Nomination for Best Sound Editing']},

  {id:3, title:'The Dark Knight', year:2008, rating:9.1, genres:['Action','Sci-Fi','superhero','English'], 
   overview:'Batman, Lt. Gordon and Harvey Dent go up against the Joker, terrorizing Gotham City', 
   poster:'https://picfiles.alphacoders.com/441/thumb-1920-441965.jpg', 
   ott: [
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/the-dark-knight/1971000395?search_query=The+Dark+Knight+Rises'},
    {platform: 'prime', url: 'https://www.primevideo.com/detail/0JKQMPWCE3RTK5TFZCSIC3H7XO/ref=atv_sr_fle_c_sr3aca3c_2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B0CPTSF27C&qid=1760534646042'},
    {platform: 'netflix', url: 'https://www.netflix.com/in/title/70079583'}
   ],
   director:'Christopher Nolan', music:'Hans Zimmer', awards:['Academy Award for Best Supporting Actor (Heath Ledger)','BAFTA for Best Supporting Actor']},

  {id:4, title:'Avatar', year:2009, rating:7.9, genres:['Drama','Sci-Fi','Fantacy','English'], 
   overview:'Former Marine Jake Sully is deployed as an Avatar on a mission to Pandora, torn between two worlds.', 
   poster:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/avatar.jpg', 
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/avatar/1770000948?search_query=avatar'}],
   director:'James Cameron', music:'James Horner', awards:["82nd Academy Awards - Best Art Direction", "82nd Academy Awards - Best Cinematography", "82nd Academy Awards - Best Visual Effects"]},

  {id: 5, title: "Titanic", year: 1997, rating: 7.8, genres: ["Drama", "Romance",'English'],
   overview: "A young couple from different social classes fall in love aboard the ill-fated RMS Titanic.",
   poster: "https://originalvintagemovieposters.com/wp-content/uploads/2020/02/TITANIC-8567-scaled-1392x2048.jpg",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/titanic/1770001166?search_query=titanic'}],
   director: "James Cameron", music: "James Horner", awards: ["Academy Award for Best Picture", "Academy Award for Best Director", "Academy Award for Best Original Song"]},

  {id: 6, title: "Nayakan", year: 1987, rating: 8.7, genres: ["Crime", "Drama",'Tamil'],
   overview: "The story of a common man who rises to become a powerful don in Mumbai.",
   poster: "https://wallpaperaccess.com/full/9471403.jpg",
   director: "Mani Ratnam",
   ott: [{platform: 'prime', url: 'https://www.primevideo.com/detail/0JP34ZEI5AGC3E02JOPYJF7BGB/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0CN4YC6CQ&qid=1760534881900'},
    {
      platform: 'youtube',url: 'https://youtu.be/OWzCHy1NVgQ?si=1QrvU4wl2XmM-zpK'
    }
   ],
   music: "Ilaiyaraaja", awards: ["National Film Award for Best Actor"]},

  {id: 7, title: "Indian", year: 1996, rating: 7.9, genres: ["Action", "Drama", "Thriller",'Tamil'],
   overview: "A freedom fighter turns vigilante to fight corruption in modern India.",
   poster: "https://a.ltrbxd.com/resized/film-poster/3/1/1/0/4/31104-indian-0-460-0-690-crop.jpg?k=34c9f363cd",
   director: "S. Shankar",
   ott: [
    {platform: 'netflix', url: 'https://www.netflix.com/in/title/27748788'},
    {platform: 'prime', url: 'https://www.primevideo.com/detail/Indian/0R1F284C22TQC92QVHB7OO8G1Y'}
   ],
   music: "A. R. Rahman", awards: ["Filmfare Award for Best Actor – Tamil"]},

  {id: 8, title: "Vishwaroopam", year: 2013, rating: 7.2, genres: ["Action", "Thriller","Tamil"],
   overview: "An Indian spy embarks on a mission to dismantle a terrorist network.",
   poster: "https://cinemachaat.com/wp-content/uploads/2014/01/viswaroopam-poster-2.jpg",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/vishwaroopam/1000035950?search_query=vishwa'}],
   director: "Kamal Haasan", music: "Shankar–Ehsaan–Loy", awards: []},

  {id: 9, title: "Hey Ram", year: 2000, rating: 7.6, genres: ["Drama", "Historical",'Tamil'],
   overview: "The life of a man caught in the historical and personal turmoil during the partition of India.",
   poster: "https://image.tmdb.org/t/p/original/2qnrc2ONhguLX6kTUBeqreWqvh8.jpg",
   director: "Kamal Haasan",
   ott: [{platform: 'prime', url: 'https://www.primevideo.com/detail/0QON24LCVSQU6BLO3XP9EWEQ2K/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08T911HKT&qid=1760535074038'},
    {
      platform: 'youtube',url: 'https://youtu.be/R9YJOuQ6SX8?si=gxe7RcVyIRe6zgsJ'
    }
   ],
   music: "Ilaiyaraaja", awards: []},

  {id: 10, title: "Soorarai Pottru", year: 2020, rating: 8.7, genres: ["Drama", "Biography",'Tamil'],
   overview: "A low-cost airline entrepreneur dreams of making flying accessible to everyone.",
   poster: "https://i.pinimg.com/736x/c6/2d/be/c62dbee4a43451ed9f97223865189631.jpg",
   ott: [
    {platform: 'prime', url: 'https://www.primevideo.com/detail/0RIGXSH2D86B5V2RNHQOZVRGAD/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08L653W16&qid=1760535100003'},
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-soorarai-pottru-tamil-movie-online-a710a50dd1a0be70ce915418111e4a71?watch=true'
    }
   ],
   director: "Sudha Kongara", music: "G. V. Prakash Kumar", awards: ["Best Feature Film", "Best Actor - Suriya", "Best Actress - Aparna Balamurali"]},

  {id: 11, title: "Singam", year: 2010, rating: 7.1, genres: ["Action", "Crime", "Drama","Tamil"],
   overview: "A righteous cop fights corruption and criminals in his town.",
   poster: "https://alchetron.com/cdn/Singam-images-c681f917-6352-4927-8d1c-bbf749904de.jpg",
   ott: [{platform: 'sunnxt', url: 'https://www.sunnxt.com/tamil-movie-singam-2010/detail/8053'}],
   director: "Hari", music: "Devi Sri Prasad", awards: []},

  {id: 12, title: "Vaaranam Aayiram", year: 2008, rating: 8.5, genres: ["Drama", "Romance",'Tamil'],
   overview: "A young man reflects on his father-son relationship and life experiences.",
   poster: "https://static.kinoafisha.info/k/movie_posters/canvas/800x1200/upload/movie_posters/0/3/4/8374430/878711832918.jpg",
   ott: [{platform: 'prime', url: 'https://www.primevideo.com/detail/Vaaranam-Aayiram/0U45RYETB2VDHFN6RFEM7PEBM1'}],
   director: "Gautham Vasudev Menon", music: "Harris Jayaraj", awards: ["National Film Award for Best Feature Film in Tamil"]},

  {id: 13, title: "24", year: 2016, rating: 7.9, genres: ["Sci-Fi", "Thriller", "Action",'Tamil'],
   overview: "A scientist invents a time-traveling watch, which triggers a battle between good and evil.",
   poster: "https://1.bp.blogspot.com/-vxZktfj21OU/VlOm7h9-MYI/AAAAAAAADas/qXXbOoIRAdY/s1600/12278176_901386636563034_485815027_n.jpg",
   ott: [{platform: 'prime', url: 'https://www.primevideo.com/detail/24/0MRWZGKRKKHFUEN3OTNCBL9CSS'}],
   director: "Vikram Kumar", music: "A. R. Rahman", awards: ["64th National Film Awards - Best Cinematography (Tirru)"]},

  {id: 14, title: "Jai Bhim", year: 2021, rating: 8.8, genres: ["Crime", "Drama",'Tamil'],
   overview: "Based on true events, a determined lawyer fights for justice for a marginalized tribal woman whose husband is unlawfully detained.",
   poster: "https://superstarsbio.com/wp-content/uploads/2022/02/Jai-Bhim.jpg",
   ott: [{platform: 'prime', url: 'https://www.primevideo.com/detail/0U2K913JJHBL67WJICAYE0KC2J/ref=atv_sr_fle_c_srce7a38_2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B09JZJ6QGZ&qid=1760535406792'},
    {
      platform: 'mxplayer', url: 'https://www.mxplayer.in/movie/watch-jai-bhim-tamil-movie-online-f4c84df710233f0a911888475f7a9fc2?watch=true'
    }
   ],
   director: "T. J. Gnanavel", music: "Sean Roldan", awards: ["Huading Awards 2022 - Best Global Picture"]},

  {id:15, title: "Avatar: The Way of Water", year: 2022, rating: 7.9, genres: ["Science Fiction", "Action", "Adventure",'English'],
   overview: "Jake Sully and Neytiri must protect their family and the world of Pandora from a renewed human threat.",
   poster: "https://www.lab-1.nl/wp-content/uploads/ztickets/media/1940_pos.jpg",
   director: "James Cameron", music: "Simon Franglen", awards: ["Academy Awards 2023 - Best Visual Effects (Won)"],
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/avatar-the-way-of-water/1260142021?search_query=avatar'}]},  

  {id: 16, title: 'Iron Man', year: 2008, rating: 7.9, genres: ['Action','Superhero','Sci-Fi','English'],
   overview: 'Tony Stark builds an advanced armored suit and becomes Iron Man.',
   poster: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_8608.jpeg',
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/iron-man/1660000038?search_query=iron'}],
   director: 'Jon Favreau', music: 'Ramin Djawadi', awards: ['Saturn Award for Best Science Fiction Film']},

  {id: 17, title: 'Avengers: Endgame', year: 2019, rating: 8.4, genres: ['Action','Adventure','Superhero','English'],
   overview: 'The Avengers assemble for a final battle against Thanos to restore the universe.',
   poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/avengers-endgame/1260013556?search_query=avengers'}],
   director: 'Anthony and Joe Russo', music: 'Alan Silvestri', awards: ['MTV Movie Award for Best Movie', 'Academy Award Nomination for Best Visual Effects']},

  {id:18, title:'Aadujeevitham: The Goat Life', year:2024, rating:7.1, genres:['Gritty', 'Drama', 'Survival','Malayalam'], 
   overview:'An Indian man seeking work follows a job lead to Saudi Arabia, only to find himself forced to labor without pay as a goat herder in the remote desert.', 
   poster:'https://catalog.cinema-api.com/cf/images/ncg-images/075eae55c8df4d01a533d3b00bc9b592.jpg?version=92565E66E17A3D23B8315AE0244D9A97', 
   ott: [{platform: 'netflix', url: 'https://www.netflix.com/in/title/81914031'}],
   director:'Blessy', music:'A.R. Rahman', awards:[]},

  {id:19, title:'O Kadhal Kanmani', year:2015, rating:7.7, genres:['Drama','Romance','Tamil'], 
   overview:'Two young lovers are compatible in every way - they even agree that marriage is futile. However, their emotions are not so easily managed...', 
   poster:'https://images.justwatch.com/poster/86906458/s718/o-kadhal-kanmani.jpg', 
   ott: [
    {platform: 'prime', url: 'https://www.primevideo.com/detail/0H3CJRSLBP9UKLW2MTPQW9DXJR/ref=atv_dl_rdr'},
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/o-kadhal-kanmani/1000172465?search_query=o+ka'}
   ],
   director:'Mani Ratnam', music:'A.R. Rahman', awards:[]},

  {id:20, title:'Manjummel Boys', year:2024, rating:8.2, genres:['Drama','Mystery','Malayalam'], 
   overview:'A group of friends relive their youth in Manjummel, uncovering secrets long buried.', 
   poster:'https://image.tmdb.org/t/p/original/awOxXBZHh3jvFEOLJvTaJOX5urU.jpg', 
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/manjummel-boys/1271305800?search_query=manju'}],
   director:'Anwar Rasheed', music:'Gopi Sundar', awards:[]},

  {id: 21, title: 'Inception', year: 2010, rating: 8.8, genres: ['Action', 'Sci-Fi', 'Thriller','English'],
   overview: 'A skilled thief leads a team into the subconscious to plant an idea into a target’s mind.',
   poster: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
   ott: [
    {platform: 'netflix', url: 'https://www.netflix.com/in/title/70131314'},
    {platform: 'prime', url: 'https://www.primevideo.com/detail/0OY5MW9WUP61HENZJ0E9ONAFGV/ref=atv_dl_rdr'},
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/inception/1971000530'}
   ],
   director: 'Christopher Nolan', music: 'Hans Zimmer', awards: ['Academy Award for Best Cinematography']},

  {id: 22, title: 'Vikram', year: 2022, rating: 8.4, genres: ['Action','Thriller','Tamil'],
   overview: 'A government agent tries to bring down a dangerous criminal syndicate while facing internal threats.',
   poster: 'https://www.kollywoodzone.com/boxoffice/wp-content/uploads/2021/07/Kamal-Haasans-Vikram-Movie-New-Poster-01.jpg',
   ott: [
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/vikram/1260106598'},
    {platform: 'prime', url: 'https://www.primevideo.com/detail/Vikram/0PNL8ZIRHZAGZV12SBXC7ZRNHY'}
   ],
   director: 'Lokesh Kanagaraj', music: 'Anirudh Ravichander', awards: ['Filmfare Award for Best Director – Tamil']},

  {id: 23, title: 'Kaithi', year: 2019, rating: 8.5, genres: ['Action','Thriller','Tamil'],
   overview: 'A recently released prisoner must help the police save hostages while avoiding his past enemies.',
   poster: 'https://assets.voxcinemas.com/posters/P_HO00007463.jpg',
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/kaithi/1260013408'},
        {platform: 'prime', url: 'https://www.primevideo.com/detail/Kaithi/0KGFIHMIXZPVV7YVGFNR1ZCGDX'}
   ],
   director: 'Lokesh Kanagaraj', music: 'Sam C.S.', awards: ['Ananda Vikatan Cinema Award for Best Director']},

  {id: 24, title: 'Ratsasan', year: 2018, rating: 8.1, genres: ['Thriller','Crime','Tamil'],
   overview: 'A police officer hunts a serial killer targeting schoolgirls, uncovering dark secrets.',
   poster: 'https://play-lh.googleusercontent.com/62gNZjKM98uCoSIzwUmQzEGe-0C48a0IXLTEcv7nya53qfxk4kXvC-UPCKCcS0eIIQfLHQlS_GOXb5c3UQ',
   ott: [{platform: 'sunnxt', url: 'https://www.sunnxt.com/tamil-movie-ratsasan-2018/detail/82686'}],
   director: 'Ram Kumar', music: 'Ghibran', awards: ['Filmfare Award for Best Thriller']},

  {id: 25, title: 'Tenet', year: 2020, rating: 7.5, genres: ['Action', 'Sci-Fi', 'Thriller','English'],
   overview: 'An operative manipulates the flow of time to prevent World War III.',
   poster: 'https://images.squarespace-cdn.com/content/v1/5483bceae4b091ba6b198ffb/1600778522815-JE6CISHH2IUX5DZWNNPN/Tenet+Movie+Poster.jpg',
   ott: [
    {platform: 'prime', url: 'https://www.primevideo.com/detail/Tenet/0SXMIJPJ25O9LQBBHV0Y11PV0B'},
    {platform: 'netflix',url: 'https://qr.netflix.com/in/title/81198930'}
   ],
   director: 'Christopher Nolan', music: 'Ludwig Göransson', awards: ['Academy Award for Best Visual Effects']},

  {id: 26, title: 'Black Panther', year: 2018, rating: 7.3, genres: ['Action','Adventure','Superhero','English'],
   overview: 'T’Challa returns to Wakanda to take his place as king and protector, the Black Panther.',
   poster: 'https://image.tmdb.org/t/p/original/fj7sX7w0MfIxWylcizp5ArPIMFs.jpg',
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/black-panther/1660010672?search_query=bla'}],
   director: 'Ryan Coogler', music: 'Ludwig Göransson', awards: ['Academy Award for Best Original Score']},

  {id: 37, title: 'Doctor Strange', year: 2016, rating: 7.5, genres: ['Action','Adventure','Fantasy','English'],
   overview: 'A brilliant neurosurgeon becomes a master of the mystic arts after a career-ending accident.',
   poster: 'https://images.justwatch.com/poster/952680/s718/doctor-strange.jpg',
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/doctor-strange/1260018179?search_query=doctor'}],
   director: 'Scott Derrickson', music: 'Michael Giacchino', awards: ['Academy Award Nomination for Best Visual Effects']},

  {id: 38, title: 'Captain America: Civil War', year: 2016, rating: 7.8, genres: ['Action','Superhero','Adventure','English'],
   overview: 'The Avengers are divided when political oversight leads to conflict between Captain America and Iron Man.',
   poster: 'https://image.tmdb.org/t/p/original/tjX3FRx21emmwA30QwXaU39mHoT.jpg',
   ott: [
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768?search_query=doctor'},
    {platform: 'netflix', url: 'https://www.netflix.com/in/title/80088567'}
   ],
   director: 'Anthony and Joe Russo', music: 'Henry Jackman', awards: ['Teen Choice Award for Choice Movie: Sci-Fi/Fantasy']},

  {id: 39, title: 'Spider-Man: No Way Home', year: 2021, rating: 8.3, genres: ['Action','Superhero','Adventure','English'],
   overview: 'Spider-Man seeks Doctor Strange’s help to make the world forget his identity — but chaos unfolds.',
   poster: 'https://cdna.artstation.com/p/assets/images/images/039/499/638/large/luke-anderson-all-new-spidey-home.jpg?1626101216',
   ott: [
    {platform: 'netflix', url: 'https://www.netflix.com/in/title/81465707'},
    {platform: 'prime', url: 'https://www.primevideo.com/detail/0K2K4N25VGA0GOABHNZ2AXJPF7/ref=atv_dl_rdr'},
    {platform: 'zee5',url: 'https://www.zee5.com/movies/details/spider-man-no-way-home/0-0-1z5129922'}
   ],
   director: 'Jon Watts', music: 'Michael Giacchino', awards: ['Critics Choice Super Award for Best Actor in a Superhero Movie (Tom Holland)']},

  {id: 40, title: 'Spider-Man', year: 2002, rating: 7.4, genres: ['Action','Superhero','Adventure','English'],
   overview: 'After being bitten by a genetically altered spider, Peter Parker gains superpowers and becomes Spider-Man.',
   poster: 'https://image.tmdb.org/t/p/original/ltuwOEAJ4rfGVLdC4YYmCYBVcQV.jpg',
   ott: [{platform: 'netflix', url: 'https://www.netflix.com/in/title/60004481'},
         {platform: 'prime', url: 'https://www.primevideo.com/detail/Spider-Man/0GHWV1ASCU4E2OP3VNOGA6DQ13'}
   ],
   director: 'Sam Raimi', music: 'Danny Elfman', awards: ['Academy Award Nomination for Best Visual Effects']},

  {id: 41, title: 'Spider-Man 2', year: 2004, rating: 7.5, genres: ['Action','Superhero','Adventure','English'],
   overview: 'Peter Parker struggles with his double life as Doctor Octopus emerges as a new villain.',
   poster: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97e4becb-d3b7-4732-8039-af5e062af33c/d80mer7-61ac8790-7574-4078-9738-929c5ca5db09.jpg/v1/fill/w_817,h_978,q_70,strp/spider_man_2_poster__2004__by_predatorx20_d80mer7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjk5NiIsInBhdGgiOiJcL2ZcLzk3ZTRiZWNiLWQzYjctNDczMi04MDM5LWFmNWUwNjJhZjMzY1wvZDgwbWVyNy02MWFjODc5MC03NTc0LTQwNzgtOTczOC05MjljNWNhNWRiMDkuanBnIiwid2lkdGgiOiI8PTI1MDIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EI5VEetvsjKFe2Pb-kw7JCpeZxIGatVfjpeymEcenKk',
   ott: [{platform: 'netflix', url: 'https://www.netflix.com/search?q=Spider-Man%202'}],
   director: 'Sam Raimi', music: 'Danny Elfman', awards: ['Academy Award for Best Visual Effects']},

  {id: 42, title: 'Spider-Man 3', year: 2007, rating: 6.3, genres: ['Action','Superhero','English'],
   overview: 'Peter battles Sandman and Venom while struggling with his darker impulses.',
   poster: 'https://i.pinimg.com/originals/f7/cc/39/f7cc3925de788a9489f069db480926d9.jpg',
   ott: [{platform: 'netflix', url: 'https://www.netflix.com/in/title/60036230'},
        {platform: 'prime',url: 'https://www.primevideo.com/detail/Spider-Man-2/0G54I5E1IM5ONURVVLUSIG3AA5'}
   ],
   director: 'Sam Raimi', music: 'Christopher Young', awards: []},

  {id: 43, title: 'The Amazing Spider-Man', year: 2012, rating: 7.0, genres: ['Action','Superhero','Adventure','English'],
   overview: 'A teenage Peter Parker discovers his father’s secrets while facing the Lizard.',
   poster: 'https://image.tmdb.org/t/p/original/ww2YPsGe6Yd1nUHH6XVvfj4Rrin.jpg',
   ott: [{platform: 'prime', url: 'https://www.primevideo.com/detail/0GYYO7JLQ240CSD018QL5BQW9B/ref=atv_dl_rdr'},
        {platform: 'netflix',url: 'https://www.netflix.com/in/title/70208599'}
   ],
   director: 'Marc Webb', music: 'James Horner', awards: []},

  {id: 44, title: 'The Amazing Spider-Man 2', year: 2014, rating: 6.6, genres: ['Action','Superhero','English'],
   overview: 'Peter Parker faces Electro and his past while learning the cost of heroism.',
   poster: 'https://2.bp.blogspot.com/-FJtpAQmqT38/U3mTZBbtgSI/AAAAAAAAAKA/T6I6oUGbDOc/s1600/The-Amazing-Spider-Man-2-3.png',
   ott: [{platform: 'prime', url: 'https://www.primevideo.com/detail/0QVEI3QDQ62WY436FP7RWIUWM2/ref=atv_dp_amz_c_TS8274d9_1_1?jic=16%7CCgNhbGwSA2FsbA%3D%3D'},
        {platform: 'netflix',url: 'https://www.netflix.com/in/title/70293702'}
   ],
   director: 'Marc Webb', music: 'Hans Zimmer', awards: []},

  {id: 45, title: 'Baahubali: The Beginning', year: 2015, rating: 8.1, genres: ['Action','Drama','Epic','Telugu'],
   overview: 'A young man discovers his royal heritage and begins a journey to reclaim his kingdom.',
   poster: 'https://m.media-amazon.com/images/S/pv-target-images/274431b8945f779acab499a1625c2a3c9ebe1054d112aed3e55cd89c7d2ce41c.jpg',
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/baahubali-the-beginning/1000074338'},
        {platform: 'netflix',url: 'https://www.netflix.com/in/title/80204117'}
   ],
   director: 'S. S. Rajamouli', music: 'M. M. Keeravani', awards: ['National Film Award for Best Feature Film']},

  {id: 46, title: 'Baahubali 2: The Conclusion', year: 2017, rating: 8.2, genres: ['Action','Drama','Epic','Telugu'],
   overview: 'The epic conclusion reveals how Amarendra Baahubali met his end and how Mahendra avenges him.',
   poster: 'https://2.bp.blogspot.com/-irujlnGbI10/WImbPx-s2HI/AAAAAAAAELI/T2W5bPiYcts6SYfUlN-MGDU8jDwCEKLAwCLcB/s1600/bahubali%2B2.jpg',
   ott: [
    {platform: 'netflix', url: 'https://www.netflix.com/in/title/80203996'},
    {platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/baahubali-2-the-conclusion/1770016137?search_query=bahubali'}
   ],
   director: 'S. S. Rajamouli', music: 'M. M. Keeravani', awards: ['National Film Award for Best Popular Film']},

  {id: 47, title: 'RRR', year: 2022, rating: 8.0, genres: ['Action','Drama','Epic','Telugu'],
   overview: 'Two legendary revolutionaries become friends and fight against British colonial rule in India.',
   poster: 'https://www.rogerebert.com/wp-content/uploads/2024/08/RRR-jpeg.webp',
   ott: [
    {platform: 'netflix', url: 'https://www.netflix.com/in/title/81476453'},
    {platform: 'zee5', url: 'https://www.zee5.com/movies/details/rrr/0-0-1z5145092'}
   ],
   director: 'S. S. Rajamouli', music: 'M. M. Keeravani', awards: ['Academy Award for Best Original Song – "Naatu Naatu"']},

  {id: 48, title: "Maharaja", year: 2024, rating: 7.9, genres: ["Action", "Thriller", "Drama",'Tamil'],
   overview: "A barber's home is robbed, and he tells the police that his 'Lakshmi' has been taken, leading to a desperate and mysterious search.",
   poster: "https://tse1.mm.bing.net/th/id/OIP.BRBGCX2_qmE42UlJNfNfXQAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
   ott: [{platform: 'netflix', url: 'https://www.netflix.com/in/title/81690671'}],
   director: "Nithilan Saminathan", music: "B. Ajaneesh Loknath", awards: []},

  {id: 49, title: "Vidaamuyarchi", year: 2025, rating: null, genres: ["Action", "Thriller",'Tamil'],
   overview: "Plot details are under wraps for this upcoming action thriller.",
   poster: "https://tse4.mm.bing.net/th/id/OIP.l8bE8AWGqq8YLaNFFJuc1AHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
   ott: [{platform: 'netflix', url: 'https://www.netflix.com/in/title/81644287'}],
   director: "Magizh Thirumeni", music: "Anirudh Ravichander", awards: []},

  {id: 50, title: "Thadam", year: 2019, rating: 8.2, genres: ["Action", "Crime", "Thriller",'Tamil'],
   overview: "The murder of a young man becomes a puzzle for the police when they discover that the prime suspect has a look-alike.",
   poster: "https://image.tmdb.org/t/p/original/mR1Rf4ZaE4iDbvYKwZsvmg2mrBN.jpg",
   ott: [{platform: 'sunnxt', url: 'https://www.sunnxt.com/tamil-movie-thadam-2019/detail/78918'}],
   director: "Magizh Thirumeni", music: "Arun Raj", awards: []},

  {id: 51, title: "Enthiran", year: 2010, rating: 7.1, genres: ["Action", "Sci-Fi",'Tamil'],
   overview: "A brilliant scientist creates a sophisticated android robot in his own image. The project backfires when the robot is manipulated to cause destruction.",
   poster: "https://www.themoviedb.org/t/p/original/jBk1mHtz4BfpHpro83QWmFyAiPt.jpg",
   ott: [
    {platform: 'sunnxt', url: 'https://www.sunnxt.com/tamil-movie-enthiran-4k-2010/detail/165835'},
    {platform: 'prime', url: 'https://www.primevideo.com/detail/Enthiran-English-Subtitled/0U43X401IFRCQWA3PSX31XRTMH'}
   ],
   director: "S. Shankar", music: "A. R. Rahman", awards: ["National Film Award for Best Special Effects"]},

  {id: 52, title: "Thudarum", year: 2025, rating: 7.6, genres: ["Action", "Thriller", "Drama", "Malayalam"],
   overview: "A former stuntman who now works as a taxi driver finds his life taking a dark turn when his beloved vintage Ambassador car is seized by the cops...",
   poster: "https://image.tmdb.org/t/p/original/misQxDPKVaQLnVY154eDwhdKIKI.jpg",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/thudarum/1271421425'}],
   director: "Tharun Moorthy", music: "Jakes Bejoy", awards: []},

  {id: 53, title: "Hridayapoorvam", year: 2025, rating: 6.7, genres: ["Romantic", "Comedy", "Drama", "Malayalam"],
   overview: "A heart-transplant survivor attends his donor's daughter's engagement to express gratitude, but a twist of fate intertwines him with the family...",
   poster: "https://imgengine.khaleejtimes.com/khaleejtimes-english/2025-08-28/6qxrh61w/MV5BYzU2OGFkYTctZmVlZi00YmRlLWEyMjUtZDA1MjFkMDAzYjg4XkEyXkFqcGc.V1.jpg?width=1200&height=800&format=auto",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/hridayapoorvam/1271449668'}],
   director: "Sathyan Anthikad", music: "Justin Prabhakaran", awards: []},

  {id: 54, title: "Padakkalam", year: 2025, rating: 7.2, genres: ["Comedy", "Fantasy", "Malayalam"],
   overview: "Four college boys discover their quirky professor owns a magical dice board with unpredictable powers, leading to chaotic adventures...",
   poster: "https://indianexpress.com/wp-content/uploads/2025/05/Padakkalam-movie-review-2.jpg?resize=324",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/padakkalam/1271423190'}],
   director: "Manu Swaraj", music: "Rajesh Murugesan", awards: []},

  {id: 55, title: "The Avengers", year: 2012, rating: 8.0, genres: ["Action", "Sci-Fi", "Adventure", "Superhero",'English'],
   overview: "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity.",
   poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015?search_query=avengers'}],
   director: "Joss Whedon", music: "Alan Silvestri", awards: ["Nominated for Academy Award for Best Visual Effects"]},

  {id: 56, title: "Avengers: Age of Ultron", year: 2015, rating: 7.3, genres: ["Action", "Sci-Fi", "Adventure", "Superhero",'English'],
   overview: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong...",
   poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/marvels-avengers-age-of-ultron/1260018315?search_query=avengers+age'}],
   director: "Joss Whedon", music: "Brian Tyler", awards: []},

  {id: 57, title: "Avengers: Infinity War", year: 2018, rating: 8.4, genres: ["Action", "Sci-Fi", "Adventure", "Superhero",'English'],
   overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation...",
   poster: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
   ott: [{platform: 'jiohotstar', url: 'https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677?search_query=avengers+age'}],
   director: "Anthony Russo, Joe Russo", music: "Alan Silvestri", awards: ["Nominated for Academy Award for Best Visual Effects"]},

   {
    id: 58,
    title: "Drishyam",
    year: 2013,
    rating: 8.3,
    genres: ["Crime", "Drama", "Thriller", "Malayalam"],
    overview: "A man goes to extreme lengths to save his family from the law after they commit an unexpected crime.",
    poster: "https://m.media-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg",
    ott: [
      {
        platform: "jiohotstar",
        url: "https://www.hotstar.com/in/movies/drishyam/1000051783"
      }
    ],
    director: "Jeethu Joseph",
    music: "Anil Johnson, Vinu Thomas",
    awards: ["Kerala State Film Award for Best Popular Film"]
  },
  {
    id: 59,
    title: "Drishyam 2",
    year: 2021,
    rating: 8.6,
    genres: ["Crime", "Drama", "Thriller", "Malayalam"],
    overview: "Georgekutty’s life once again comes under scrutiny as new evidence threatens to expose the truth about the past.",
    poster: "https://images.justwatch.com/poster/242184394/s718/drishyam-2.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0PI0IFOE2K9DGDC2N6YOLYBX4O/ref=atv_dl_rdr"
      },
      {
        platform: 'mxplayer',
        url: 'https://www.mxplayer.in/movie/watch-drishyam-2-movie-online-69d33a31c9de8a3dbe409b10da4c499c?watch=true'
      }
    ],
    director: "Jeethu Joseph",
    music: "Anil Johnson",
    awards: ["Kerala State Film Award for Best Film with Popular Appeal"]
  },
  {
    id: 60,
    title: "Lucifer",
    year: 2019,
    rating: 7.5,
    genres: ["Action", "Thriller", "Political", "Malayalam"],
    overview: "When the leader of a ruling party dies, a power struggle ensues, with the mysterious Stephen Nedumpally rising to prominence.",
    poster: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/217923/LUCIFER-poster-01-ZEE-copy.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0JXMDYYYTFZLORFDB7TXW6YEPP/ref=atv_dl_rdr"
      }
    ],
    director: "Prithviraj Sukumaran",
    music: "Deepak Dev",
    awards: ["Kerala Film Critics Award for Best Popular Film"]
  },
  {
    id: 61,
    title: "Empuraan",
    year: 2025,
    rating: null,
    genres: ["Action", "Thriller", "Malayalam"],
    overview: "The much-awaited sequel to Lucifer, exploring Stephen Nedumpally’s mysterious past and rise to power.",
    poster: "https://assetscdn1.paytm.com/images/cinema/Empuraan-42a7b480-1f26-11ef-a3d5-c9449a5ad550.jpg?format=webp",
    ott: [{platform: 'jiohotstar',url: 'https://www.hotstar.com/in/movies/l2-empuraan/1271409284'}],
    director: "Prithviraj Sukumaran",
    music: "Deepak Dev",
    awards: []
  },

  {
    id: 62,
    title: "Coolie",
    year: 2025,
    rating: 6.1,
    genres: ["Action", "Drama", "Tamil"],
    overview:
      "Deva, once living a quiet life, is shaken when his close friend dies under suspicious circumstances. Determined to uncover the truth, he infiltrates a powerful gang operating in the shadows.",
    poster: "https://www.wallsnapy.com/img_gallery/coolie-movie-rajini--poster-4k-download-9445507.jpg",
    ott: [{platform: 'prime',url: 'https://www.primevideo.com/detail/Coolie/0NW5YC00YCE9TB4OZSAAJA3ZBU'}],
    director: "Lokesh Kanagaraj",
    music: "Anirudh Ravichander",
    awards: []
  },
  {
    id: 63,
    title: "Jailer",
    year: 2023,
    rating: 7.7,
    genres: ["Action", "Thriller", "Tamil"],
    overview:
      "A retired jailer sets out to find his missing son, leading to a deadly confrontation with a powerful smuggling gang.",
    poster: "https://static.toiimg.com/photo/msid-102602413/102602413.jpg?963075",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0STFO0E97XRJ8WFI3RZLCPGSHZ/ref=atv_dl_rdr"
      },
      {
        platform: 'mxplayer',
        url: 'https://www.mxplayer.in/movie/watch-jailer-movie-online-cc1f9610b1cc638cf9b60f305ee1b4d6?watch=true'
      }
    ],
    director: "Nelson Dilipkumar",
    music: "Anirudh Ravichander",
    awards: ["SIIMA Award for Best Actor (Rajinikanth)"]
  },
  {
    id: 64,
    title: "Retro",
    year: 2025,
    rating: 6.6,
    genres: ["Romance", "Drama", "Tamil","Action"],
    overview:
      "A nostalgic romantic drama starring Suriya, exploring love and loss through the lens of time.",
    poster: "https://static.moviecrow.com/gallery/20241226/239363-Retro.jpg",
    ott: [{platform: 'netflix',url: 'https://www.netflix.com/in/title/81902059'}],
    director: "Karthik Subbaraj",
    music: "Santhosh Narayanan",
    awards: []
  },
  {
    id: 65,
    title: "Guruvayoor Ambalanadayil",
    year: 2024,
    rating: 8.0,
    genres: ["Comedy", "Drama", "Malayalam"],
    overview:
      "A hilarious chain of events unfolds when two men are brought together for a wedding at the famous Guruvayoor temple.",
    poster: "https://static.moviecrow.com/gallery/20240118/224817-Guru.jpeg",
    ott: [
      {
        platform: "jiootstar",
        url: "https://www.hotstar.com/in/movies/guruvayoor-ambalanadayil/1271320667?search_query=guruvayoor+ambala+nadayil"
      }
    ],
    director: "Vipin Das",
    music: "Ankit Menon",
    awards: []
  },
  {
    id: 66,
    title: "Premalu",
    year: 2024,
    rating: 8.3,
    genres: ["Romance", "Comedy", "Malayalam"],
    overview:
      "A charming love story set in Hyderabad, following the funny and emotional journey of Sachin and Reenu.",
    poster: "https://muvitimes.com/data/upload/movies/2024/rea.premalu-malayalam.jpg",
    ott: [
      {
        platform: "jiohotstar",
        url: "https://www.hotstar.com/in/movies/premalu/1271295279?search_query=premalu"
      }
    ],
    director: "Girish A. D.",
    music: "Vishnu Vijay",
    awards: ["SIIMA Award for Best Film (Malayalam)"]
  },
  {
    id: 67,
    title: "KGF: Chapter 1",
    year: 2018,
    rating: 8.2,
    genres: ["Action", "Drama", "Kannada"],
    overview:
      "A young man rises from poverty to become a powerful underworld leader in the gold mines of Kolar.",
    poster: "https://wallpapercave.com/wp/wp4019387.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0HQ5F0UT0A0MWDAJ7AAXVKBNT0/ref=atv_sr_fle_c_srce7a38_3_1_3?sr=1-3&pageTypeIdSource=ASIN&pageTypeId=B0DBC34J49&qid=1760540063289"
      }
    ],
    director: "Prashanth Neel",
    music: "Ravi Basrur",
    awards: ["National Film Award for Best Special Effects"]
  },
  {
    id: 68,
    title: "KGF: Chapter 2",
    year: 2022,
    rating: 8.3,
    genres: ["Action", "Drama", "Kannada"],
    overview:
      "Rocky Bhai continues his reign over Kolar Gold Fields, facing powerful enemies and his dark destiny.",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0TAARXHU6YZR574455ZKCKYSOC/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09DMDZJN1&qid=1760540023833"
      }
    ],
    director: "Prashanth Neel",
    music: "Ravi Basrur",
    awards: ["SIIMA Award for Best Film (Kannada)"]
  },

  {
    id: 69,
    title: "Kalki 2898 AD",
    year: 2024,
    rating: 8.0,
    genres: ["Action", "Sci-Fi", "Fantasy", "Telugu"],
    overview:
      "Set in a dystopian future, the film follows Bhairava and the rise of Kalki, the final avatar of Lord Vishnu, in a battle against darkness.",
    poster: "https://www.cinejosh.com/newsimg/newsmainimg/kalki-2898-ad-releasing-in-two-parts_b_2205240228.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0KQU5V0T0FGF8L5L368NKW6INT/ref=atv_dp_amz_c_TS8274d9_1_15?jic=16%7CCgNhbGwSA2FsbA%3D%3D"
      }
    ],
    director: "Nag Ashwin",
    music: "Santhosh Narayanan",
    awards: ["One of the highest-grossing Indian films of 2024"]
  },

  {
    id: 70,
    title: "Kantara",
    year: 2022,
    rating: 8.4,
    genres: ["Action", "Drama", "Mystery", "Kannada"],
    overview:
      "A village's faith and traditions are put to the test when greed and ego clash with divine forces in the forest of Kaadubettu.",
    poster: "https://m.media-amazon.com/images/M/MV5BY2VkZjk5ZjMtM2ExOS00ZDA1LTg1ZDEtYTliNGZiYTc4ZWZiXkEyXkFqcGc@._V1_.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0L2CP3W1JZB3EE2KRZYSOXF221/ref=atv_dl_rdr"
      }
    ],
    director: "Rishab Shetty",
    music: "B. Ajaneesh Loknath",
    awards: ["National Film Award for Best Popular Film Providing Wholesome Entertainment"]
  },
  {
    id: 71,
    title: "Kanguva",
    year: 2025,
    rating: 4.5,
    genres: ["Action", "Fantasy", "Historical", "Tamil"],
    overview:
      "A fantasy epic starring Suriya that spans across centuries, blending mythology and modern warfare.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjgyMGE3ODEtOWQyMi00ODM1LTkyZDItMGE4ZDVjZjBhYWZhXkEyXkFqcGc@._V1_.jpg",
    ott: [{platform: 'prime',url:'https://www.primevideo.com/detail/0OEV95ZHY3SDZ4IFLDZU57FWF4/ref=atv_dl_rdr'}],
    director: "Siva",
    music: "Devi Sri Prasad",
    awards: []
  },
  {
    id: 72,
    title: "Kubera",
    year: 2025,
    rating: 6.4,
    genres: ["Action", "Thriller", "Telugu"],
    overview:
      "A mythological action-drama starring Dhanush and Nagarjuna, rumored to explore greed, power, and divine justice.",
    poster: "https://m.media-amazon.com/images/M/MV5BMDI4ZTFkYWItYjI1Yy00Yzk0LTkxNjUtZGE0ZGVkMjdlYTRkXkEyXkFqcGc@._V1_.jpg",
    ott: [{platform: 'prime',url:'https://www.primevideo.com/detail/0H4F08S9TX79QMGPKI09RXMYXP/ref=atv_dl_rdr'}],
    director: "Sekhar Kammula",
    music: "Devi Sri Prasad",
    awards: []
  },

  {
    id: 73,
    title: "Sandesham",
    year: 1991,
    rating: 8.7,
    genres: ["Comedy", "Political", "Drama", "Malayalam"],
    overview:
      "A political satire portraying two brothers' contrasting ideologies, reflecting Kerala's political landscape with humor and wit.",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Sandhesam_film_poster.jpg/220px-Sandhesam_film_poster.jpg",
    ott: [
      {
        platform: "jiohotstar",
        url: "https://www.hotstar.com/in/movies/sandhesam/1000159326?search_query=sandhesam"
      },
      {
        platform: "youtube",
        url: "https://youtu.be/iAb1SgB1hwg?si=mwTtXPO6BU2_mbBt"
      }
    ],
    director: "Sathyan Anthikad",
    music: "Johnson",
    awards: ["Kerala State Film Award for Best Screenplay"]
  },
  {
    id: 74,
    title: "#Home",
    year: 2021,
    rating: 8.8,
    genres: ["Drama", "Family", "Malayalam"],
    overview:
      "A heartwarming tale of a technologically challenged father trying to reconnect with his son in the digital era.",
    poster: "https://m.media-amazon.com/images/M/MV5BNWU1ZmNlYTctYmY1My00ZDlmLTk3M2EtZDcxY2E1ZGU0N2YzXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/Home/0LKNDFHD40G5FDHNHF7HTD3RVI"
      }
    ],
    director: "Rojin Thomas",
    music: "Rahul Subrahmanian",
    awards: ["Kerala State Film Award for Best Film"]
  },
  {
    id: 75,
    title: "Kumbalangi Nights",
    year: 2019,
    rating: 8.6,
    genres: ["Drama", "Family", "Malayalam"],
    overview:
      "Four brothers living in a dysfunctional home in Kumbalangi find redemption and love in unexpected ways.",
    poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c30a8e09f3e8f4e10abca2c16298eae15f22b200ec1ff5b7c24b340b31ea483d._RI_V_TTW_.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0HBV5G7X1PJ16OYMD66SJO0AVC/ref=atv_dl_rdr"
      },
      {
        platform: 'youtube',
        url: 'https://youtu.be/bNyKd0PUx04?si=384fHF2fIRssUoaP'
      }
    ],
    director: "Madhu C. Narayanan",
    music: "Sushin Shyam",
    awards: ["Kerala State Film Award for Best Art Direction"]
  },
  {
    id: 76,
    title: "Devasuram",
    year: 1993,
    rating: 8.5,
    genres: ["Action", "Drama", "Malayalam"],
    overview:
      "An arrogant feudal lord's life changes after a series of events that lead him to rediscover humanity and love.",
    poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9bc25e304d25b76d15bd9d150c8ba903be07e28e58604c9c84c8851849a756bb._V_SX600_.jpg",
    ott: [
      {
        platform: "youtube",
        url: "https://youtu.be/F7Tkih49SGw?si=EmgdrxWyq6iaE603"
      },
      {
        platform: 'prime',
        url: 'https://www.primevideo.com/detail/Devasuram/0TAE3ZGHKRN8GHQKUEGGLDZAEH'
      }
    ],
    director: "I. V. Sasi",
    music: "M. G. Radhakrishnan",
    awards: ["Cult classic status in Malayalam cinema"]
  },

  {
    id: 77,
    title: "Spadikam",
    year: 1995,
    rating: 8.7,
    genres: ["Action", "Drama", "Malayalam"],
    overview:
      "A rebellious son and his strict father clash over values and pride, leading to a timeless emotional drama.",
    poster: "https://www.filmibeat.com/img/2023/02/329003302-1205967960052003-462156526457637028-n1-1676114806.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/Spadikam/0SGKUL7ESF05D04LC6E5KOVGNG"
      },
      {
        platform: 'youtube',
        url: 'https://youtu.be/349z-tk5RUM?si=T8BRMMTy4nHfglgm'
      }
    ],
    director: "Bhadran",
    music: "S. P. Venkatesh",
    awards: ["Kerala State Film Award for Best Actor (Mohanlal)"]
  },
  {
    id: 78,
    title: "Kilukkam",
    year: 1991,
    rating: 8.6,
    genres: ["Comedy", "Drama", "Romance", "Malayalam"],
    overview:
      "A carefree tourist guide’s life turns upside down when a mentally challenged girl enters his world, leading to hilarious chaos.",
    poster: "https://images.static-bluray.com/products/20/95977_1_large.jpg",
    ott: [
      {
        platform: "jiohotstar",
        url: "https://www.hotstar.com/in/movies/kilukkam/1000036258"
      },
      {
        platform: 'youtube',
        url: 'https://youtu.be/mo4XpjEx__s?si=cnWAZQujhxqyI1R4'
      }
    ],
    director: "Priyadarshan",
    music: "S. P. Venkatesh",
    awards: ["Kerala State Film Award for Best Popular Film"]
  },
  {
    id: 79,
    title: "Premam",
    year: 2015,
    rating: 8.3,
    genres: ["Romance", "Drama", "Coming-of-Age", "Malayalam"],
    overview:
      "The story of George, whose life and love evolve through three different phases of his youth.",
    poster: "https://cdn.moviefone.com/image-assets/341895/wfMgsfDrtouYOM6MbrkHtU96Xij.jpg?d=360x540&q=60",
    ott: [
      {
        platform: "jiohotstar",
        url: "https://www.hotstar.com/in/movies/premam/1000091195?search_query=premam"
      },
      {
        platform: 'youtube',
        url: 'https://youtu.be/SxuYhcFt-tk?si=ag6wwQ3DCuKLeSl4'
      }
    ],
    director: "Alphonse Puthren",
    music: "Rajesh Murugesan",
    awards: ["Kerala State Film Award for Most Popular Film"]
  },

  {
    id: 77,
    title: "Aavesham",
    year: 2024,
    rating: 8.6,
    genres: ["Action", "Comedy", "Malayalam"],
    overview:
      "Three engineering students in Bengaluru encounter a quirky gangster named Ranga, whose larger-than-life personality changes their lives in unexpected ways.",
    poster: "https://static.moviecrow.com/gallery/20240223/226542-aavesham.jpg",
    ott: [
      {
        platform: "prime",
        url: "https://www.primevideo.com/detail/0GJ790Y5AGTQU6J8OZR8KG4TOH/ref=atv_dl_rdr"
      }
    ],
    director: "Jithu Madhavan",
    music: "Sushin Shyam",
    awards: ["SIIMA Award for Best Actor (Fahadh Faasil)"]
  },
  {
    id: 78,
    title: "Minnal Murali",
    year: 2021,
    rating: 7.9,
    genres: ["Action", "Superhero", "Comedy", "Malayalam"],
    overview:
      "A tailor gains superpowers after being struck by lightning, leading to a showdown between good and evil in his small village.",
    poster: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8f8034128071657.614e93d8a5e2f.jpg",
    ott: [
      {
        platform: "netflix",
        url: "https://www.netflix.com/in/title/81497215"
      }
    ],
    director: "Basil Joseph",
    music: "Sushin Shyam",
    awards: ["Kerala State Film Award for Best Popular Film"]
  },
  {
    id: 79,
    title: "2018",
    year: 2023,
    rating: 8.7,
    genres: ["Drama", "Disaster", "Thriller", "Malayalam"],
    overview:
      "Based on the Kerala floods of 2018, the film portrays the courage, unity, and resilience of people who fought against nature’s fury.",
    poster: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ea482e170994769.646730002a263.jpg",
    ott: [
      {
        platform: "sonyliv",
        url: "https://www.sonyliv.com/movies/2018-everyone-is-a-hero-malayalam-1500004775"
      }
    ],
    director: "Jude Anthany Joseph",
    music: "Nobin Paul",
    awards: [
      "National Film Award for Best Feature Film (2024)",
      "Kerala State Film Award for Best Film"
    ]
  },

  {
  id: 80,
  title: "Ajayante Randam Moshanam (ARM)",
  year: 2024,
  rating: 7.1,
  genres: ["Action", "Adventure", "Fantasy", "Malayalam"],
  overview:
    "Set across three different timelines — 1900, 1950, and 1990 — the story follows the reincarnations of Ajayan as he fights against oppression, injustice, and evil in each era.",
  poster: "https://indianexpress.com/wp-content/uploads/2024/09/Ajayante-Randam-Moshanam-movie-review-12092024-2.jpg",
  ott: [{
    platform: 'jiohotstar',
    url: 'https://www.hotstar.com/in/movies/a-r-m/1271337988?search_query=arm'
  }],
  director: "Jithin Laal",
  music: "Dhibu Ninan Thomas",
  awards: []
},
 
 {
  id: 81,
  title: "Charlie",
  year: 2015,
  rating: 8.0,
  genres: ["Drama", "Romance", "Adventure", "Malayalam"],
  overview:
    "A young woman sets out in search of a free-spirited artist named Charlie after discovering his diary, embarking on a journey of self-discovery and wonder.",
  poster: "https://m.media-amazon.com/images/M/MV5BNzdkNTNjNjQtNWZmYi00NjRjLThkZDctMmJmOWFjNjZhOWY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  ott: [
    {
      platform: "sunnxt",
      url: "https://www.sunnxt.com/malayalam-movie-charlie-2015/detail/59741"
    }
  ],
  director: "Martin Prakkat",
  music: "Gopi Sundar",
  awards: [
    "Kerala State Film Award for Best Actor (Dulquer Salmaan)",
    "Kerala State Film Award for Best Director"
  ]
},
{
  id: 82,
  title: "Bramayugam",
  year: 2024,
  rating: 8.1,
  genres: ["Horror", "Mystery", "Fantasy", "Malayalam"],
  overview:
    "Set in the dark ages, a folk singer seeks shelter in a mysterious mansion ruled by a sinister old man, uncovering a terrifying truth beyond imagination.",
  poster: "https://static.tvtropes.org/pmwiki/pub/images/bramayugam_official_poster.jpg",
  ott: [
    {
      platform: "sonyliv",
      url: "https://www.sonyliv.com/movies/bramayugam-malayalam-1500005591"
    }
  ],
  director: "Rahul Sadasivan",
  music: "Christo Xavier",
  awards: ["Critical acclaim for Mammootty’s performance and cinematography"]
},
{
  id: 83,
  title: "Turbo",
  year: 2024,
  rating: 7.1,
  genres: ["Action", "Comedy", "Malayalam"],
  overview:
    "Turbo Jose, a good-hearted mechanic from Idukki, gets entangled in a political conspiracy when he moves to Chennai to help a friend.",
  poster: "https://static.toiimg.com/photo/msid-104739879/104739879.jpg?486346",
  ott: [
    {
      platform: "sonyliv",
      url: "https://www.sonyliv.com/movies/turbo-malayalam-1500006024"
    }
  ],
  director: "Vysakh",
  music: "Christo Xavier",
  awards: []
},

{
  id: 84,
  title: "Bombay",
  year: 1995,
  rating: 8.6,
  genres: ["Drama", "Romance", "Musical", "Tamil"],
  overview:
    "A Hindu man and a Muslim woman fall in love and marry against their families’ wishes, only to find their relationship tested during the Bombay riots.",
  poster: "https://popcornreviewss.com/wp-content/uploads/2021/05/Bombay-1995-Romance-Movie-Review.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Bombay/0S7XN7YHV1MJAGN0VHNC7IBUG1"
    }
    
  ],
  director: "Mani Ratnam",
  music: "A. R. Rahman",
  awards: [
    "National Film Award for Best Film on National Integration",
    "Filmfare Award for Best Music Director – Tamil"
  ]
},
{
  id: 85,
  title: "Roja",
  year: 1992,
  rating: 8.1,
  genres: ["Drama", "Romance", "Thriller", "Tamil"],
  overview:
    "A village girl’s husband, a cryptologist, is kidnapped by militants in Kashmir, leading her to fight against bureaucracy to save him.",
  poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202204/Roja-poster_1650050961.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Roja/0LVLHTLLGL427TG2IIL28ZI24R"
    },
    {
      platform: 'netflix',
      url: 'https://www.netflix.com/in/title/19759334?source=35'
    },
    {
      platform: 'youtube',
      url: 'https://youtu.be/4CalzhPq75I?si=uvAAiqMBpx2OjZZw'
    }
  ],
  director: "Mani Ratnam",
  music: "A. R. Rahman",
  awards: [
    "National Film Award for Best Music Direction",
    "National Film Award for Best Lyrics"
  ]
},
{
  id: 86,
  title: "Thalapathi",
  year: 1991,
  rating: 8.6,
  genres: ["Action", "Drama", "Crime", "Tamil"],
  overview:
    "A loyal enforcer to a local don discovers that his long-lost mother’s son — his brother — is now a district collector trying to stop him.",
  poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a8c0c6121426763.60c5e43eaaace.jpg",
  ott: [
    {
      platform: "youtube",
      url: "https://youtu.be/2vpU5hXY51M?si=LrMkhLkJw3bGY_-Y"
    }
  ],
  director: "Mani Ratnam",
  music: "Ilaiyaraaja",
  awards: ["Filmfare Award for Best Director – Tamil"]
},
{
  id: 87,
  title: "Nanban",
  year: 2012,
  rating: 7.9,
  genres: ["Comedy", "Drama", "Tamil"],
  overview:
    "Three engineering students’ friendship and life lessons come to light as they reunite years after college in search of their missing friend.",
  poster: "https://1.bp.blogspot.com/-vyhxeLsYudM/TxL1XRlndGI/AAAAAAAAAJo/ttBRm4Z0_hs/s1600/nanban-latest-posters-4.jpg",
  ott: [
    {
      platform: "jiohotstar",
      url: "https://www.hotstar.com/in/movies/nanban/1000036211?search_query=nanban"
    },
    {
      platform: 'youtube',
      url: 'https://youtu.be/lJKkehsLFf8?si=bnfbccUhYVkmFGeJ'
    }
  ],
  director: "Shankar",
  music: "Harris Jayaraj",
  awards: ["Vijay Award for Favourite Director – Shankar"]
},
{
  id: 88,
  title: "Anniyan",
  year: 2005,
  rating: 8.2,
  genres: ["Action", "Thriller", "Psychological", "Tamil"],
  overview:
    "A lawyer with multiple personality disorder transforms into a vigilante named 'Anniyan' to punish corruption and injustice in society.",
  poster: "https://miro.medium.com/v2/resize:fit:960/1*ADM8SS0TanRo_jALR-69CQ.jpeg",
  ott: [
    {
      platform: "sunnxt",
      url: "https://www.sunnxt.com/tamil-movie-anniyan-2005/detail/8833"
    },
    {
      platform: 'prime',
      url: 'https://www.primevideo.com/detail/Anniyan/0SI2FBSJM67OBQXYGNE5O0394K'
    }
  ],
  director: "Shankar",
  music: "Harris Jayaraj",
  awards: ["Filmfare Award for Best Film – Tamil"]
},
{
  id: 89,
  title: "Paiyaa",
  year: 2010,
  rating: 7.1,
  genres: ["Action", "Romance", "Drama", "Tamil"],
  overview:
    "A carefree young man’s road trip turns into an adventure when he helps a woman escape from goons, finding love along the way.",
  poster: "https://i.pinimg.com/736x/b8/1d/b3/b81db3b29fcffee2adeed7a3d9f3cf08.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Paiyaa/0HSX3XT4QAJ55279R45PZOCPFT"
    },
    {
      platform: 'youtube',
      url: 'https://youtu.be/gzHFJ6CxN2c?si=0yeHep9dyUSB44ri'
    }
  ],
  director: "N. Lingusamy",
  music: "Yuvan Shankar Raja",
  awards: ["Filmfare Award for Best Female Playback Singer – Tamil"]
},

{
  id: 90,
  title: "Anbe Sivam",
  year: 2003,
  rating: 8.7,
  genres: ["Drama", "Comedy", "Philosophy", "Tamil"],
  overview:
    "Two strangers, a cynical ad filmmaker and a kind-hearted communist, embark on a journey that transforms their outlook on life and humanity.",
  poster: "https://wallpaperaccess.com/full/4343831.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0J81AMOV5D78YASHB6E75EUNNB/ref=atv_dl_rdr"
    },
    {
      platform: 'netflix',
      url: 'https://www.netflix.com/in/title/70076024'
    }
  ],
  director: "Sundar C.",
  music: "Vidyasagar",
  awards: [
    "Tamil Nadu State Film Award for Best Film",
    "Cult classic status in Tamil cinema"
  ]
},
{
  id: 91,
  title: "Dasavatharam",
  year: 2008,
  rating: 7.9,
  genres: ["Action", "Sci-Fi", "Thriller", "Tamil"],
  overview:
    "A scientist races against time to stop a deadly bioweapon while portraying ten distinct roles spanning centuries and faiths.",
  poster: "https://images.justwatch.com/poster/138682577/s718/dasavatharam.%7Bformat%7D",
  ott: [
    {
      platform: "youtube",
      url: "https://youtu.be/XcKPCB9vDjI?si=BXvkX5ejb6UrtHaP"
    }
  ],
  director: "K. S. Ravikumar",
  music: "Himesh Reshammiya",
  awards: ["Tamil Nadu State Film Award for Best Actor – Kamal Haasan"]
},
{
  id: 92,
  title: "Virumandi",
  year: 2004,
  rating: 8.5,
  genres: ["Action", "Drama", "Crime", "Tamil"],
  overview:
    "A documentary filmmaker interviews a death-row inmate, revealing the harsh realities of village feuds, justice, and redemption.",
  poster: "https://images.plex.tv/photo?size=large-480&scale=2&url=https:%2F%2Fmetadata-static.plex.tv%2F0%2Fgracenote%2F0e172f6c498c3e8b87e601f87b36c4e7.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0IIISZ9GJ0XQ718NNWIRPRCTE7/ref=atv_dl_rdr"
    }
  ],
  director: "Kamal Haasan",
  music: "Ilaiyaraaja",
  awards: ["Tamil Nadu State Film Award for Best Actor – Kamal Haasan"]
},
{
  id: 93,
  title: "Aalavandhan",
  year: 2001,
  rating: 7.2,
  genres: ["Action", "Psychological Thriller", "Tamil"],
  overview:
    "A decorated army officer must confront his deranged twin brother who escapes from an asylum, leading to a dark psychological battle.",
  poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aalavandaan-et00378032-1702007094.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0QW5WMZ3KVE3D1GPIPQTPRGPJ7/ref=atv_dl_rdr"
    },
    {
      platform: 'youtube',
      url: 'https://youtu.be/QKqF3epzaFg?si=X0lhiXguY1qpi3cC'
    }
  ],
  director: "Suresh Krissna",
  music: "Shankar–Ehsaan–Loy",
  awards: ["Noted for pioneering motion-capture and animation in Indian cinema"]
},
{
  id: 94,
  title: "Michael Madana Kama Rajan",
  year: 1990,
  rating: 8.9,
  genres: ["Comedy", "Drama", "Tamil"],
  overview:
    "Four identical quadruplets separated at birth cross paths years later, leading to hilarious chaos, confusion, and comedy gold.",
  poster: "https://image.tmdb.org/t/p/original/3TzfpFmdTuwRczVmJzB3P9xsHGD.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0TACSYRMXAL7JBSU6UBHNC6NIQ/ref=atv_dl_rdr"
    },
    {
      platform: 'youtube',
      url: 'https://youtu.be/RPqXHKBrnA8?si=a1ehTkbXV-z1CFfC'
    },
    {
      platform: 'aha',
      url: 'https://www.aha.video/movie/michael-madana-kama-rajan'
    }
  ],
  director: "Singeetam Srinivasa Rao",
  music: "Ilaiyaraaja",
  awards: ["Cult comedy classic; acclaimed for Kamal Haasan’s multiple roles"]
},

{
  id: 95,
  title: "Guna",
  year: 1991,
  rating: 8.6,
  genres: ["Drama", "Romance", "Psychological", "Tamil"],
  overview:
    "A mentally unstable man, obsessed with the idea of a divine love, kidnaps a woman believing she is his destined 'Abhirami'. Their fates intertwine in a tale of passion and tragedy.",
  poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8cfb060098abf177e9d937c370e23ea29081db5f930ea5ce54675d5686c19e3d._RI_V_TTW_.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0KDOOMI7AK990FK444WMIPSF9L/ref=atv_dl_rdr"
    },
    {
      platform: 'aha',
      url: 'https://www.aha.video/movie/guna'
    },
    {
      platform: 'youtube',
      url: 'https://www.youtube.com/live/Hiwz_Eu6YKA?si=fBOQ1oz40FY_P0fv'
    }
    
  ],
  director: "Santhana Bharathi",
  music: "Ilaiyaraaja",
  awards: [
    "Cult status in Tamil cinema",
    "Praised for Kamal Haasan’s performance and Ilaiyaraaja’s soundtrack"
  ]
},

{
  id: 96,
  title: "Kaththi",
  year: 2014,
  rating: 7.8,
  genres: ["Action", "Drama", "Social", "Tamil"],
  overview:
    "A man with a striking resemblance to a social activist is forced to take the activist's place, fighting against corporate exploitation while protecting the villagers.",
  poster: "https://data1.ibtimes.co.in/en/full/533145/kaththi-poster.jpg",
  ott: [
    {
      platform: "youtube",
      url: "https://youtu.be/Yj5ooXqUPik?si=WK26-Sa0IvbgZ3oK"
    }
  ],
  director: "AR Murugadoss",
  music: "Anirudh Ravichander",
  awards: ["Filmfare Award for Best Actor – Vijay", "SIIMA Award for Best Film"]
},

{
  id: 97,
  title: "Mersal",
  year: 2017,
  rating: 7.5,
  genres: ["Action", "Drama", "Thriller", "Tamil"],
  overview:
    "A doctor and magician set out to expose corruption in the medical industry, leading to a gripping tale of revenge and justice.",
  poster: "https://www.gethucinema.com/wp-content/uploads/2017/09/Mersal-Fan-Made-Hd-Design-2.jpg",
  ott: [
    {
      platform: "youtube",
      url: "https://youtu.be/bAqXuQOrvKA?si=B2EGM4_Y1LEc2rTs"
    },
    {
      platform: 'netflix',
      url: 'https://www.netflix.com/in/title/81016196'
    }
  ],
  director: "Atlee Kumar",
  music: "A. R. Rahman",
  awards: ["SIIMA Award for Best Actor – Vijay", "Filmfare Award for Best Music Director"]
},
{
  id: 98,
  title: "Alappuzha Gymkhana",
  year: 2025,
  rating: null,
  genres: ["Comedy", "Drama", "Malayalam"],
  overview:
    "A quirky story of misadventures at a vintage gymkhana club in Alappuzha, where secrets, laughter, and chaos abound.",
  poster: "https://image.tmdb.org/t/p/original/hb2pi5USDNQOwhZOE90wbwEsrnw.jpg",
  ott: [{
    platform: 'sonyliv',
    url: 'https://www.sonyliv.com/movies/alappuzha-gymkhana-1590014376'
  }],
  director: "Ratheesh Ambat",
  music: "Bijibal",
  awards: []
},
{
  id: 99,
  title: "F1",
  year: 2025,
  rating: 7.7,
  genres: ["Action", "Sports", "Drama", "English"],
  overview:
    "A thrilling tale of a Formula 1 racer overcoming personal and professional challenges to claim victory on the world stage.",
  poster: "https://media2.firstshowing.net/firstshowing/img16/F1MoviePittpostermainbigFull591.jpg",
  ott: [],
  director: "Joseph Kosinski",
  music: "	Hans Zimmer",
  awards: []
},

{
  id: 100,
  title: "Thiruchitrambalam",
  year: 2022,
  rating: 8.0,
  genres: ["Romance", "Drama", "Comedy", "Tamil"],
  overview:
    "A delivery boy with a strained relationship with his father and grandfather navigates love, friendship, and family in this heartfelt coming-of-age story.",
  poster: "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/82/17/a0/8217a0e8-404a-559f-1526-b278caef5376/196925490238.jpg/1200x1200bf-60.jpg",
  ott: [
    {
      platform: "sunnxt",
      url: "https://www.sunnxt.com/tamil-movie-thiruchitrambalam-2022/detail/78501"
    },
    {
      platform: 'prime',
      url: 'https://www.primevideo.com/detail/0I2GBIKQO2ZLMANHI6KIKPQAF6/ref=atv_dl_rdr'
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-thiruchitrambalam-movie-online-fbba39c1fdf8b14cffcea05f0635da84?watch=true'
    }
  ],
  director: "Mithran R Jawahar",
  music: "Anirudh Ravichander",
  awards: ["Critically acclaimed for Dhanush's performance and music"]
},

{
  id: 101,
  title: "Sarpatta Parambarai",
  year: 2021,
  rating: 8.7,
  genres: ["Sports", "Drama", "Action", "Tamil"],
  overview:
    "Set in the 1970s, a boxer from North Chennai rises through the ranks while navigating caste politics, pride, and personal struggles in the boxing ring.",
  poster: "https://assets.gadgets360cdn.com/pricee/assets/product/202207/sarpatta-parambarai-poster_1657095107.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0LEOIQENLBDH3G9IVKGBM16L3M/ref=atv_dl_rdr"
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-sarpatta-parambarai-movie-online-964ee4d64d99598f12bdd370a74d5f77?watch=true'
    }
  ],
  director: "Pa. Ranjith",
  music: "Santhosh Narayanan",
  awards: [
    "National Film Award for Best Editing",
    "Widespread critical acclaim for Arya’s performance"
  ]
},
{
  id: 102,
  title: "Maaveeran",
  year: 2023,
  rating: 7.3,
  genres: ["Action", "Fantasy", "Comedy", "Tamil"],
  overview:
    "A timid cartoonist gains the courage to stand up against corruption when a mysterious voice guides him toward heroism.",
  poster: "https://i.pinimg.com/originals/1e/db/32/1edb32d76c015aeb76dbf5e0f9d48b6d.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0NN90YB710WQ7OJA5OG6OZKI83/ref=atv_dl_rdr"
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-maaveeran-tamil-movie-online-bb2c6ecd56261fa5ffca4fa8bdb35c1d?watch=true'
    }
  ],
  director: "Madonne Ashwin",
  music: "Bharath Sankar",
  awards: []
},
{
  id: 103,
  title: "Mahaan",
  year: 2022,
  rating: 7.6,
  genres: ["Action", "Drama", "Thriller", "Tamil"],
  overview:
    "A middle-aged man’s rebellion against his strict Gandhian father leads him into a world of crime, greed, and self-discovery.",
  poster: "https://wallpapercave.com/wp/wp10795861.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0RS62LESB81SLTBRZPZQET0HFC/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09KG1BS3N&qid=1760968019575"
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-mahaan-tamil-movie-online-d7d18ed3b34074fe2d2a5518df6da100?watch=true'
    }
  ],
  director: "Karthik Subbaraj",
  music: "Santhosh Narayanan",
  awards: ["Praised for Vikram’s and Dhruv Vikram’s performances"]
},

{
  id: 104,
  title: "Rocketry: The Nambi Effect",
  year: 2022,
  rating: 8.8,
  genres: ["Biography", "Drama", "Tamil", "Hindi", "English"],
  overview:
    "Based on the life of Indian aerospace engineer Nambi Narayanan, who was falsely accused of espionage and fought to clear his name while contributing immensely to India's space program.",
  poster: "https://upload.wikimedia.org/wikipedia/en/2/2f/Rocketry_The_Nambi_Effect.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0H1J8J3YQ0FTX16XWIULG1GZ6K/ref=atv_dl_rdr"
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-rocketry-the-nambi-effect-movie-online-4b7f81490d7b956dc91b3fcb1f351ab4?watch=true'
    }
  ],
  director: "R. Madhavan",
  music: "Sam C. S.",
  awards: [
    "National Film Award for Best Feature Film",
    "Praised for Madhavan’s direction and performance"
  ]
},
{
  id: 105,
  title: "Ponniyin Selvan: I",
  year: 2022,
  rating: 7.8,
  genres: ["Historical", "Drama", "Epic", "Tamil"],
  overview:
    "Based on Kalki Krishnamurthy’s classic novel, the film follows Vandiyathevan’s adventures as he delivers a message between the Chola princes during a time of political conspiracy and war.",
  poster: "https://static.moviecrow.com/gallery/20220907/204607-ps2.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0SBUCF1S6UH0FL3XWXLFMU1CDB/ref=atv_dl_rdr"
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-ponniyin-selvan-part-1-movie-online-67983c08eeb24fcd841801b51aaf05a3?watch=true'
    }
  ],
  director: "Mani Ratnam",
  music: "A. R. Rahman",
  awards: ["Critical and commercial success", "Praised for visuals and performances"]
},
{
  id: 106,
  title: "Ponniyin Selvan: II",
  year: 2023,
  rating: 8.0,
  genres: ["Historical", "Drama", "Epic", "Tamil"],
  overview:
    "The saga continues as Arulmozhi Varman’s destiny as the great Chola emperor unfolds amidst betrayal, romance, and war in the conclusion of the epic duology.",
  poster: "https://assets.voxcinemas.com/posters/P_HO00010187.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0TTXC5QHTITP1IWA8XWI4UOQ0M/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0B8PJ1F2V&qid=1760968883142"
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-ponniyin-selvan-part-2-movie-online-db413d176e100ed5d77657b7895a6438'
    }
  ],
  director: "Mani Ratnam",
  music: "A. R. Rahman",
  awards: ["Praised for direction, music, and ensemble performances"]
},

{
  id: 107,
  title: "Sita Ramam",
  year: 2022,
  rating: 8.6,
  genres: ["Romance", "Drama", "War", "Telugu"],
  overview:
    "Set in the 1960s, the story follows Lieutenant Ram, an orphaned Indian army officer, whose life changes after he receives a series of love letters from Sita. Their beautiful bond transcends time, distance, and war.",
  poster: "https://image.tmdb.org/t/p/original/zcsKp0GvD2qlgn5zOuENJ0lT9UK.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/0G2G9F9BZAJUW8XZ2RQ5N3MRBS/ref=atv_dl_rdr"
    },
    {
      platform: 'mxplayer',
      url: 'https://www.mxplayer.in/movie/watch-sita-ramam-movie-online-9c644f2c28410f9321fd9b572cf17e85?watch=true'
    }
  ],
  director: "Hanu Raghavapudi",
  music: "Vishal Chandrashekhar",
  awards: [
    "Filmfare Award for Best Film – Telugu",
    "Critical acclaim for performances and cinematography"
  ]
},
{
  id: 108,
  title: "Theeran Adhigaaram Ondru",
  year: 2017,
  rating: 8.2,
  genres: ["Action", "Crime", "Thriller", "Tamil"],
  overview:
    "Based on true events, the film follows a dedicated police officer who investigates a series of brutal dacoity crimes that span across India.",
  poster: "https://a.ltrbxd.com/resized/film-poster/3/8/8/2/1/3/388213-theeran-adhigaram-ondru-0-460-0-690-crop.jpg?k=7f110467ff",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Theeran-Adhigaaram-Ondru/0Q38D8TBW09T13EYE8P2XG0X0S"
    }
  ],
  director: "H. Vinoth",
  music: "Ghibran",
  awards: [
    "Critically acclaimed for its realism and performances",
    "Based on Operation Bawaria case"
  ]
},
{
  id: 109,
  title: "Mankatha",
  year: 2011,
  rating: 7.6,
  genres: ["Action", "Thriller", "Crime", "Tamil"],
  overview:
    "A suspended cop leads a group of criminals to pull off a heist involving illegal betting money, but betrayal and greed soon turn them against each other.",
  poster: "https://m.media-amazon.com/images/M/MV5BZjEwYjkxZGEtMjZlMy00MDZhLTk0MWYtNDY0NTZiNmZkM2Q4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY1200_CR138,0,630,1200_AL_.jpg",
  ott: [
    {
      platform: "sunnxt",
      url: "https://www.sunnxt.com/tamil-movie-mankatha-2011/detail/6953"
    }
  ],
  director: "Venkat Prabhu",
  music: "Yuvan Shankar Raja",
  awards: ["Commercial blockbuster", "Praised for Ajith’s negative role"]
},
{
  id: 110,
  title: "Ghajini",
  year: 2005,
  rating: 8.1,
  genres: ["Action", "Thriller", "Romance", "Tamil"],
  overview:
    "A man suffering from short-term memory loss sets out to avenge the murder of his lover, marking a milestone in Tamil action cinema.",
  poster: "https://m.media-amazon.com/images/M/MV5BOGRhMmZjYzAtOGM3YS00NzZjLWFiZGEtNzk5ZmJjMmUxZWU4XkEyXkFqcGc@._V1_.jpg",
  ott: [
    {
      platform: "sunnxt",
      url: "https://www.sunnxt.com/tamil-movie-ghajini-tamil-2005/detail/8848"
    }
  ],
  director: "A. R. Murugadoss",
  music: "Harris Jayaraj",
  awards: ["One of the highest-grossing Tamil films of 2005"]
},
{
  id: 111,
  title: "Sathuranga Vettai",
  year: 2014,
  rating: 8.3,
  genres: ["Crime", "Thriller", "Drama", "Tamil"],
  overview:
    "A brilliant con artist executes multiple scams for money, only to face the consequences of his greed and deception.",
  poster: "https://static.moviecrow.com/gallery/20140718/38952-sathuranga-vettai-2.png",
  ott: [
    {
      platform: "jiohotstar",
      url: "https://www.hotstar.com/in/movies/sathuranga-vettai/1000058080"
    },
    {
      platform: 'youtube',
      url: 'https://youtu.be/jSpM5bi6aRg?si=2P1r1Wjl_uMVpvti'
    }
  ],
  director: "H. Vinoth",
  music: "Sean Roldan",
  awards: ["National Film Award – Special Jury Award (Producer Thirrupathi Brothers)"]
},
{
  id: 112,
  title: "Kuttram 23",
  year: 2017,
  rating: 7.4,
  genres: ["Crime", "Thriller", "Action", "Tamil"],
  overview:
    "An earnest police officer investigates a case involving medical crimes and corruption, leading to shocking revelations.",
  poster: "https://m.media-amazon.com/images/M/MV5BNDViZDQzOGEtOTdiYS00ZGYxLTk0ZjgtNTk3NTg0NDNiM2M0XkEyXkFqcGc@._V1_.jpg",
  ott: [
    {
      platform: "zee5",
      url: "https://www.zee5.com/movies/details/kuttram-23/0-0-6832"
    },
    {
      platform: 'youtube',
      url: 'https://youtu.be/bSZHx5xQrK4?si=GiCv0TYmz0knUP2D'
    }
  ],
  director: "Arivazhagan Venkatachalam",
  music: "Vishal Chandrashekhar",
  awards: ["Praised for Arun Vijay’s performance and taut screenplay"]
},

{
  id: 113,
  title: "Dhuruvangal Pathinaaru",
  year: 2016,
  rating: 8.6,
  genres: ["Crime", "Thriller", "Mystery", "Tamil"],
  overview:
    "A retired police officer revisits a complex murder case that has haunted him, leading to shocking twists and revelations.",
  poster: "https://files.prokerala.com/movies/pics/800/dhuruvangal-pathinaaru-100-days-poster-68139.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Dhruvangal-Pathinaru/0NLP21YPG8DTVVTZU8OM6BCTHY"
    },
    
  ],
  director: "Karthick Naren",
  music: "Ghibran",
  awards: ["Critical acclaim for screenplay and R. Sarathkumar’s performance"]
},
{
  id: 114,
  title: "Imaikkaa Nodigal",
  year: 2018,
  rating: 8.0,
  genres: ["Thriller", "Crime", "Mystery", "Tamil"],
  overview:
    "A relentless CBI officer tracks a serial killer who leaves behind cryptic clues, leading to a tense cat-and-mouse game.",
  poster: "https://www.gethucinema.com/wp-content/uploads/2017/05/Imaikkaa-Nodigal-poster.jpg",
  ott: [
    {
      platform: "youtube",
      url: "https://youtu.be/1IOSCD9MXp8?si=6IdUeE-iGClUrxJ8"
    }
  ],
  director: "R. Ajay Gnanamuthu",
  music: "Ghibran",
  awards: ["Praised for Nayanthara’s performance and suspenseful direction"]
},
{
  id: 115,
  title: "Thani Oruvan",
  year: 2015,
  rating: 8.4,
  genres: ["Action", "Thriller", "Crime", "Tamil"],
  overview:
    "An honest police officer takes on a brilliant and cunning corporate criminal, leading to a high-stakes battle of wits and strategy.",
  poster: "https://alchetron.com/cdn/Thani-Oruvan-images-629ebc78-d649-4061-9abc-12ac4badf71.jpg",
  ott: [
    {
      platform: "sunnxt",
      url: "https://www.sunnxt.com/tamil-movie-thani-oruvan-2015/detail/7191"
    }
  ],
  director: "	Mohan Raja",
  music: "	Hiphop Tamizha",
  awards: ["Filmfare Award for Best Actor – Jayam Ravi"]
},
{
  id: 116,
  title: "Lokah Chapter 1: Chandra",
  year: 2025,
  rating: 8.1,
  genres: ["Action", "Fantasy", "Mythology", "Pan-Indian","Malayalam"],
  overview:
    "The first chapter in the Lokah cinematic universe, 'Chandra' explores the rise of a mystical warrior torn between destiny and divinity in an epic battle of light and shadow.",
  poster: "https://www.cinejosh.com/newsimg/newsmainimg/lokah-chapter-1_b_3110251257.jpg",
  ott: [{
    platform: "jiohotstar",
    url: "https://www.hotstar.com/in/movies/lokah-chapter-1-chandra/1271499938?search_query=lokah+chapter+1+chandra+2025"
  }],
  director: "Dominic Arun",
  music: "Jakes Bejoy",
  awards: []
},
{
  id: 117,
  title: "Kantara: A Legend – Chapter 1",
  year: 2025,
  rating: 8.5,
  genres: ["Action", "Mythology", "Drama", "Kannada"],
  overview:
    "A prequel to 'Kantara', this film delves into the origin story of the Panjurli Daiva and the ancient bond between man, nature, and divinity.",
  poster: "https://www.cinejosh.com/newsimg/newsmainimg/kantara-chapter-1-first-look-and-teaser-released_b_2711230115.jpg",
  ott: [{
    platform: "prime",
    url: "https://www.primevideo.com/detail/Kantara-A-Legend-Chapter---1/0GVRWVPYEWP2ISMP4M9H28TEKE"
  }],
  director: "Rishab Shetty",
  music: "Ajaneesh Loknath",
  awards: []
},
{
  id: 118,
  title: "Mahavatar Narsimha",
  year: 2024,
  rating: 8.7,
  genres: ["Mythology", "Action", "Spiritual", "Hindi"],
  overview:
    "Inspired by ancient scriptures, this mythological epic portrays the incarnation of Lord Vishnu as Narasimha, the fierce protector who restores dharma by annihilating evil.",
  poster: "https://upload.wikimedia.org/wikipedia/en/4/45/Mahavatar_Narsimha_film_poster.jpg",
  ott: [{
    platform:"netflix",
    url:"https://www.netflix.com/in/title/82131939"
  }],
  director: "Ashwin Kumar",
  music: "	Sam C. S",
  awards: []
},
{
  id: 119,
  title: "Idli Kadai",
  year: 2025,
  rating: 6.9,
  genres: ["Comedy", "Drama", "Family", "Tamil"],
  overview:
    "Set in a bustling South Indian town, 'Idli Kadai' follows the hilarious and heartwarming story of a small eatery owner whose humble idli shop becomes the center of community, chaos, and dreams.",
  poster: "https://a.ltrbxd.com/resized/film-poster/1/2/0/4/4/3/7/1204437-idly-kadai-0-230-0-345-crop.jpg?v=8882fee36b",
  ott: [{
    platform: "netflix",
    url: "https://www.netflix.com/in/title/82034831"
  }],
  director: "Dhanush",
  music: "G. V. Prakash Kumar",
  awards: []
},
{
  id: 120,
  title: "Chak De! India",
  year: 2007,
  rating: 8.2,
  genres: ["Sports", "Drama", "Hindi"],
  overview:
    "A disgraced hockey player redeems himself by coaching the Indian women's national team to world championship glory, inspiring unity and perseverance.",
  poster: "https://image.tmdb.org/t/p/original/mmFMgEsTRCAGAtwffGpuo3mJsxN.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Chak-De-India/0ST8IWCMUO5NMQM3413WKVMWQS"
    },
    {
      platform: "netflix",
      url: "https://www.netflix.com/in/title/70077853"
    }
  ],
  director: "Shimit Amin",
  music: "Salim–Sulaiman",
  awards: ["National Film Award for Best Popular Film Providing Wholesome Entertainment"]
},
{
  id: 121,
  title: "Dilwale Dulhania Le Jayenge",
  year: 1995,
  rating: 8.1,
  genres: ["Romance", "Drama", "Musical", "Hindi"],
  overview:
    "Raj and Simran, two young NRIs, fall in love during a trip to Europe. Their journey of love, family, and tradition redefined Indian cinema forever.",
  poster: "https://m.media-amazon.com/images/M/MV5BMDQ2ZmE2NTMtZDE3NC00YzFjLWJhNmEtMDEzMTI5ZjU2ZGM0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg",
  ott: [
    {
      platform: "netflix",
      url: "https://www.netflix.com/in/title/60036747"
    }
  ],
  director: "Aditya Chopra",
  music: "Jatin–Lalit",
  awards: ["10 Filmfare Awards including Best Film and Best Actor"]
},
{
  id: 122,
  title: "Jawan",
  year: 2023,
  rating: 7.8,
  genres: ["Action", "Thriller", "Drama", "Hindi"],
  overview:
    "A vigilante with a mysterious past sets out to right the wrongs in society while confronting his father’s legacy in this high-octane action spectacle.",
  poster: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-08/f4xheqga4aafzei.jpg?VersionId=V.bhgb1YuEsJJ9kqcXpG0almVkeG6ktj&size=750:*",
  ott: [
    {
      platform: "netflix",
      url: "https://www.netflix.com/in/title/81728124"
    }
  ],
  director: "Atlee",
  music: "Anirudh Ravichander",
  awards: ["Blockbuster hit and major critical acclaim for Shah Rukh Khan"]
},
{
  id: 123,
  title: "Dil Se..",
  year: 1998,
  rating: 7.9,
  genres: ["Romance", "Thriller", "Drama", "Hindi"],
  overview:
    "A radio journalist falls deeply in love with a mysterious woman hiding a dark secret, leading to a haunting tale of love and tragedy.",
  poster: "https://image.tmdb.org/t/p/original/rCoGw9cp0EY2Rd504iqqjSDtepF.jpg",
  ott: [
    {
      platform: "netflix",
      url: "https://www.netflix.com/in/title/17671454"
    }
  ],
  director: "Mani Ratnam",
  music: "A. R. Rahman",
  awards: ["National Film Award for Best Cinematography", "Filmfare Award for Best Music Director"]
},
{
  id: 124,
  title: "Ra.One",
  year: 2011,
  rating: 6.0,
  genres: ["Action", "Sci-Fi", "Superhero", "Hindi"],
  overview:
    "A video game designer’s creation turns against him when a powerful AI villain escapes into the real world. A father must transform into a hero to save his son.",
  poster: "https://c8.alamy.com/comp/E5MMRH/ra-one-shah-rukh-khan-on-indian-poster-in-english-2011-eros-internationalcourtesy-E5MMRH.jpg",
  ott: [
    {
      platform: "youtube",
      url: "https://youtu.be/uzmfVpBxlVc?si=erv1WdzXO1uqDBZu"
    }
  ],
  director: "Anubhav Sinha",
  music: "Vishal–Shekhar",
  awards: ["National Film Award for Best Special Effects"]
},
{
  id: 125,
  title: "Sholay",
  year: 1975,
  rating: 8.2,
  genres: ["Action", "Adventure", "Drama", "Hindi"],
  overview:
    "Two ex-convicts are hired by a retired police officer to capture a ruthless bandit, Gabbar Singh. This timeless classic defined the modern Indian action film.",
  poster: "https://image.tmdb.org/t/p/original/ya9bwgqA4eNl5bQ9QqS0jcmRoBS.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Sholay/0LPKHVZ3CQXGVLYM6Z0AOH77QJ"
    },
    {
      platform: 'youtube',
      url: "https://youtu.be/_mMgACjwbOU?si=etyUCeDQWGduBUOc"
    }
  ],
  director: "Ramesh Sippy",
  music: "R. D. Burman",
  awards: ["Filmfare Award for Best Editing", "One of the greatest Indian films of all time"]
},
{
  id: 126,
  title: "Mera Naam Joker",
  year: 1970,
  rating: 7.6,
  genres: ["Drama", "Romance", "Musical", "Hindi"],
  overview:
    "An emotional journey of a clown who brings laughter to others while struggling with heartbreak and loneliness throughout his life.",
  poster: "https://image.tmdb.org/t/p/original/8NkLtovLUufV09WYHztBO8vkSSY.jpg",
  ott: [
    {
      platform: "zee5",
      url: "https://www.zee5.com/movies/details/mera-naam-joker/0-0-6713"
    }
  ],
  director: "Raj Kapoor",
  music: "Shankar–Jaikishan",
  awards: ["Filmfare Award for Best Director", "Cult classic in Indian cinema"]
},
{
  id: 127,
  title: "Dangal",
  year: 2016,
  rating: 8.4,
  genres: ["Biography", "Drama", "Sports", "Hindi"],
  overview:
    "Based on the true story of Mahavir Singh Phogat, who trains his daughters to become world-class wrestlers and bring glory to India.",
  poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
  ott: [
    {
      platform: "prime",
      url: "https://www.primevideo.com/detail/Dangal/0IIOG10OTQ7YE1RZ3I202LHQUB"
    }
  ],
  director: "Nitesh Tiwari",
  music: "Pritam",
  awards: ["National Film Award for Best Popular Film", "Highest-grossing Indian film worldwide"]
},
{
  id: 128,
  title: "Taare Zameen Par",
  year: 2007,
  rating: 8.4,
  genres: ["Drama", "Family", "Hindi"],
  overview:
    "An eight-year-old boy with dyslexia struggles at school until an art teacher helps him discover his hidden potential and creativity.",
  poster: "https://image.tmdb.org/t/p/original/3bciPfmZvGhdOsIpDvVSpltGQCo.jpg",
  ott: [
    {
      platform: "netflix",
      url: "https://www2.stage.netflix.com/in/title/70087087"
    },
    {
      platform: 'youtube',
      url: ''
    }
  ],
  director: "Aamir Khan",
  music: "Shankar–Ehsaan–Loy",
  awards: ["Filmfare Award for Best Film", "National Film Award for Best Film on Family Welfare"]
},
{
  id: 129,
  title: "Sitaare Zameen Par",
  year: 2025,
  rating: 6.9,
  genres: ["Drama", "Family", "Hindi"],
  overview:
    "A spiritual successor to 'Taare Zameen Par', Aamir Khan’s upcoming film explores empathy, inclusion, and understanding through a new lens focused on neurodiverse children.",
  poster: "https://tse1.mm.bing.net/th/id/OIP.Icjo0QU2OrcrQ1d-KhgGBAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
  ott: [{
    platform: "youtube",
    url: "https://youtu.be/LB4UQB564k8?si=2xTXICVmdQpOSvnU"
  }],
  director: "Aamir Khan",
  music: "Shankar–Ehsaan–Loy",
  awards: []
},
{
  id: 130,
  title: "The Jungle Book",
  year: 2016,
  rating: 7.4,
  genres: ["Adventure", "Family", "Fantasy", "English"],
  overview:
    "An orphaned boy raised by wolves must leave the jungle when the fearsome tiger Shere Khan threatens his life. A visually stunning reimagining of the classic tale.",
  poster: "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Jungle_Book_%282016%29.jpg",
  ott: [
    {
      platform: "jiohotstar",
      url: "https://www.hotstar.com/in/movies/the-jungle-book/1260018310?search_query=jung"
    }
  ],
  director: "Jon Favreau",
  music: "John Debney",
  awards: ["Academy Award for Best Visual Effects"]
},
{
  id: 131,
  title: "Mufasa: The Lion King",
  year: 2024,
  rating: 6.6,
  genres: ["Animation", "Adventure", "Drama", "English"],
  overview:
    "The prequel to 'The Lion King' reveals the untold story of Mufasa’s rise to become one of the greatest kings of the Pride Lands.",
  poster: "https://idposter.com/img/Movie/Movies_2025/Mufasa_The_Lion_King/id2631680.webp",
  ott: [{
    platform: 'jiohotstar',
    url: 'https://www.hotstar.com/in/movies/mufasa-the-lion-king/1271337440?search_query=mufassa'
  }],
  director: "Barry Jenkins",
  music: "Hans Zimmer, Pharrell Williams, Nicholas Britell",
  awards: []
},
 {
    id: 132,
    title: "Kalyanaraman",
    year: 2002,
    rating: 7.5,
    genres: ["Comedy", "Drama", "Malayalam"],
    overview: "A wedding planner's own love story takes hilarious and emotional turns as he navigates family expectations and misunderstandings.",
    poster: "https://a.ltrbxd.com/resized/film-poster/2/8/1/7/3/8/281738-kalyanaraman-0-460-0-690-crop.jpg?k=cc24946b69",
    ott: [
      { platform: "youtube", url: "https://youtu.be/gF3X54sk0hc?si=BRhjem5sPXv4uxDe" }
    ],
    director: "Shafi",
    music: "Berny–Ignatius",
    awards: []
  },

   {
    id: 133,
    title: "C.I.D. Moosa",
    year: 2003,
    rating: 7.8,
    genres: ["Comedy", "Action", "Malayalam"],
    overview: "An ambitious private detective’s hilarious escapades as he tries to solve major cases while being underestimated by everyone.",
    poster: "https://alchetron.com/cdn/CID-Moosa-images-53434ef1-b799-434d-b153-ec216a4f870.jpg",
    ott: [
      { platform: "sunnxt", url: "https://www.sunnxt.com/malayalam-movie-cidmoosa-2003/detail/13431" }
    ],
    director: "Johny Antony",
    music: "Vidyasagar",
    awards: []
  },
   {
    id: 134,
    title: "Ee Parakkum Thalika",
    year: 2001,
    rating: 7.4,
    genres: ["Comedy", "Drama", "Malayalam"],
    overview: "A carefree bus owner and his friend live a humorous life until love and responsibility enter their chaotic world.",
    poster: "https://m.media-amazon.com/images/M/MV5BNGQ2ZWRmMWEtMzg1MC00NGQ3LWJhZTUtY2Q3YzNlOTAwMWUyXkEyXkFqcGc@._V1_.jpg",
    ott: [
      { platform: "youtube", url: "https://youtu.be/k7adknGDOCo?si=m9oR1UE8rqUXQjLB" }
    ],
    director: "Thaha",
    music: "Ouseppachan",
    awards: []
  },
  {
    id: 135,
    title: "One Man Show",
    year: 2001,
    rating: 6.8,
    genres: ["Comedy", "Drama", "Malayalam"],
    overview: "A simple man’s life turns upside down when a television show exposes his secrets, leading to chaos and humor.",
    poster: "https://alchetron.com/cdn/One-Man-Show-film-images-883a4b31-a293-4c64-bdd8-b632d8fc618.jpg",
    ott: [
      { platform: "youtube", url: "https://youtu.be/d2x6hxiMxVc?si=Ntwby40KxgvZLksk" }
    ],
    director: "Shafi",
    music: "Alphons Joseph",
    awards: []
  },
  {
    id: 136,
    title: "Vettam",
    year: 2004,
    rating: 7.2,
    genres: ["Comedy", "Romance", "Malayalam"],
    overview: "A thief on the run finds himself entangled with a runaway bride, leading to a series of comic misadventures.",
    poster: "https://image.tmdb.org/t/p/original/z46Hnzg8aNppbrLUIHfri4SgRKZ.jpg",
    ott: [
      { platform: "prime", url: "https://www.primevideo.com/detail/Vettam/0P0X8ZJBXH0Z9ESPFEKKQWJ7EG" },
      {
        platform: 'youtube',url: 'https://youtu.be/40nfhLC7i84?si=g47x-zyoAa_-l-9l'
      }
    ],
    director: "Priyadarshan",
    music: "Alex Paul",
    awards: []
  },
  {
    id: 137,
    title: "Two Countries",
    year: 2015,
    rating: 6.9,
    genres: ["Comedy", "Romance", "Malayalam"],
    overview: "A lazy man marries a wealthy Canadian woman, only to face hilarious cultural clashes and marital troubles.",
    poster: "https://m.media-amazon.com/images/I/61Cni+-33oL._SY300_.jpg",
    ott: [
      { platform: "jiohotstar", url: "https://www.hotstar.com/in/movies/2-countries/1000159550?search_query=two+count" }
    ],
    director: "Shafi",
    music: "Gopi Sundar",
    awards: []
  },
  {
    id: 138,
    title: "Punjabi House",
    year: 1998,
    rating: 7.8,
    genres: ["Comedy", "Drama", "Malayalam"],
    overview: "A man fakes his suicide to escape debt but ends up in a Punjabi household, leading to hilarious situations.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDFhMmVlZGEtMmI5Ni00ZGQ5LThmNmQtOTJjZTQxNDg5MDMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    ott: [
      { platform: "youtube", url: "https://youtu.be/uH207PW77Wo?si=9hTPIxrTnNeVz5S_" }
    ],
    director: "Rafi Mecartin",
    music: "Suresh Peters",
    awards: []
  },
  {
    id: 139,
    title: "Manichitrathazhu",
    year: 1993,
    rating: 8.7,
    genres: ["Horror", "Thriller", "Drama", "Malayalam"],
    overview: "A newlywed couple moves into a haunted mansion, where an ancestral spirit possesses the wife, unraveling a mysterious past.",
    poster: "https://i.pinimg.com/originals/04/21/eb/0421eb351e65b14b81653867ea10d0d3.jpg",
    ott: [
      { platform: "prime", url: "https://www.primevideo.com/detail/0F72QU3SILHFNBX43WUWNDLAA7/ref=atv_dl_rdr"},
        {platform: "jiohotstar",url: "https://www.hotstar.com/in/movies/manichithrathazhu/1000154351" },
        {platform: "youtube",url: "https://youtu.be/Rnei1GckDZg?si=pzX2f8mcE36PUJkM"}
       
    ],
    director: "Fazil",
    music: "M.G. Radhakrishnan",
    awards: ["National Film Award for Best Popular Film Providing Wholesome Entertainment"]
  },
  {
    id: 140,
    title: "Ravanaprabhu",
    year: 2001,
    rating: 7.5,
    genres: ["Action", "Drama", "Malayalam"],
    overview: "A sequel to Devasuram, the story follows Mangalassery Neelakantan's son seeking revenge and redemption in a power struggle.",
    poster: "https://pbs.twimg.com/media/E-CvkzrXEAMHvMb.jpg",
    ott: [
      { platform: "prime", url: "https://www.primevideo.com/detail/Raavanaprabhu/0LY4LHJSWGN9YTDYU7YFTRN5Q1" },
      {platform:"youtube",url: "https://youtu.be/Nephx88OjEk?si=NfjsMhfsM68hEv4p"}
    ],
    director: "Ranjith",
    music: "C. Rajamani",
    awards: []
  },
  {
    id: 141,
    title: "Uttama Villain",
    year: 2015,
    rating: 7.8,
    genres: ["Drama", "Fantasy", "Tamil"],
    overview: "A famous actor facing death creates a movie about immortality, blurring the line between art and reality.",
    poster: "https://th.bing.com/th/id/R.ffb06a4fea0ca8b9b38c2478821838b1?rik=9MYv0RqHqwQV3A&riu=http%3a%2f%2fdata1.ibtimes.co.in%2fen%2ffull%2f441013%2futtama-villain-first-look-poster-ramesh-aravind-twitter.jpg&ehk=y%2fZD4p0Lf3v6dVBr9QA4TVKvfWX5Ncj8vuwGAraTJ60%3d&risl=&pid=ImgRaw&r=0",
    ott: [
      { platform: "prime", url: "https://www.primevideo.com/detail/Uttama-Villain/0KIY6NK8MHZABCNW2JV6HHW4MF" },
      {platform: "youtube",url: "https://youtu.be/_qjnq1feNhg?si=2xnq5QWHO6SRxELz"},
      {platform:"zee5",url: "https://www.zee5.com/movies/details/uttama-villain/0-0-uttamavillain"}
    ],
    director: "Ramesh Aravind",
    music: "Ghibran",
    awards: []
  },
  {
    id: 142,
    title: "Narasimham",
    year: 2000,
    rating: 7.6,
    genres: ["Action", "Drama", "Malayalam"],
    overview: "A man wrongfully imprisoned returns seeking vengeance and justice, leading to an epic showdown of power and pride.",
    poster: "https://m.media-amazon.com/images/I/51+nsJL0G0L._UF350,350_QL50_.jpg",
    ott: [
      { platform: "", url: "" },
      {platform: "youtube",url:"https://youtu.be/Z3g5qGQK7eI?si=CpLbZ5yFG22jxq_E"}
    ],
    director: "Shaji Kailas",
    music: "M.G. Sreekumar",
    awards: []
  },
   {
    id: 143,
    title: "Vanaprastham",
    year: 1999,
    rating: 8.5,
    genres: ["Drama", "Art", "Malayalam"],
    overview: "A Kathakali artist’s tragic journey through art, love, and identity as his life and performance intertwine.",
    poster: "https://2.bp.blogspot.com/_s9x_JXX57n4/TUeg9UGHOTI/AAAAAAAABvQ/t_xuNcro2QU/s1600/Vanaprastham.jpg",
    ott: [
      {platform:"jiohotstar",url: "https://www.hotstar.com/in/movies/vanaprastham/1000164505"},
      { platform: "youtube", url: "https://youtu.be/WiRfhb_ixao?si=3dcAUohkJsRYhGxm" }
    ],
    director: "Shaji N. Karun",
    music: "Zakir Hussain",
    awards: ["National Film Award – Best Film"]
  },
  {
    id: 144,
    title: "Oru Vadakkan Veeragatha",
    year: 1989,
    rating: 8.8,
    genres: ["Action", "Drama", "History", "Malayalam"],
    overview: "A retelling of the legend of Chandu Chekavar, depicting his life, betrayal, and misunderstood heroism.",
    poster: "https://image.tmdb.org/t/p/w500/AeRbwPlmE8m3qnr4AjB4lmEVqKs.jpg",
    ott: [
      { platform: "youtube", url: "https://youtu.be/QjufSxVXILw?si=ConZhk8qUE-CIeDS" }
    ],
    director: "Hariharan",
    music: "M. G. Radhakrishnan",
    awards: ["National Film Award for Best Screenplay"]
  },
  {
    id: 145,
    title: "Kerala Varma Pazhassi Raja",
    year: 2009,
    rating: 7.8,
    genres: ["Action", "Historical", "Malayalam"],
    overview: "The story of the legendary king Kerala Varma Pazhassi Raja and his heroic resistance against British colonialism.",
    poster: "https://th.bing.com/th/id/R.89b2d6bb8cc204516f3f5559d78e4591?rik=dxN7r1NG1mkwXQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_8MR8AOUFJ4I%2fSuVhtXDstJI%2fAAAAAAAAABA%2fQczaGGJMf0M%2fs320%2fPazhassi-Raja-01.jpg&ehk=WcfdGjcX8QEhQoUiRqhJipCS%2bmbK9E384Lf%2bqbge5c0%3d&risl=&pid=ImgRaw&r=0",
    ott: [
      { platform: "ajiohotstar", url: "https://www.hotstar.com/in/movies/kerala-varma-pazhassiraja/1000101168?search_query=pazh" }
    ],
    director: "Hariharan",
    music: "Ilaiyaraaja",
    awards: ["National Film Award for Best Background Score"]
  },
  {
    id: 146,
    title: "Oppam",
    year: 2016,
    rating: 7.3,
    genres: ["Thriller", "Crime", "Drama", "Malayalam"],
    overview: "A blind man becomes the key witness to a murder and must use his other senses to bring the killer to justice.",
    poster: "https://www.filmibeat.com/fanimg/oppam-photos-images-50219.jpg",
    ott: [
      { platform: "jiohotstar", url: "https://www.hotstar.com/in/movies/kanupapa/1000188983" }
    ],
    director: "Priyadarshan",
    music: "Ron Ethan Yohann",
    awards: []
  },
  {
    id: 147,
    title: "Pulimurugan",
    year: 2016,
    rating: 7.1,
    genres: ["Action", "Adventure", "Malayalam"],
    overview: "A skilled hunter protects his village from man-eating tigers, becoming both a hero and a legend in the forest.",
    poster: "https://c8.alamy.com/comp/KYN585/pulimurugan-indian-poster-in-english-and-malayalam-mohanlal-2016-mulakuppadam-KYN585.jpg",
    ott: [
      { platform: "jiohotstar", url: "https://www.hotstar.com/in/movies/pulimurugan/1770015155" },
      {platform: "youtube",url: 'https://youtu.be/DjBcBM_5MhQ?si=Jfet5u5lw3u-H4MR'}
    ],
    director: "Vysakh",
    music: "Gopi Sundar",
    awards: ["Kerala State Film Award for Best Popular Film"]
  }

];


const ottLogos = {
  netflix: 'https://static.vecteezy.com/system/resources/previews/022/101/069/non_2x/netflix-logo-transparent-free-png.png',
  prime: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
  hbomax: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
  mxplayer: 'https://archive.org/download/mx-player-icon/mx-player-icon.png',
  jiohotstar: 'https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png',
  sonyliv: 'https://www.pngplay.com/wp-content/uploads/12/Sony-Logo-Transparent-Image.png',
  zee5: 'https://www.zee5.com/images/favicon.ico?ver=4.25.2',
  manomax: 'https://images.justwatch.com/icon/208852613/s100/manoramamax.jpeg',
  sunnxt: 'https://m.media-amazon.com/images/I/A13sXw0T8qL.png',
  youtube: 'https://pngimg.com/uploads/youtube/youtube_PNG102352.png',
  aha: 'https://images.seeklogo.com/logo-png/46/1/aha-ott-logo-png_seeklogo-463455.png'
};




// App state
/* === CinemaVault with Pagination === */

const MOVIES_PER_PAGE = 12;
let currentPage = 1;
let filteredMovies = [...MOVIES];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const grid = document.getElementById("grid");
const pager = document.getElementById("pager");
const count = document.getElementById("count");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const clearBtn = document.getElementById("clearBtn");
const minRating = document.getElementById("minRating");
const ratingLabel = document.getElementById("ratingLabel");
const genresContainer = document.getElementById("genres");
const showAll = document.getElementById("showAll");
const showFavs = document.getElementById("showFavs");

const modal = document.getElementById("modal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalOverview = document.getElementById("modalOverview");
const modalGenres = document.getElementById("modalGenres");
const modalOTT = document.getElementById("modalott");
const modalFav = document.getElementById("modalFav");
const modalClose = document.getElementById("modalClose");

/* === Render Functions === */
function renderMovies() {
  grid.innerHTML = "";

  const start = (currentPage - 1) * MOVIES_PER_PAGE;
  const end = start + MOVIES_PER_PAGE;
  const pageMovies = filteredMovies.slice(start, end);

  pageMovies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="poster" src="${movie.poster}" alt="${movie.title}">
      <div class="card-body">
        <div class="meta">
          <div>
            <div class="title">${movie.title}</div>
            <div class="sub">${movie.year} • ⭐ ${movie.rating ?? "N/A"}</div>
          </div>
          <button class="fav" title="Add to favorites">${favorites.includes(movie.id) ? "❤️" : "♡"}</button>
        </div>
      </div>
    `;

    // Click to open modal
    card.querySelector(".poster").addEventListener("click", () => openModal(movie));
    // Favorite button
    card.querySelector(".fav").addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorite(movie.id);
    });

    grid.appendChild(card);
  });

  count.textContent = filteredMovies.length;
  renderPager();
}

function renderPager() {
  pager.innerHTML = "";
  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "page-btn";
    if (i === currentPage) btn.style.backgroundColor = "#333";
    btn.addEventListener("click", () => {
      currentPage = i;
      renderMovies();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    pager.appendChild(btn);
  }
}

/* === Filtering, Search & Sorting === */
function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const min = parseFloat(minRating.value);
  const selectedGenreBtns = genresContainer.querySelectorAll(".genre-btn.active");
  const selectedGenres = [...selectedGenreBtns].map(btn => btn.textContent);

  filteredMovies = MOVIES.filter(movie => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search) ||
      movie.director.toLowerCase().includes(search) ||
      movie.genres.some(g => g.toLowerCase().includes(search));

    const matchesRating = !movie.rating || movie.rating >= min;
    const matchesGenre =
      selectedGenres.length === 0 ||
      selectedGenres.some(g => movie.genres.includes(g));
    const matchesFav =
      showFavs.classList.contains("active") ? favorites.includes(movie.id) : true;

    return matchesSearch && matchesRating && matchesGenre && matchesFav;
  });

  applySort();
  currentPage = 1;
  renderMovies();
}

function applySort() {
  const value = sortSelect.value;
  filteredMovies.sort((a, b) => {
    switch (value) {
      case "rating": return (b.rating ?? 0) - (a.rating ?? 0);
      case "year_desc": return b.year - a.year;
      case "year_asc": return a.year - b.year;
      default: return b.rating - a.rating; // popular default
    }
  });
}

/* === Favorites === */
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderMovies();
}

/* === Modal === */
function openModal(movie) {
  modalPoster.src = movie.poster;
  modalTitle.textContent = movie.title;
  modalMeta.textContent = `${movie.year} • ⭐ ${movie.rating ?? "N/A"} • Dir. ${movie.director}`;
  modalOverview.textContent = movie.overview;
  modalGenres.innerHTML = movie.genres.map(g => `<span class="genre-btn">${g}</span>`).join(" ");
  modalOTT.innerHTML = movie.ott?.length
  ? movie.ott.map(p => {
      // Get the logo URL from the ottLogos object
      const logoUrl = ottLogos[p.platform];
      
      // Use the logo if it exists, otherwise fall back to text
      const content = logoUrl
        ? `<img src="${logoUrl}" alt="${p.platform}" class="ott-logo">`
        : p.platform; // Fallback to text if logo isn't found
        
      return `<a href="${p.url}" target="_blank" class="ott-link">${content}</a>`;
    }).join(" ") // Join with a space instead of a bullet
  : "<em>No streaming info</em>";
  modalFav.textContent = favorites.includes(movie.id) ? "❤️" : "♡";
  modalFav.onclick = () => toggleFavorite(movie.id);
  modal.classList.add("open");
}

modalClose.addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("open");
});

/* === Event Listeners === */
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
minRating.addEventListener("input", () => {
  ratingLabel.textContent = `${minRating.value}+`;
  applyFilters();
});
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "popular";
  minRating.value = 0;
  ratingLabel.textContent = "0+";
  genresContainer.querySelectorAll(".genre-btn").forEach(btn => btn.classList.remove("active"));
  showAll.classList.add("active");
  showFavs.classList.remove("active");
  applyFilters();
});
showAll.addEventListener("click", () => {
  showAll.classList.add("active");
  showFavs.classList.remove("active");
  applyFilters();
});
showFavs.addEventListener("click", () => {
  showFavs.classList.add("active");
  showAll.classList.remove("active");
  applyFilters();
});

/* === Genres === */
function renderGenres() {
  const allGenres = new Set();
  MOVIES.forEach(m => m.genres.forEach(g => allGenres.add(g)));
  genresContainer.innerHTML = "";
  [...allGenres].sort().forEach(g => {
    const btn = document.createElement("button");
    btn.className = "genre-btn";
    btn.textContent = g;
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      applyFilters();
    });
    genresContainer.appendChild(btn);
  });
}

/* === Init === */
renderGenres();
applyFilters();
