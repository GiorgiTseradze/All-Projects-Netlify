//Data
const projects = [
    {
        name: "Playlist",
        link: "https://awesome-albattani-3f695f.netlify.app"
    },
    {
        name: "Random Choice Picker",
        link: "https://xenodochial-raman-17c832.netlify.app/"
    },
    {
        name: "Animated Navigation",
        link: "https://elegant-hugle-1e2145.netlify.app"
    },
    {
        name: "Progress Steps",
        link: "https://mystifying-sammet-cfda2a.netlify.app/"
    },
    {
        name: "Sound Board",
        link: "https://vigilant-cray-0fd6db.netlify.app/"
    },
    {
        name: "Event Keycode",
        link: "https://stupefied-archimedes-6114a1.netlify.app/"
    },
    {
        name: "Form Input Wave",
        link: "https://amazing-sammet-cb6bb7.netlify.app/"
    },
    {
        name: "FAQ",
        link: "https://eloquent-kilby-241a69.netlify.app/"
    },
    {
        name: "Blurry Loading",
        link: "https://confident-kepler-58d601.netlify.app/"
    },
    {
        name: "Expanding Cards",
        link: "https://vigorous-ride-6265d1.netlify.app/"
    },
    {
        name: "Incremeting Counter",
        link: "https://tender-ride-49dd3b.netlify.app/"
    },
    {
        name: "Rotating Navigation",
        link: "https://thirsty-joliot-c13d28.netlify.app/"
    }
]

//Creating boxes

const makeDivs = projects.forEach((pro) => {
    const div = document.createElement('div');
    const link = document.createElement('a');
    div.classList.add('box');
    link.setAttribute('href', pro.link);
    link.setAttribute('target', "_blank");
    link.innerText = pro.name;
    div.appendChild(link);
    document.getElementById('maindiv').appendChild(div);
})

//Managing boxes

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes(); 

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

