var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
var today = new Date();
var firstday = new Date(2017, 9, 24);
today.setHours(today.getHours()-4); 

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;
      botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; 
      botRegexSiege = /^\/siege/; botRegexKill = /^\/kill/i;
      botRegexGarf = /^\/garfield/; botRegexHelp = /^\/help/; botRegexCommands = /^\/commands/;
      botRegexTest1 = /^\/test1/; 
      botRegex69 = /69/; botRegexKnicks = /Knicks/; 
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegex69.test(request.text)) {
    this.res.writeHead(200);
    postMessage("nice");
    this.res.end();
  } 
  else if(request.text && botRegexKnicks.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Fuck Jim Dolan");
    this.res.end();
  }  
  else if(request.text && botRegexTest1.test(request.text)) {
    this.res.writeHead(200);
    postMessage("date:" + today.getHours() + today.getMinutes());
    this.res.end();
  } 
  else if(request.text && botRegexCommands.test(request.text)) {
    this.res.writeHead(200);
    postMessage("commands: /help /garfield \n/kill");
    this.res.end();
  } 
  else if(request.text && botRegexHelp.test(request.text)) {
    if(request.text.substring(6, request.text.length) == "kill" ) {
      this.res.writeHead(200);
      postMessage("Who do you want me to kill?");
      this.res.end();
    }
    else {
      this.res.writeHead(200);
      postMessage("What command do you need help with?");
      this.res.end();
    }
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/nml18/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/nml18/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/nml18/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexKill.test(request.text)) {
    if(request.text.substring(6, request.text.length) == "Max" || request.text.substring(6, request.text.length) == "max" 
      || request.text.substring(6, request.text.length) == "Comando" || request.text.substring(6, request.text.length) == "comando" ) {
      this.res.writeHead(200);
      postMessage("Killbots deployed. Targeting: 38 Matthew Road, Branford, CT");
      postMessage("http://33.media.tumblr.com/15c616a60297c1e3df46026b5c2e2d05/tumblr_mzi9vq53P51rtsuwto1_500.gif");
      this.res.end();
    }
    else if(request.text.substring(6, request.text.length) == "Jeff" || request.text.substring(6, request.text.length) == "jeff" 
      || request.text.substring(6, request.text.length) == "Irwin" || request.text.substring(6, request.text.length) == "irwin" ) {
      this.res.writeHead(200);
      postMessage("Pleasurebots deployed. Targeting: 651 St. Marks Avenue, Brooklyn, NY");
      postMessage("http://geekologie.com/2014/03/13/pole-dancing-robots.gif");
      this.res.end();
    }
    else if(request.text.substring(6, request.text.length) == "Adam" || request.text.substring(6, request.text.length) == "adam" 
      || request.text.substring(6, request.text.length) == "Doroski" || request.text.substring(6, request.text.length) == "doroski" ) {
      this.res.writeHead(200);
      postMessage("Who?");
      this.res.end();
    }
    else if(request.text.substring(6, request.text.length) == "Lee" || request.text.substring(6, request.text.length) == "lee" 
      || request.text.substring(6, request.text.length) == "Mike" || request.text.substring(6, request.text.length) == "mike" ) {
      this.res.writeHead(200);
      postMessage("Gay pleasurebots deployed.");
      postMessage("https://media.giphy.com/media/fnuNpzOFxXnPO/giphy.gif");
      this.res.end();
    }    
    else if(request.text.substring(6, request.text.length) == "Scott" || request.text.substring(6, request.text.length) == "scott" 
      || request.text.substring(6, request.text.length) == "Ofrias" || request.text.substring(6, request.text.length) == "ofrias" ) {
      this.res.writeHead(200);
      postMessage("Ketchup bots deployed.");
      postMessage("https://i.imgur.com/y56WI.gif");
      this.res.end();
    }    
    else if(request.text.substring(6, request.text.length) == "Rich" || request.text.substring(6, request.text.length) == "rich" 
      || request.text.substring(6, request.text.length) == "Mullen" || request.text.substring(6, request.text.length) == "mullen"
      || request.text.substring(6, request.text.length) == "Moon" || request.text.substring(6, request.text.length) == "moon"     ) {
      this.res.writeHead(200);
      postMessage("Droidekas deployed.");
      postMessage("http://cdn3.simplebotics.com/wp-content/uploads/2015/10/droideka.gif");
      this.res.end();
    }
    else {
      postMessage("Who would you like me to kill?");
    }
  } 
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexGarf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/" + today.getFullYear() + '/' + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()) + '.gif');
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
