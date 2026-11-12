import forest from "../assets/forest.svg";
import videoPoster from "../assets/video-poster.svg";
import thumb1 from "../assets/thumb1.svg";
import thumb2 from "../assets/thumb2.svg";
import thumb3 from "../assets/thumb3.svg";
import thumb4 from "../assets/thumb4.svg";

const longText =
  "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.";

const moreText =
  "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.";

export const posts = [
  {
    id: 1,
    title: "TITLE HEADING",
    description: "Title description",
    date: "April 7, 2014",
    image: forest,
    type: "image",
    text: longText,
    more: moreText,
    comments: 0,
  },
  {
    id: 2,
    title: "TITLE HEADING",
    description: "Title description",
    date: "April 7, 2014",
    image: videoPoster,
    type: "video",
    text: longText,
    more: moreText,
    comments: 0,
  },
  {
    id: 3,
    title: "TITLE HEADING",
    description: "Title description",
    date: "April 7, 2014",
    image: null,
    type: "text",
    text: longText,
    more: moreText,
    comments: 0,
  },
];

export const popularPosts = [
  { id: 1, title: "Lorem", subtitle: "Sed mattis nunc", image: thumb1 },
  { id: 2, title: "Ipsum", subtitle: "Praes tinci sed", image: thumb2 },
  { id: 3, title: "Dorum", subtitle: "Ultricies congue", image: thumb3 },
  { id: 4, title: "Mingsum", subtitle: "Lorem ipsum dipsum", image: thumb4 },
];

export const tags = [
  "Travel", "New York", "London", "IKEA", "NORWAY", "DIY",
  "Ideas", "Baby", "Family", "News", "Clothing", "Shopping", "Sports", "Games",
];
