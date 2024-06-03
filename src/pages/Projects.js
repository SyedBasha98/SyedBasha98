import React from 'react';
import ProjectCard from '../components/MP4ProjectCard';
import '../styles/Project.css';
import ProjectsPage from './ProjectsPage';

const staticProjects = [
  {
    title: "Offers Section",
    description: "Displays various offers and deals available on the platform.",
    imageSmall: "https://i.ibb.co/JKSHYsG/Screenshot-2024-05-21-142216.png",
    imageLarge: "https://i.ibb.co/LRMDkwQ/Screenshot-2024-05-21-142406.png", 
    link: "https://todos.ccbp.tech"
  },
  {
    title: "Food Page",
    description: "Showcases different cuisines and food-related content.",
    imageLarge: "https://i.ibb.co/8XYDcgh/Screenshot-2024-05-21-142841.png", 
    imageSmall: "https://i.ibb.co/JKxjzpx/Screenshot-2024-05-21-142719.png",
    link: "https://syedfoodpage.ccbp.tech"
  },
  {
    title: "Hotel Page",
    description: "Displays information about hotels and accommodations.",
    imageLarge: "https://i.ibb.co/7vfNqNM/Screenshot-2024-05-21-224149.png",
    imageSmall: "https://i.ibb.co/KXz0WxX/Screenshot-2024-05-21-224335.png",
    link: "https://syedhotelpage.ccbp.tech"
  },
  {
    title: "Cricket Page",
    description: "Provides updates and news about cricket.",
    imageLarge: "https://i.ibb.co/JkrzVJ0/Screenshot-2024-05-21-224551.png",
    imageSmall: "https://i.ibb.co/fDQMgrm/Screenshot-2024-05-21-224721.png", 
    link: "https://syedcricketpage.ccbp.tech"
  },
  {
    title: "News Page",
    description: "Displays the latest news updates.",
    imageLarge: "https://i.ibb.co/p1LZy6r/Screenshot-2024-05-21-224934.png", 
    imageSmall: "https://i.ibb.co/BKXR8xr/Screenshot-2024-05-21-225127.png", 
    link: "https://syednewspage.ccbp.tech"
  },
  {
    title: "COVID-19 Page",
    description: "Provides information and updates about COVID-19.",
    imageLarge: "https://i.ibb.co/zPZ0wQm/Screenshot-2024-05-21-225321.png",
    imageSmall: "https://i.ibb.co/WsD8cTt/Screenshot-2024-05-21-225338.png",
    link: "https://syedcovid19page.ccbp.tech"
  },
  {
    title: "Goa Page",
    description: "Showcases popular tourist destinations in Goa.",
    imageLarge: "https://i.ibb.co/dQFqPJc/Screenshot-2024-05-21-225708.png", 
    imageSmall: "https://i.ibb.co/phxS2JM/Screenshot-2024-05-21-225733.png", 
     link: "https://syedgoapage.ccbp.tech"
  },
  {
    title: "Movie Page",
    description: "Displays information about popular movies.",
    imageLarge: "https://i.ibb.co/TLN6VtS/Screenshot-2024-05-21-232234.png", 
    imageSmall: "https://i.ibb.co/S6GPt4R/Screenshot-2024-05-21-232305.png", 
    link: "https://syedmoviepage.ccbp.tech"
  },
  {
    title: "Mobile Page",
    description: "Provides information and updates about mobile devices.",
    imageLarge: "https://i.ibb.co/GvWQjhh/Screenshot-2024-05-21-232533.png", 
    imageSmall: "https://i.ibb.co/Z8mywHS/Screenshot-2024-05-21-232552.png", 
    link: "https://syedmobilepage.ccbp.tech"
  },
  {
    title: "Conference Page",
    description: "Displays information about upcoming conferences.",
    imageLarge: "https://i.ibb.co/P4JJJSg/Screenshot-2024-05-21-232922.png", 
    imageSmall: "https://i.ibb.co/g3NcfDV/Screenshot-2024-05-21-233003.png", 
     link: "https://syedconfrence.ccbp.tech"
  },
  {
    title: "Question Page",
    description: "Provides a platform for asking and answering questions.",
    imageLarge: "https://i.ibb.co/0XhKYZ7/Screenshot-2024-05-21-233401.png", 
    imageSmall: "https://i.ibb.co/5GYQT4p/Screenshot-2024-05-21-233443.png", 
    link: "https://syedquestion.ccbp.tech"
  },
  {
    title: "Music Page",
    description: "Showcases a collection of music tracks.",
    imageLarge: "https://i.ibb.co/cFwj8FT/Screenshot-2024-05-22-070708.png", 
    imageSmall: "https://i.ibb.co/88S94KC/Screenshot-2024-05-22-070741.png", 
    link: "https://syedmusicpage.ccbp.tech"
  },
  {
    title: "Foundation Page",
    description: "Provides information about the organization's foundation.",
    imageLarge: "https://i.ibb.co/BN5Cjyn/Screenshot-2024-05-22-073133.png", 
    imageSmall: "https://i.ibb.co/GtTsTnw/Screenshot-2024-05-22-073154.png", 
     link: "https://syedfoundation.ccbp.tech"
  },
  {
    title: "Store Page",
    description: "Displays products available for purchase.",
    imageLarge: "https://i.ibb.co/wQpw5XT/Screenshot-2024-05-22-073622.png", 
    imageSmall: "https://i.ibb.co/qpYzssw/Screenshot-2024-05-22-073659.png", 
    link: "https://syedstorepage.ccbp.tech",
  },
  {
    title: "Flat Page",
    description: "Provides information about available properties.",
    imageLarge: "https://i.ibb.co/bv3p9c2/Screenshot-2024-05-22-073925.png", 
    imageSmall: "https://i.ibb.co/Sdfvnsk/Screenshot-2024-05-22-073953.png", 
     link: "https://syedflatpage.ccbp.tech"
  },
  {
    title: "Article Page",
    description: "Showcases articles on various topics.",
    imageLarge: "https://i.ibb.co/yf4FNw4/Screenshot-2024-05-22-080149.png", 
    imageSmall: "https://i.ibb.co/Z2013VJ/Screenshot-2024-05-22-080220.png", 
     link: "https://syedarticlepage.ccbp.tech/"
  },
  {
    title: "Header Page",
    description: "Provides information about the website header.",
    imageLarge: "https://i.ibb.co/hMB5Pgs/Screenshot-2024-05-22-080424.png", 
    imageSmall: "https://i.ibb.co/tX04ZkT/Screenshot-2024-05-22-080447.png", 
     link: "https://syedheaderpage.ccbp.tech"
  },
  {
    title: "Navbar Page",
    description: "Displays the website navigation bar.",
    imageLarge: "https://i.ibb.co/FgkTWXk/Screenshot-2024-05-22-080710.png", 
    imageSmall: "https://i.ibb.co/HhqD4b9/Screenshot-2024-05-22-080729.png", 
    link: "https://syednavbar.ccbp.tech"
  },
  {
    title: "New Portfolio Page",
    description: "Showcases the latest portfolio designs.",
    imageLarge: "https://i.ibb.co/rsNrDXp/Screenshot-2024-05-22-080943.png", 
    imageSmall: "https://i.ibb.co/zbY3thj/Screenshot-2024-05-22-081010.png", 
      link: "https://newprotofilo.ccbp.tech"
  },
  {
    title: "New About Us Page",
    description: "Provides updated information about the organization.",
    imageLarge: "https://i.ibb.co/x7bmZQR/Screenshot-2024-05-22-081203.png", 
    imageSmall: "https://i.ibb.co/p4PRSpT/Screenshot-2024-05-22-081222.png", 
      link: "https://newaboutus.ccbp.tech"
  },
  {
    title: "New Project Page",
    description: "Showcases the latest projects undertaken by the organization.",
    imageLarge: "https://i.ibb.co/PQv9cfZ/Screenshot-2024-05-22-081828.png", 
    imageSmall: "https://i.ibb.co/rHFrbqt/Screenshot-2024-05-22-081858.png", 
      link: "https://syednewproject.ccbp.tech"
  },
  {
    title: "Service Page",
    description: "Provides information about the services offered by the organization.",
    imageLarge: "https://i.ibb.co/D1yH8jt/Screenshot-2024-05-22-082300.png", 
    imageSmall: "https://i.ibb.co/2FWBT7P/Screenshot-2024-05-22-082325.png", 
     link: "https://syedservice.ccbp.tech"
  },
  {
    title: "Website Service Page",
    description: "Displays the website design and development services.",
    imageLarge: "https://i.ibb.co/kXwKNdP/Screenshot-2024-05-22-082637.png", 
    imageSmall: "https://i.ibb.co/G5j7TGT/Screenshot-2024-05-22-082659.png", 
     link: "https://websiteservice.ccbp.tech"
  },
  {
    title: "Our Product Page",
    description: "Showcases the products offered by the organization.",
    imageLarge: "https://i.ibb.co/n6Q8nr1/Screenshot-2024-05-22-082850.png", 
    imageSmall: "https://i.ibb.co/S7jPtmZ/Screenshot-2024-05-22-082916.png", 
     link: "https://syedourproduct.ccbp.tech"
  }
]

