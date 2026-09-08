/* =====================================================
                  OUR LITTLE WORLD ♡
===================================================== */


/* =====================================================
                 LIVE RELATIONSHIP TIMER
===================================================== */

const relationshipStart =
    new Date("2024-11-03T00:00:00");


function updateRelationshipCounter() {

    const now = new Date();

    const difference =
        now.getTime() -
        relationshipStart.getTime();


    /* TOTAL DAYS */

    const totalDays =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    /* YEARS / MONTHS / DAYS */

    let years =
        now.getFullYear() -
        relationshipStart.getFullYear();

    let months =
        now.getMonth() -
        relationshipStart.getMonth();

    let days =
        now.getDate() -
        relationshipStart.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    /*
       Current time of day.
       This keeps the HH:MM:SS
       continuously moving.
    */

    const hours =
        now.getHours();

    const minutes =
        now.getMinutes();

    const seconds =
        now.getSeconds();


    /* UPDATE */

    document.getElementById(
        "relationshipCounter"
    ).textContent =
        `${totalDays.toLocaleString()} days`;


    document.getElementById(
        "counterYears"
    ).textContent =
        `${years} ${
            years === 1
                ? "Year"
                : "Years"
        }`;


    document.getElementById(
        "counterMonths"
    ).textContent =
        `${months} ${
            months === 1
                ? "Month"
                : "Months"
        }`;


    document.getElementById(
        "counterDays"
    ).textContent =
        `${days} ${
            days === 1
                ? "Day"
                : "Days"
        }`;


    document.getElementById(
        "counterHours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "counterMinutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "counterSeconds"
    ).textContent =
        String(seconds).padStart(2, "0");
}


updateRelationshipCounter();

setInterval(
    updateRelationshipCounter,
    1000
);


/* =====================================================
                         SCROLL
===================================================== */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(
            sectionId
        );

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =====================================================
                      MEMORIES
===================================================== */

/*
    EXACT ORDER REQUESTED:

    01 → 9.jpeg  → Beginning
    02 → 1.jpeg  → First real meeting
    03 → 3.jpeg  → First anniversary
    04 → 5.jpeg  → His birthday
    05 → 8.jpeg  → Garden of Five Senses
    06 → 4.jpeg  → His college
    07 → 7.jpeg  → His family
    08 → 6.jpeg  → Your friends
    09 → 2.jpeg  → Your birthday
*/


