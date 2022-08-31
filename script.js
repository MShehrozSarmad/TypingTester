const paras = [
    "The time had come for Nancy to say goodbye. She had been dreading this moment for a good six months, and it had finally arrived despite her best efforts to forestall it. No matter how hard she tried, she couldn't keep the inevitable from happening. So the time had come for a normal person to say goodbye and move on. It was at this moment that Nancy decided not to be a normal person.",
    "The headache wouldn't go away. She's taken medicine but even that didn't help. The monstrous throbbing in her head continued. She had this happen to her only once before in her life and she realized that only one thing could be happening.",
    "Brenda never wanted to be famous. While most of her friends dreamed about being famous, she could see the negative aspects that those who wanted to be famous seemed to ignore. The fact that you could never do anything in public without being mobbed and the complete lack of privacy was something that she never wanted to experience.",
    "It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day.",
    "I checked in for the night at Out O The Way motel. What a bad choice that was. First I took a shower and a spider crawled out of the drain. Next, the towel rack fell down when I reached for the one small bath towel. This allowed the towel to fall halfway into the toilet. ",
    "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time.",
    "Eating raw fish didn't sound like a good idea. It's a delicacy in Japan, didn't seem to make it any more appetizing. Raw fish is raw fish, delicacy or not.",
    "Finding the truth wouldn't be easy, that's for sure. Then there was the question of whether or not Jane really wanted to know the truth. That's the thing that bothered her most. It wasn't the difficulty of actually finding out what happened that was the obstacle, but having to live with that information once it was found.",
    "Do you think you're living an ordinary life? You are so mistaken it's difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?",
    "It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences. He knew in his heart that the sacrifice he made was done with love and not hate no matter how others decided to spin it.",
    "Her breath exited her mouth in big puffs as if she were smoking a cigarette. The morning dew had made her clothes damp and she shivered from the chill in the air. There was only one thing that could get her up and out this early in the morning.",
    "With six children in tow, Catherine raced to the airport departing gate. This wasn't an easy task as the children had other priorities than to get to the gate. She knew that she was tight on time and the frustration came out as she yelled at the kids to keep up.",
    "It doesn't take much to touch someone's heart, Daisy said with a smile on her face. It's often just the little things you do that can change a person's day for the better. Daisy truly believed this to be the way the world worked, but she didn't understand that she was merely a robot that had been programmed to believe this.",
    "Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience. As she contemplated the situation she found herself in, she knew she'd gotten herself in a little more than she bargained for.",
    "Her hand was balled into a fist with her keys protruding out from between her fingers. This was the weapon her father had shown her how to make when she walked alone to her car after work. She wished that she had something a little more potent than keys between her fingers. It would have been nice to have some mace or pepper spray.",
    "Finding the red rose in the mailbox was a pleasant surprise for Sarah. She didn't have a boyfriend or know of anyone who was interested in her as anything more than a friend. There wasn't even a note attached to it. Although it was a complete mystery, it still made her heart jump and race a little more than usual. ",
    "Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging.",
    "You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.",
    "He heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. It wasn't a gunshot, it wasn't a gunshot, he repeated under his breathlessness as he continued to sprint.",
    "She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens. You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her.",
    "Another option you have is choosing the number of syllables in the words you speak. You probably have never considered this option before, but you have it every time you open your mouth and speak. You make so many choices like this that you never even think about, but you have the choice with each one.",
    "He wandered down the stairs and into the basement. The damp, musty smell of unuse hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years.",
    "It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next",
    "Terrance knew that sometimes it was simply best to stay out of it. He kept repeating this to himself as he watched the scene unfold. He knew that nothing good would come of him getting involved. It was far better for him to stay on the sidelines and observe. He kept yelling this to himself inside his head as he walked over to the couple and punched the man in the face.",
    "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened.",
    "It was a rat's nest. Not a literal one, but that is what her hair seemed to resemble every morning when she got up. It was going to take at least an hour to get it under control and she was sick and tired of it. She peered into the mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers.",
    "They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she knew the world would be there to see. The only one who had disagreed with this sentiment was her brother. He had told her that you don't show the world what you're made of when they are all watching,"
];

const welcome = document.getElementById('welcome');
const strings = document.getElementById('strings');
const button = document.getElementById('rslt');
const text = document.getElementById('textarea');
const prnt = document.getElementById('prnt');
let strtTime, endTime;

function wlcm(){
    let nam = prompt("What is your name?", "sheri");
    welcome.innerText = `Welcome ${nam} !`;
}

function countWords(txt){
    var numberOfLineBreaks = (txt.match(/\n/g)||[]).length;
    let noOfWords = txt.split(" ").length + numberOfLineBreaks;
    return noOfWords;
}

function compareWords (str1, str2){
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function (item, index) {
        if (item == words2[index]) {cnt ++;}
    });
    let errorWords = ( words1.length - cnt );
    return `${cnt}/${words1.length} Correction Rate with ${errorWords} Errors`;
}

function startTest(){
    globalThis.rndm = Math.floor(Math.random() * paras.length);
    prnt.innerHTML = `
        <p id="strings">
            ${paras[rndm]}
        </p>
    `;
    let date = new Date();
    strtTime = date.getTime();
}

function endTest(){
    let date = new Date();
    endTime = date.getTime();
    let ttlTime = ((endTime-strtTime)/1000);
    let nofwords = countWords(text.value);
    let speed = Math.round(nofwords/ttlTime * 60);
    let wrdsresult = compareWords(paras[rndm], text.value);
    prnt.innerHTML = `
        <h3>Speed:&ThickSpace;</h3>
        <div id='flx'> You typed at speed of 
        <h4>&ThickSpace;${speed}&ThickSpace;</h4    >
        WPM </div>
        <br>
        <h3>Accuracy:&ThickSpace;</h3>
        <p>${wrdsresult}</p>
    `;
}

function Test(){
    if(this.innerText == 'Start'){
        text.disabled = false;
        text.value = '';
        button.innerText = 'Done';
        startTest();
    } else if(this.innerText == 'Done'){
        text.disabled = true;
        button.innerText = 'Start';
        endTest();
    }
}

button.addEventListener('click', Test);
wlcm();