const responsiveProjects = [
  {
    title: "Todos",
    description: "A person can manage daily tasks with a to-do list.",
    imageLarge: "https://i.ibb.co/s3snGdj/Screenshot-2024-05-22-084328.png", 
    imageSmall: "https://i.ibb.co/P6qSNww/Screenshot-2024-05-22-084356.png", 
    link: "https://todos.ccbp.tech"
  },
  {
    title: "Guess the Numer",
    description: "it is a small game find the right number",
    imageLarge: "https://i.ibb.co/f8SH87W/Screenshot-2024-05-22-084711.png", 
    imageSmall: "https://i.ibb.co/qjRCdph/Screenshot-2024-05-22-084731.png", 
    link: "https://syedbasha1.ccbp.tech"
  },
  {
    title: "Find Index",
    description: "A tool to find the index of elements in an array.",
    imageLarge: "https://i.ibb.co/tmKQjwR/Screenshot-2024-05-22-084920.png",
    imageSmall:'https://i.ibb.co/z4Cys1s/Screenshot-2024-05-22-084935.png', 
    link: "https://findindex.ccbp.tech/"
  },
  {
    title: "Tip Calculator",
    description: "Calculate the tip amount based on the bill.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png", 
    imageSmall: "https://i.ibb.co/kKqRMxF/Screenshot-2024-05-22-085406.png", 
    link: "https://tipcalculator.ccbp.tech/"
  },
  {
    title: "Color Picker",
    description: "Select and preview colors for your design.",
    imageLarge: "https://i.ibb.co/D50HxBD/Screenshot-2024-05-22-085603.png", 
    imageSmall: "https://i.ibb.co/YpB0Km1/Screenshot-2024-05-22-085619.png", 
    link: "https://colorpicker.ccbp.tech/"
  },
  {
    title: "Like and Toggle",
    description: "A demo to like items and toggle their state.",
    imageLarge: "https://i.ibb.co/RcCnJfV/Screenshot-2024-05-22-085904.png", 
    imageSmall: "https://i.ibb.co/FDybz61/Screenshot-2024-05-22-085920.png", 
    link: "https://likeandtoggle.ccbp.tech"
  },
  {
    title: "Season Switch",
    description: "Switch between different seasons.",
    imageLarge: "https://i.ibb.co/TcWHjT3/Screenshot-2024-05-22-090238.png", 
    imageSmall: "https://i.ibb.co/n83vH7K/Screenshot-2024-05-22-090251.png", 
    link: "https://seasonswitch.ccbp.tech/"
  },
  {
    title: "Save Text Area",
    description: "Save text from a textarea input.",
    imageLarge: "https://i.ibb.co/GsJ5T57/Screenshot-2024-05-22-090416.png", 
    imageSmall: "https://i.ibb.co/m0jfYkB/Screenshot-2024-05-22-090438.png", 
    link: "https://savetextarea.ccbp.tech/"
  },
  {
    title: "Count Timer",
    description: "A countdown timer to keep track of time.",
    imageLarge: "https://i.ibb.co/Bc88bv6/Screenshot-2024-05-22-090714.png", 
    imageSmall: "https://i.ibb.co/0QSYkDC/Screenshot-2024-05-22-090727.png", 
    link: "https://counttimer.ccbp.tech"
  },
  {
    title: "Custom Counter",
    description: "Create and customize counters for various uses.",
    imageLarge: "https://i.ibb.co/g33bY0G/Screenshot-2024-05-22-090909.png", 
    imageSmall: "https://i.ibb.co/2KFjdfh/Screenshot-2024-05-22-090918.png", 
    link: "https://customcounter.ccbp.tech/"
  },
  {
    title: "Theme Switcher",
    description: "Switch between different website themes.",
    imageLarge: "https://i.ibb.co/qB8cLNR/Screenshot-2024-05-22-091223.png", 
    imageSmall: "https://i.ibb.co/ZL0V9vK/Screenshot-2024-05-22-091242.png", 
    link: "https://theme.ccbp.tech/"
  },
  {
    title: "Random Joke",
    description: "Get a random joke to brighten your day.",
    imageLarge: "https://i.ibb.co/0QRsYh3/Screenshot-2024-05-22-091559.png", 
    imageSmall: "https://i.ibb.co/NY2n3s7/Screenshot-2024-05-22-091615.png", 
    link: "https://randomjoke.ccbp.tech/"
  },
  {
    title: "Wikipedia Viewer",
    description: "Search and view Wikipedia articles.",
    imageLarge: "https://i.ibb.co/dbCP1qB/Screenshot-2024-05-22-091857.png", 
    imageSmall: "https://i.ibb.co/0ygRHfW/Screenshot-2024-05-22-091930.png", 
    link: "https://wikipedia.ccbp.tech/"
  },
  {
    title: "Select a Pet",
    description: "Choose and learn about different pets.",
    imageLarge: "https://i.ibb.co/nkKZxVD/Screenshot-2024-05-22-092156.png", 
    imageSmall: "https://i.ibb.co/5cz0HNg/Screenshot-2024-05-22-092207.png", 
    link: "https://selectapet.ccbp.tech/"
  },
  {
    title: "Typing Test",
    description: "Test your typing speed and accuracy.",
    imageLarge: "https://i.ibb.co/zVmgDWq/Screenshot-2024-05-22-092403.png", 
    imageSmall: "https://i.ibb.co/V96pqp7/Screenshot-2024-05-22-092419.png", 
    link: "https://typingtest.ccbp.tech/"
  }
];

