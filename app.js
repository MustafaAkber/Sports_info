var firebaseConfig = {
    apiKey: "AIzaSyAl_1vBoZTilPOGmxVGupoz5ulNmsaf9W0",
    authDomain: "sports-info-7e6f2.firebaseapp.com",
    projectId: "sports-info-7e6f2",
    storageBucket: "sports-info-7e6f2.firebasestorage.app",
    messagingSenderId: "857685628233",
    appId: "1:857685628233:web:86c15bde71bc7da2083698"
};

var app = firebase.initializeApp(firebaseConfig);

var navLinks = document.getElementsByClassName("nav-link");

function clickChangeLink(element) {
    try {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("active");
        }
        element.classList.add("active");
    } catch (error) {
        console.log(error);
    }
}
function formSubmit(event) {
    event.preventDefault();
    try {
        var contactInputs = document.getElementsByClassName("contact-input");
        if (
            contactInputs[0].value == "" ||
            contactInputs[1].value == "" ||
            contactInputs[2].value == ""
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "all fields are not filled",
            });
        } else {
            var contactInfo = {
                userName: contactInputs[0].value,
                userEmail: contactInputs[1].value,
                userMessage: contactInputs[2].value,
            }
            firebase.database().ref("contacts").push(contactInfo);
            Swal.fire({
                title: "Good job!",
                text: "your message have been sent successfully",
                icon: "success",
            });
            for (let i = 0; i < contactInputs.length; i++) {
                contactInputs[i].value = "";
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function subscribe(event) {
    event.preventDefault();
    try {
        var input = document.getElementById("floatingInput");
        if (input.value == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter your email",
            });
        } else {
            firebase.database().ref("subscribers").push(input.value);
            Swal.fire({
                title: "Good job!",
                text: "you subscribed our website successfully",
                icon: "success",
            });
        }
        input.value = "";
    } catch (error) {
        console.log(error);
    }
}

