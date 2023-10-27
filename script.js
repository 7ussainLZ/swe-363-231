
// import React from 'react';



class Blog {
  constructor(title, date, author, intro, text, conclusion) {
    this.title = title;
    this.date = date;
    this.author = author;
    this.intro = intro;
    this.text = text;
    this.conclusion = conclusion;
  }
}

let blogs = [
  new Blog(
    "Embracing the Future with Flutter 3.0: A Glimpse into New Features",
    "8th October 2023",
    "Hussain AlZayer",
    "Flutter has undoubtedly revolutionized the way we perceive and interact with mobile app development. With the recent launch of Flutter 3.0, the framework has opened new horizons for developers, providing an enhanced toolbox for crafting seamless, beautiful, and efficient applications.",
    "Flutter 3.0 marks a significant advancement in mobile app development, introducing an array of features, improvements, and fixes to elevate both the developer experience and app performance. The release simplifies state management, reducing boilerplate code while offering a more intuitive process for developers. The navigation system overhaul allows for smoother, more controlled routing and transitions. Furthermore, Flutter 3.0 enhances web support, delivering improved performance and compatibility across various browsers, solidifying the framework's reliability for web development. This update allows for a simplified data flow in applications, making it more predictable and understandable, thus letting developers focus on crafting application logic. It provides an easier approach to handle complex navigation scenarios with improved support for nested navigators. With enhanced web support, developers can create reliable, high-performance web applications with improved accessibility and widget rendering.",
    "Flutter 3.0 is a milestone in the Flutter journey, providing developers with a more robust, reliable, and efficient framework for building mobile and web applications. With its new features and improvements, Flutter continues to be a preferred choice for developers around the globe. Embrace the future of app development with Flutter 3.0!"
  ),
  new Blog(
    "Deep Dive into Flutter's Accessibility",
    "15th October 2023",
    "Hussain AlZayer",
    "Understanding the importance of creating inclusive apps, we explore Flutter's advanced accessibility features and guidelines to make your application user-friendly for everyone.",
    "Flutter’s commitment to creating inclusive apps is evident in its suite of accessibility features that ensure your application is user-friendly and accessible to all users. It provides developers with tools and guidelines that help in crafting apps with improved navigation and readability for users with varying abilities.",
    "Building accessible apps is crucial in today’s diverse and inclusive digital landscape. Flutter’s accessibility features provide developers with the means to create inclusive applications effortlessly."
  ),
  new Blog(
    "Unlocking JavaScript's Asynchronous Powers with Async/Await",
    "16th October 2023",
    "Hussain AlZayer",
    "Delve deep into the asynchronous functionality in JavaScript, exploring the elegance and efficiency brought by Async/Await syntax for writing clearer and more readable code.",
    "Async/Await in JavaScript simplifies the process of working with asynchronous operations, making the code look and behave like a more traditional synchronous code while retaining the non-blocking benefits of asynchronous code.",
    "Understanding and mastering Async/Await will enable developers to write cleaner, more intuitive asynchronous code in JavaScript, greatly enhancing the quality and maintainability of their codebase."
  ),
  new Blog(
    "Building Responsive UIs with React Hooks",
    "20th October 2023",
    "Hussain AlZayer",
    "A comprehensive guide to leveraging React Hooks for building dynamically responsive user interfaces that provide a seamless experience across various device sizes and orientations.",
    "React Hooks are functions that let developers use state and other React features in functional components. They enable more features for function components and guide in building dynamic interfaces.",
    "React Hooks offer a new, powerful way for building dynamic user interfaces, allowing for a smoother user experience regardless of device type, providing both developers and users with significant benefits."
  ),
  new Blog(
    "Harnessing the Simplicity of Python for Data Analysis",
    "25th October 2023",
    "Hussain AlZayer",
    "Discover the power and simplicity that Python brings to the realm of data analysis, allowing for sophisticated manipulation, processing, and visualization of various data types.",
    "Python has become an indispensable tool in the field of data analysis due to its simplicity and readability, coupled with a rich ecosystem of data-centric libraries and frameworks like Pandas and NumPy. These tools provide efficient data structures and data manipulation capabilities, enabling developers and data analysts to handle complex data analysis tasks with ease and precision.",
    "Embracing Python for data analysis empowers professionals to leverage its simplicity and extensive library support, facilitating efficient and insightful analysis of data with minimal coding effort, making it a prime choice for analysts worldwide."
  ),
  new Blog(
    "Java’s Evolution: Exploring New Features in Java 15",
    "30th October 2023",
    "Hussain AlZayer",
    "As Java continues to stand the test of time, we explore the exciting features introduced in Java 15, highlighting how these additions enhance the language’s robustness and versatility.",
    "Java 15 brings a host of new features and improvements aimed at increasing the productivity and efficiency of developers. From sealed classes, which provide more controlled and flexible inheritance, to the new Text Blocks feature that simplifies multiline string syntax, Java 15 continues to refine and optimize the language’s features, providing developers with a powerful and streamlined programming experience.",
    "Java 15 further strengthens the language's position as a versatile and robust choice for developers, with new features that improve readability, ease of use, and flexibility, reinforcing Java’s reputation as a reliable technology for various development needs."
  )
];