const newProjects = [
  {
    title: "Welcome App",
    description: "An app to welcome users with a personalized message.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/welcome-app-output-v2.gif",
    link: "https://welcomeapp.ccbp.tech/"
  },
  {
    title: "Light/Dark Mode",
    description: "Toggle between light and dark modes.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/light-dark-mode-output.gif",
    link: "https://lightdarkmode.ccbp.tech/"
  },
  {
    title: "Show/Hide",
    description: "Show and hide elements with a button click.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/show-hide-output.gif",
    link: "https://showhide.ccbp.tech/"
  },
  {
    title: "Even/Odd App",
    description: "Check if a number is even or odd.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/even-odd-app-output.gif",
    link: "https://evenoddapp.ccbp.tech/"
  },
  {
    title: "Login App",
    description: "A simple login application.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/login-app-output.gif",
    link: "https://loginapp.ccbp.tech/"
  },
  {
    title: "Random Number Generator",
    description: "Generate a random number.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://www.example.com/randomnumber-video",
    link: "https://randomnumber.ccbp.tech/"
  },
  {
    title: "Simple To-do",
    description: "Manage your daily tasks.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif",
    link: "https://simpletodo.ccbp.tech/"
  },
  {
    title: "Destination Page",
    description: "Showcases popular travel destinations.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/destination-search-output-v2.gif",
    link: "https://syeddestination.ccbp.tech/"
  },
  {
    title: "Browser History",
    description: "Displays the browser history.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif",
    link: "https://browserhistory.ccbp.tech/"
  },
  {
    title: "Gallery App",
    description: "Displays a gallery of images.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif",
    link: "https://galleryapp.ccbp.tech/"
  },
  {
    title: "Capitals App",
    description: "Learn about world capitals.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/capitals-app-output.gif",
    link: "https://capitalsapp.ccbp.tech/"
  },
  {
    title: "App Store",
    description: "Browse and download apps.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif",
    link: "https://appstore.ccbp.tech/"
  },
  {
    title: "Coin Toss Game",
    description: "Flip a coin and predict the outcome.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-output.gif",
    link: "https://cointossgame.ccbp.tech/"
  },
  {
    title: "Reviews App",
    description: "Read and write reviews.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/reviews-app-output-v2.gif",
    link: "https://reviewsapp.ccbp.tech/"
  },
  {
    title: "Comments App",
    description: "Post and view comments.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif",
    link: "https://commentsapp.ccbp.tech/"
  },
  {
    title: "Appointments App",
    description: "Schedule and manage appointments.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif",
    link: "https://appointmentsapp.ccbp.tech/"
  },
  {
    title: "Money Manager",
    description: "Manage your finances effectively.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif",
    link: "https://moneymanager.ccbp.tech/"
  },
  {
    title: "Emoji Game",
    description: "Match emojis to win the game.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif",
    link: "https://emojigame.ccbp.tech/"
  },
  {
    title: "Digital Timer",
    description: "A digital timer to track time.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/digital-timer-output.gif",
    link: "https://digitaltimerapp.ccbp.tech/"
  },
  {
    title: "Stopwatch",
    description: "A simple stopwatch application.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/stopwatch-output-v2.gif",
    link: "https://stopwatch.ccbp.tech/"
  },
  {
    title: "FAQs App",
    description: "View frequently asked questions.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif",
    link: "https://faqsapp.ccbp.tech/"
  },
  {
    title: "Password Manager",
    description: "Manage your passwords securely.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif",
    link: "https://passwordmanager.ccbp.tech/"
  },
 
  {
    title: "Routing Practice",
    description: "Practice routing in web applications.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/routing-practice-output.gif",
    link: "https://routingpractice.ccbp.tech/"
  },
  {
    title: "Blog List",
    description: "Read and manage blog posts.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/routing-practice-blog-list-desktop-output.gif",
    link: "https://bloglist.ccbp.tech/"
  },
  {
    title: "IPL Dashboard",
    description: "Track IPL statistics and matches.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif",
    link: "https://ipldashboardapp.ccbp.tech/"
  },
  {
    title: "CoWIN Dashboard",
    description: "Track COVID-19 vaccination progress.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-output.gif",
    link: "https://cowindashboard.ccbp.tech/login"
  },
  {
    title: "Layout Builder",
    description: "Create and customize layouts.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/layout-builder-output.gif",
    link: "https://layoutbuilder.ccbp.tech/login"
  },
  {
    title: "Meme Generator",
    description: "Create and share memes.",
    imageLarge: "https://i.ibb.co/ZYt4N8Y/Screenshot-2024-05-22-085352.png",
    videoURL: "https://assets.ccbp.in/frontend/content/react-js/meme-generator-output.gif",
    link: "https://memegenrator.ccbp.tech/"
  }
];
  
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-category">
        <h3>Static Projects</h3>
        <h2>HTML,CSS,Bootstrap,Flexbox</h2>
        <div className="projects-grid">
          {staticProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageLarge={project.imageLarge}
              imageSmall={project.imageSmall}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div className="projects-category">
        <h3>Responsive Projects</h3>
        <h2>HTML,CSS,Javascript</h2>
        <div className="projects-grid">
          {responsiveProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageLarge={project.imageLarge}
              imageSmall={project.imageSmall}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div className="projects-category">
        <h3>New Projects</h3>
        <h2>React, API Integration</h2>
        <div className="projects-grid">
          {newProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageLarge={project.imageLarge}
              videoURL={project.videoURL}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div>
        <ProjectsPage />
      </div>
    </section>
  );
};

export default Projects;