function sportsData(game) {
    if (game == "cricket") {
        var sportsInfo = [
            '<img src="images/cricket.jpg" alt="" class="" />',
            "Cricket Information",
            "Each team has <strong>11 players</strong> on the field at a time, making a total of <strong>22 players</strong> in a match.",
            "Cricket involves two teams where one team bats to score runs while the other bowls and fields to restrict runs and take wickets. The main strategy is to score as many runs as possible and then defend that score by dismissing the opponent’s players. Strategies vary based on match format — aggressive in T20s, balanced in ODIs, and patient in Test matches.",
            "Yes, cricket is a <strong>team game</strong>. Teamwork between batsmen, bowlers, and fielders is crucial for success.",
            "The game is played on an oval field with a 22-yard pitch.",
            "Each team bats and bowls in turns (innings).",
            "The batting team tries to score runs by hitting the ball and running between wickets.",
            "The bowling team aims to get 10 players out to end the innings.",
            "The team with the most runs wins the match.",
            "<strong>Invented:</strong> England, 16th century",
            "<strong>Governing Body:</strong> International Cricket Council (ICC)",
            "<strong>Major Tournaments:</strong> ICC Cricket World Cup, T20 World Cup, The Ashes, Indian Premier League (IPL)",
            "<strong>Highest Individual Score (ODI):</strong> Rohit Sharma – 264 runs",
            "<strong>Most Runs (Tests):</strong> Sachin Tendulkar – 15,921 runs",
            "<strong>Most Wickets (Tests):</strong> Muttiah Muralitharan – 800 wickets",
            "<strong>Fastest T20 Century:</strong> Chris Gayle (30 balls)",
            "Cricket is mainly played in: <strong>India, Australia, England, Pakistan, South Africa, New Zealand, Sri Lanka, Bangladesh, West Indies</strong>, and emerging nations like <strong>Afghanistan, Ireland, Zimbabwe, Nepal, Netherlands, USA</strong>.",
        ];
        localStorage.setItem("spData", JSON.stringify(sportsInfo));
    } else if (game == "football") {
        var sportsInfo = [
            '<img src="images/football.jpg" alt="Football Image" class="" />',
            "Football (Soccer) Information",
            "Each team has <strong>11 players</strong> on the field at a time, including one goalkeeper. So, a total of <strong>22 players</strong> play in a match.",
            "Football involves two teams competing to score goals by getting the ball into the opponent’s net. The main strategy includes maintaining possession, creating goal-scoring opportunities through teamwork, passing, and tactical positioning, while defending to prevent the opponent from scoring.",
            "Yes, football is a <strong>team game</strong>. Coordination, communication, and teamwork are essential for both attacking and defending successfully.",
            "The game is played on a rectangular field called a <strong>pitch</strong>, with goals at each end.",
            "Each match lasts <strong>90 minutes</strong> (two halves of 45 minutes each) with a short halftime break.",
            "Players can use any part of their body except their hands and arms; only the goalkeeper can use hands within their penalty area.",
            "A goal is scored when the entire ball crosses the goal line between the posts and under the crossbar.",
            "The team that scores more goals wins the match. If the score is tied, the result may be a draw or go into extra time and penalties, depending on the competition.",
            "<strong>Invented:</strong> 19th century, England",
            "<strong>Governing Body:</strong> Fédération Internationale de Football Association (FIFA)",
            "<strong>Major Tournaments:</strong> FIFA World Cup, UEFA Champions League, Copa América, UEFA Euro, Africa Cup of Nations, English Premier League (EPL), La Liga",
            "<strong>Most World Cup Titles:</strong> Brazil – 5 times",
            "<strong>Most Goals (International):</strong> Cristiano Ronaldo – 120+ goals",
            "<strong>Most Goals (World Cup):</strong> Miroslav Klose – 16 goals",
            "<strong>Fastest Goal in World Cup:</strong> Hakan Şükür (Turkey) – 11 seconds (2002)",
            "Football is played in almost every country around the world. Major football nations include <strong>Brazil, Argentina, Germany, France, Italy, Spain, England, Portugal, Netherlands</strong>, and many others across <strong>Europe, South America, Africa, and Asia</strong>.",
        ];

        localStorage.setItem("spData", JSON.stringify(sportsInfo));
    } else if (game == "tennis") {
        var sportsInfo = [
            '<img src="images/tennis.jpg" alt="Tennis Image" class="" />',
            "Tennis Information",
            "A tennis match can be played as <strong>singles (1 vs 1)</strong> or <strong>doubles (2 vs 2)</strong>, meaning there are either 2 or 4 players on the court at a time.",
            "Tennis strategy focuses on consistency, shot placement, exploiting opponent weaknesses, and maintaining stamina. Players use different playing styles such as baseline play, serve-and-volley, or counter-punching to win points.",
            "Tennis can be both an <strong>individual and team game</strong>. Singles and doubles are individual formats, while team tournaments like the Davis Cup involve national teams.",
            "The game is played on a rectangular court divided by a net.",
            "Players use a racquet to hit a ball over the net into the opponent’s court.",
            "A point starts with a serve and continues until one player fails to return the ball within the court boundaries.",
            "Matches are played in sets — usually best of 3 or 5 sets — and a player must win at least 6 games (by a margin of 2) to win a set.",
            "The player who wins the majority of sets wins the match.",
            "<strong>Invented:</strong> Late 19th century, England",
            "<strong>Governing Body:</strong> International Tennis Federation (ITF)",
            "<strong>Major Tournaments:</strong> Wimbledon, US Open, French Open (Roland Garros), Australian Open (collectively known as the Grand Slams)",
            "<strong>Most Grand Slam Titles (Men):</strong> Novak Djokovic – 24 titles",
            "<strong>Most Grand Slam Titles (Women):</strong> Margaret Court – 24 titles",
            "<strong>Fastest Serve:</strong> Sam Groth – 263.4 km/h (163.7 mph)",
            "<strong>Longest Match:</strong> John Isner vs Nicolas Mahut (Wimbledon 2010) – 11 hours 5 minutes",
            "Tennis is played worldwide, with major nations including <strong>USA, UK, France, Spain, Switzerland, Serbia, Australia, Germany, Russia</strong>, and many others hosting professional tournaments.",
        ];
        localStorage.setItem("spData", JSON.stringify(sportsInfo));
    } else if (game == "athletics") {
        var sportsInfo = [
            '<img src="images/athletics.jpg" alt="Athletics Image" class="" />',
            "Athletics Information",
            "Athletics includes a wide range of events — <strong>track events, field events, and road races</strong>. The number of participants varies by event: some are individual (like sprints, jumps, throws), while others are team relays (4x100m, 4x400m).",
            "The strategy in athletics depends on the event. In sprints, explosive speed is key; in distance races, pacing and endurance matter; in field events, technique and strength dominate. Relay teams rely on perfect baton exchanges.",
            "Athletics can be both an <strong>individual and team-based sport</strong>. While most events are individual, countries compete as teams in championships and relays.",
            "Athletics competitions take place in stadiums with a <strong>400m running track</strong> and designated areas for field events like long jump, shot put, and javelin throw.",
            "Races start at the sound of a gun; the first athlete to cross the finish line wins.",
            "Field events measure distance or height achieved (e.g., longest jump or highest pole vault).",
            "Athletes must follow rules for lanes, false starts, and proper technique in throwing/jumping events.",
            "Winners are decided by fastest times, longest distances, or highest clearances depending on the event.",
            "<strong>Origin:</strong> Ancient Greece, as part of the original Olympic Games (776 BC)",
            "<strong>Governing Body:</strong> World Athletics (formerly IAAF)",
            "<strong>Major Tournaments:</strong> Olympic Games, World Athletics Championships, Diamond League, Commonwealth Games",
            "<strong>Fastest Man:</strong> Usain Bolt – 9.58 seconds (100m, 2009)",
            "<strong>Fastest Woman:</strong> Florence Griffith-Joyner – 10.49 seconds (100m, 1988)",
            "<strong>Longest Long Jump:</strong> Mike Powell – 8.95m (1991)",
            "<strong>Most Olympic Medals (Athletics):</strong> Paavo Nurmi – 12 medals (9 gold, 3 silver)",
            "Athletics is a global sport practiced in nearly every country, especially popular in <strong>USA, Jamaica, Kenya, Ethiopia, UK, China, Japan, Germany, Russia</strong>, and across Europe, Africa, and the Americas."
        ];

        localStorage.setItem("spData", JSON.stringify(sportsInfo));
    }
}

function newsPage(card) {
    localStorage.setItem("newsData", JSON.stringify(card.innerHTML));
    window.location.href = 'news.html';
}