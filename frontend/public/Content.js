const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    :root {
        --blackish: #222;
        --whiteish: #e5e5e5;
        --red:  #ff5e56;
        --yellow: #ffbd2e;
        --green: #27c93f;
        --backgroundSize: 300px;
    }
    
    body {
      box-sizing: border-box;
      margin:0;
      height: 100vh;
      font-family: "Open Sans", sans-serif;
      background-image: url(https://img.freepik.com/free-vector/seamless-pattern_1159-5086.jpg?size=626&ext=jpg);
      background-size: var(--backgroundSize);
      color: var(--whiteish);
      display: grid;
      place-items: center;
      animation: movingBackground 5s linear infinite;
    }

    body:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0,0.9);
        z-index: 1;
    }
    @keyframes movingBackground {
        from { background-position: 0 0;}
        to {background-position: var(--backgroundSize) var(--backgroundSize);}
    }

    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
      z-index: 4;
    }
    ._404 {
      font-size: 60px;
      position: relative;
      display: inline-block;
      z-index: 3;
      height: 250px;
      letter-spacing: 10px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 6px;
      font-size: 3em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: 2;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: 2;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: 2;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear infinite;
      -moz-animation: moveclouds 15s linear infinite;
      -o-animation: moveclouds 15s linear infinite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear infinite;
      -moz-animation: moveclouds 17s linear infinite;
      -o-animation: moveclouds 17s linear infinite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear infinite;
      -moz-animation: moveclouds 18s linear infinite;
      -o-animation: moveclouds 18s linear infinite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear infinite;
      -moz-animation: moveclouds 20s linear infinite;
      -o-animation: moveclouds 20s linear infinite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
    <div class="modal">
        
    </div>
    <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
    </div>
    <div class='c'>
        <div class='_404'>GET BACK TO WORK</div>
        <hr>
        <div class='_1'>${pageName} IS NOT ALLOWED</div>
        <div class='_2'>STUDYING > ${pageName}</div>
    </div>
     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.roblox.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("ROBLOX");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
  }