function BlogComponent({ title, date, intro }) {
  return (
    <div className="scroll-container-item">
      <h2 className="sc-item-title">{title}</h2>
      <p className="sc-item-date">{date}</p>
      <p className="sc-item-text">{intro}</p>
    </div>
  );
}

function BlogList({ blogs }) {
  return (
    <div className="scroll-container" id="scroll-container">
      {blogs.map((blog, index) => (
        <BlogComponent key={index} {...blog} />
      ))}
    </div>
  );
}


// function fillScrollContainer() {

//   const containers = blogs.map(blog => ` 
//     <div class="scroll-container-item">
//       <h2 class="sc-item-title">${blog.title}</h2>
//       <p class="sc-item-date">${blog.date}</p>
//       <p class="sc-item-text">${blog.intro}</p>
//     </div>
//   `).join('');  // JS4 Ex3

//   document.getElementById("scroll-container").innerHTML = containers;
// }

// fillScrollContainer();


window.onload = function () {
  alert("Welcome to our website! Navigate using numbers 1-5: \n1. Home\n2. Contact Me\n3. Courses\n4. mini-Games\n5. Arabic Version");

  document.addEventListener('keydown', function (event) {
    const key = event.key; // Get the pressed key

    // Navigate according to the pressed number
    if (key === "1") window.location.href = 'index.html';
    else if (key === "2") window.location.href = 'contact.html';
    else if (key === "3") window.location.href = 'forms.html';
    else if (key === "4") window.location.href = 'ttt.html';
    else if (key === "5") window.location.href = 'index_ar.html';
  });
}


async function loadAyah() {
  fetch('https://api.quran.com/api/v4/quran/verses/uthmani')
    .then(response => response.json())  // parse the response as JSON
    .then(data => {
      // number of verses
      let randomAyah = Math.floor(Math.random() * data.verses.length);
      // Getting the random verse and assigning it
      document.getElementById("ayah").innerHTML = data.verses[randomAyah].text_uthmani

    })
    .catch(error => {
      console.error('There was an error fetching the data:', error);
    });
}

loadAyah();

let timeout;
const inactivityTime = 60000; // 1 minute
const screensaver = document.getElementById('screensaver');

// Initialize Three.js scene for the screensaver
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, shadowMapEnabled: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use PCFSoftShadowMap for softer shadows
screensaver.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xD3D3D3 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

// Add a directional light to the scene
const light = new THREE.DirectionalLight(0xFFFFFF, 1.5); // Increased intensity
light.position.set(1, 1, 1);
light.castShadow = true;
light.shadow.bias = -0.001;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
scene.add(light);

// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0x999999, 0.5); // 0.5 intensity
scene.add(ambientLight);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Reset the inactivity timer on user interaction
function resetTimer() {
  clearTimeout(timeout);
  screensaver.style.display = 'none';
  timeout = setTimeout(showScreensaver, inactivityTime);
}

// Show the screensaver after inactivity
function showScreensaver() {
  screensaver.style.display = 'block';
}

// Event listeners to detect user activity
document.addEventListener('mousemove', resetTimer);
document.addEventListener('mousedown', resetTimer);
document.addEventListener('keypress', resetTimer);
document.addEventListener('touchmove', resetTimer);

// Start the inactivity timer
resetTimer();