const memories = [

    {
        image:
            "assets/images/9.jpeg",

        title:
            "The Beginning",

        subtitle:
            "where our little story began",

        date:
            "03 November 2024",

        story:
            "I was completely clueless that time. " +
            "I had absolutely no idea what the future " +
            "was going to bring us. We met online, " +
            "with no idea where this could possibly go. " +
            "Then you proposed to me, and somehow, " +
            "I said yes. ♡ When I started spending " +
            "more and more time with you, you slowly " +
            "made me fall in love with you. Later, " +
            "when I got college in Kakinada, everything " +
            "started becoming real. We finally got the " +
            "chance to spend time together offline, and " +
            "that experience was one of the most beautiful " +
            "things for me. You were caring, you never " +
            "disappointed me, and most importantly, " +
            "you made me feel safe. And that boy in this " +
            "first photo became my boyfriend, my safe " +
            "place, and such an important part of my life."
    },


    {
        image:
            "assets/images/1.jpeg",

        title:
            "From Screen To Real Life",

        subtitle:
            "our first meeting",

        date:
            "the day we finally met",

        story:
            "Our first meeting in real life was something " +
            "I will always remember. We met at a Shiva " +
            "temple, and somehow that made the moment " +
            "feel even more special. We were already " +
            "so deeply in love with each other through " +
            "our phones, but standing in front of each " +
            "other was completely different. We were " +
            "almost like strangers for a moment, not " +
            "knowing what to say or how to act. And yes, " +
            "this photo is completely unfiltered and a " +
            "little weird, but maybe that's what makes " +
            "it special. It captured the real us. That " +
            "meeting made me realise how special this " +
            "person was to me, and somewhere inside I " +
            "already knew that this man would always be mine."
    },


    {
        image:
            "assets/images/3.jpeg",

        title:
            "One Whole Year Of Us",

        subtitle:
            "our first anniversary",

        date:
            "03 November",

        story:
            "After that, we spent so much time together " +
            "and created countless little memories. Then " +
            "came the 3rd of November — our first anniversary. " +
            "We had already spent our first year together, " +
            "most of it online, but those months gave us " +
            "so many memories and so much understanding " +
            "of each other. Finally celebrating our " +
            "anniversary while being together in front " +
            "of each other felt completely different. " +
            "That day was such a beautiful experience " +
            "for me. I was slowly understanding more and " +
            "more that you were genuinely good for me. " +
            "My first anniversary became one of the best " +
            "experiences of my life."
    },


    {
        image:
            "assets/images/5.jpeg",

        title:
            "Your Birthday",

        subtitle:
            "the day I celebrated you",

        date:
            "02 March",

        story:
            "Then came your birthday — the second big " +
            "celebration we experienced together. It was " +
            "my first time being with you on your birthday, " +
            "and I wanted to make the day as special as " +
            "possible for you. I tried my absolute best " +
            "to make you laugh, smile and feel happy. " +
            "I wanted your birthday to become one of those " +
            "days you would always remember. And honestly, " +
            "seeing you happy made the entire day special " +
            "for me too. I wasn't just celebrating your " +
            "birthday — I was celebrating the person I " +
            "was lucky enough to have in my life."
    },


    {
        image:
            "assets/images/8.jpeg",

        title:
            "Where We Fell In Love",

        subtitle:
            "a place that knows our story",

        date:
            "Garden Of Five Senses",

        story:
            "Some moments are difficult to explain because " +
            "they simply feel different. This place was " +
            "one of those moments. We visited the Garden " +
            "of Five Senses and spent so much time together. " +
            "We talked, explored, laughed and slowly got " +
            "to know each other even more. It became one " +
            "of those places where something special happened " +
            "between us — something we both probably cannot " +
            "completely explain. But this photo carries " +
            "that feeling. This was one of the places where " +
            "we fell in love a little more."
    },


    {
        image:
            "assets/images/4.jpeg",

        title:
            "You Entered My World",

        subtitle:
            "visiting your college",

        date:
            "a fun day together",

        story:
            "This photo holds the memory of me visiting " +
            "your college and getting the chance to meet " +
            "your friends. It was such a great experience " +
            "because I got to see another part of your " +
            "world. We spent such a fun day together, " +
            "especially because of the workshop and all " +
            "the games. Everything felt relaxed and fun. " +
            "I loved getting to know the people around you " +
            "and seeing you in your own college world. " +
            "It was one of those simple days that somehow " +
            "became a really good memory."
    },


    {
        image:
            "assets/images/7.jpeg",

        title:
            "Meeting Your Family",

        subtitle:
            "entering another part of your world",

        date:
            "at your nani's house",

        story:
            "This might be one of the craziest and most " +
            "nervous moments for me. I was standing in " +
            "your nani's house, meeting your mom and your " +
            "nani for the first time. I was honestly so " +
            "nervous and I didn't even know how to explain " +
            "what I was feeling. But you were right there " +
            "with me. I still remember how you held my hand " +
            "in front of your mom and tried to answer all " +
            "the questions she asked me. That was honestly " +
            "so cute. You supported me through everything. " +
            "And then I got to know your family more. Your " +
            "mom, your parents, your nani — everyone was so " +
            "caring and welcoming. I loved how they treated " +
            "me and how naturally they made me feel loved."
    },


    {
        image:
            "assets/images/6.jpeg",

        title:
            "You Met My World",

        subtitle:
            "meeting my friends",

        date:
            "Gurudwara • Sonna Nursery",

        story:
            "This was the day you entered my world a little " +
            "more. You met my friends, and I know you were " +
            "a little nervous that day. You weren't really " +
            "talking much with them, and I remember noticing " +
            "how simple and straightforward you were. " +
            "Honestly, I thought you should try talking " +
            "to them at least once. ♡ But the day itself " +
            "was really nice. We explored different places " +
            "together, visited the Gurudwara and then went " +
            "to Sonna Nursery with my friends. You took " +
            "care of me and everyone around us, and seeing " +
            "you being such a good boyfriend in front of " +
            "my friends made me really happy."
    },


    {
        image:
            "assets/images/2.jpeg",

        title:
            "You Made Me Your Princess",

        subtitle:
            "my birthday",

        date:
            "the day you made everything perfect",

        story:
            "I honestly don't have enough words for this " +
            "day. You celebrated my birthday like I was " +
            "the princess of your world. Everything was " +
            "just perfect. The cafe was so aesthetic and " +
            "beautiful, the cupcake you brought for me " +
            "was so thoughtful, and the red roses matched " +
            "my outfit so perfectly. Your gifts were so " +
            "meaningful to me, and what made everything " +
            "even more special was that you came to pick " +
            "me up from my hostel and then took me back " +
            "again. You thought about everything. You made " +
            "my entire day feel special. And somehow, that " +
            "day made me fall for you all over again. " +
            "Thank you for coming into my life. ♡"
    }

];


