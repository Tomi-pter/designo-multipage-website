import air from "../public/assets/app-design/desktop/image-airfilter.jpg";
import eye from "../public/assets/app-design/desktop/image-eyecam.jpg";
import face from "../public/assets/app-design/desktop/image-faceit.jpg";
import todo from "../public/assets/app-design/desktop/image-todo.jpg";
import loop from "../public/assets/app-design/desktop/image-loopstudios.jpg";
import { v4 } from "uuid";

export const appData = [{
        name: "Airfilter",
        src: air,
        desc: "Solving the problem of poor indoor air quality by filtering the air",
        id: v4(),
    },
    {
        name: "Eyecam",
        src: eye,
        desc: "Product that lets you edit your favorite photos and videos at any time",
        id: v4(),
    },
    {
        name: "Faceit",
        src: face,
        desc: "Get to meet your favorite internet superstar with the faceit app",
        id: v4(),
    },
    {
        name: "Todo",
        src: todo,
        desc: "A todo app that features cloud sync with light and dark mode",
        id: v4(),
    },
    {
        name: "Loopstudios",
        src: loop,
        desc: "A VR experience app made for Loopstudios",
        id: v4(),
    },
];