let currentMemory = 0;


/* =====================================================
                     OPEN MEMORIES
===================================================== */

function openMemories() {

    const modal =
        document.getElementById(
            "memoryModal"
        );

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

    currentMemory = 0;

    displayMemory(
        currentMemory
    );

    createFairyDust();
}


/* =====================================================
                    CLOSE MEMORIES
===================================================== */

function closeMemories() {

    document
        .getElementById(
            "memoryModal"
        )
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* =====================================================
                   DISPLAY MEMORY
===================================================== */

function displayMemory(index) {

    const memory =
        memories[index];

    const image =
        document.getElementById(
            "memoryImage"
        );


    /* Magical photo transition */

    image.style.opacity = "0";

    image.style.transform =
        "scale(.90) rotate(4deg)";


    setTimeout(() => {

        image.src =
            memory.image;

        image.onload = () => {

            image.style.opacity =
                "1";

            image.style.transform =
                "scale(1) rotate(0deg)";
        };

    },180);


    document.getElementById(
        "memoryNumber"
    ).textContent =
        `Chapter ${
            String(index + 1)
            .padStart(2,"0")
        }`;


    document.getElementById(
        "memoryTitle"
    ).textContent =
        memory.title;


    document.getElementById(
        "memorySubtitle"
    ).textContent =
        memory.subtitle;


    document.getElementById(
        "memoryStory"
    ).textContent =
        memory.story;


    document.getElementById(
        "memoryDate"
    ).textContent =
        memory.date;


    updateMemoryDots(index);
}


/* =====================================================
                    MEMORY DOTS
===================================================== */

function updateMemoryDots(index) {

    const container =
        document.getElementById(
            "memoryDots"
        );

    container.innerHTML = "";


    memories.forEach(
        (memory, i) => {

            const dot =
                document.createElement(
                    "span"
                );

            dot.className =
                "memory-dot";


            if (i === index) {

                dot.classList.add(
                    "active"
                );

            }


            container.appendChild(
                dot
            );

        }
    );
}


/* =====================================================
                     NEXT MEMORY
===================================================== */

function nextMemory() {

    currentMemory++;

    if (
        currentMemory >=
        memories.length
    ) {

        currentMemory = 0;

    }

    displayMemory(
        currentMemory
    );

    createFairyDust();
}


/* =====================================================
                    PREVIOUS MEMORY
===================================================== */

function previousMemory() {

    currentMemory--;

    if (currentMemory < 0) {

        currentMemory =
            memories.length - 1;

    }

    displayMemory(
        currentMemory
    );

    createFairyDust();
}


/* =====================================================
                     FAIRY DUST
===================================================== */

function createFairyDust() {

    const chapter =
        document.getElementById(
            "memoryChapter"
        );


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const sparkle =
            document.createElement(
                "span"
            );

        sparkle.textContent =
            Math.random() > .5
                ? "✦"
                : "✧";


        sparkle.style.position =
            "absolute";

        sparkle.style.left =
            `${Math.random() * 90 + 5}%`;

        sparkle.style.top =
            `${Math.random() * 90 + 5}%`;

        sparkle.style.color =
            "#e3a3a8";

        sparkle.style.fontSize =
            `${8 + Math.random() * 14}px`;

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex =
            "50";


        chapter.appendChild(
            sparkle
        );


        sparkle.animate(

            [
                {
                    opacity: 0,

                    transform:
                        "translateY(10px) scale(0)"
                },

                {
                    opacity: 1,

                    transform:
                        "translateY(-10px) scale(1)"
                },

                {
                    opacity: 0,

                    transform:
                        "translateY(-30px) scale(0)"
                }

            ],

            {
                duration:
                    900 +
                    Math.random() * 800,

                easing:
                    "ease-out"
            }

        );


        setTimeout(
            () => sparkle.remove(),
            1800
        );

    }

}


/* =====================================================
                      THREE LETTERS
===================================================== */

const letters = [

    {
        icon: "💌",

        label: "LETTER ONE",

        title:
            "To My Arshuuuu ♡",

        paragraphs: [

            "I don't know if words can ever properly explain how much you mean to me.",

            "You came into my life in a way I never expected. We started online, and somehow that little beginning became one of the most beautiful parts of my life.",

            "You became someone I could trust, someone who made me feel safe, cared for and loved.",

            "Thank you for becoming my favourite person and for making an unexpected beginning become our little world.",

            "Always yours,<br>Nancyyy ♡"

        ]
    },


    {
        icon: "🌷",

        label: "LETTER TWO",

        title:
            "For All The Little Things ♡",

        paragraphs: [

            "Sometimes I think it's not the big things that make me love you the most. It's all the tiny things.",

            "The way you hold my hand when I'm nervous. The way you take care of me. The way you try to make me laugh when I'm upset.",

            "The way you support me, even when you don't have the perfect words. Those little moments stay with me.",

            "I hope you know that I notice them. I remember them. And I love you for every single one of them.",

            "With all my heart,<br>Nancyyy ♡"

        ]
    },


    {
        icon: "💗",

        label: "LETTER THREE",

        title:
            "For Everything Still Waiting For Us ♡",

        paragraphs: [

            "We've already lived through so many little chapters together, but somehow I feel like our best ones are still waiting for us.",

            "There are still places we haven't visited, birthdays we haven't celebrated, random days we haven't turned into memories yet.",

            "I want to keep discovering life with you. More laughter, more adventures, more silly photos, more quiet moments and more reasons to fall in love with you again.",

            "Whatever comes next, I hope we get to experience it together.",

            "Forever choosing you,<br>Nancyyy ♡"

        ]
    }

];


function openLetters() {

    openLetter(0);

}


function openLetter(index) {

    const letter =
        letters[index];


    document.getElementById(
        "letterIcon"
    ).textContent =
        letter.icon;


    document.getElementById(
        "letterLabel"
    ).textContent =
        letter.label;


    document.getElementById(
        "letterTitle"
    ).textContent =
        letter.title;


    const text =
        document.getElementById(
            "letterText"
        );


    text.innerHTML = "";


    letter.paragraphs.forEach(
        paragraph => {

            const p =
                document.createElement(
                    "p"
                );

            p.innerHTML =
                paragraph;

            text.appendChild(p);

        }
    );


    document
        .getElementById(
            "letterModal"
        )
        .classList.add("active");


    document.body.style.overflow =
        "hidden";
}


function closeLetters() {

    document
        .getElementById(
            "letterModal"
        )
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* =====================================================
                     SURPRISE
===================================================== */

function openSurprise() {

    document
        .getElementById(
            "surpriseModal"
        )
        .classList.add("active");

    document.body.style.overflow =
        "hidden";
}


function closeSurprise() {

    document
        .getElementById(
            "surpriseModal"
        )
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* =====================================================
                       PLACES
===================================================== */

function showFeature(feature) {

    if (feature === "places") {

        scrollToSection(
            "places"
        );

    }

}


/* =====================================================
                   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document.getElementById(
                "memoryModal"
            );


        if (
            modal.classList.contains(
                "active"
            )
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                nextMemory();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousMemory();

            }


            if (
                event.key ===
                "Escape"
            ) {

                closeMemories();

            }

        }

    }
);


/* =====================================================
                    SWIPE SUPPORT
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


const memoryChapter =
    document.getElementById(
        "memoryChapter"
    );


if (memoryChapter) {

    memoryChapter.addEventListener(
        "touchstart",
        function(event) {

            touchStartX =
                event.changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


    memoryChapter.addEventListener(
        "touchend",
        function(event) {

            touchEndX =
                event.changedTouches[0]
                    .screenX;


            const difference =
                touchStartX -
                touchEndX;


            if (
                Math.abs(difference)
                < 50
            ) {

                return;

            }


            if (difference > 0) {

                nextMemory();

            } else {

                previousMemory();

            }

        },
        {
            passive: true
        }
    );

}


/* =====================================================
                       ESCAPE
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeLetters();

            closeSurprise();

        }

    }
);


/* =====================================================
                         READY
===================================================== */

console.log(
    "♡ Our Little World is ready."
);

console.log(
    "Memory order: 9 → 1 → 3 → 5 → 8 → 4 → 7 → 6 → 2"
);
