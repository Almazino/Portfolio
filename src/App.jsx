// App.js
import React from 'react';
import './app.css';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li><a className='tags' href="#home">Home</a></li>
            <li><a className='tags' href="#about">About me</a></li>
            <li><a className='tags' href="#portfolio">Pet-projects</a></li>
            <li><a className='tags' href="#contact">Contacts</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="section1">
          <h1 className='text1'>Hello, I am <br /> Full Stack Developer</h1>
          <p className='text2'>Welcome to my portfolio!</p>
        </section>

        <section id="about" className="section2">
          <AboutMe />
        </section>

        <section id="portfolio" className="section3">
          <h2 className='topick'>Pet-projects</h2>
          <div className="portfolio-item1 cards">
            <h3>ToDoApp</h3>
            <p>A simple task management application (to-do list).</p>
            <p>Main features:</p>
            <ul>
              <li>Adding, editing, and deleting tasks</li>
              <li>Marking tasks as completed</li>
              <li>Filtering tasks by status (all, active, completed)</li>
              <li>Searching tasks by title</li>
            </ul>
            <p>Technologies used in the project:</p>
            <ul>
              <li>React - for creating the user interface</li>
              <li>HTML/CSS - for the structure and styles of the interface</li>
            </ul>
            <a href="https://todoo-app-react.netlify.app/">Link to the project</a>
          </div>
          <div className="portfolio-item2 cards">
            <h3>QuizApp</h3>
            <p>A quiz application that allows users to test their knowledge on various topics.</p>
            <p>Main features:</p>
            <ul>
              <li>Presenting multiple-choice questions to the users</li>
              <li>Providing feedback on the correctness of user answers</li>
              <li>Tracking and displaying the user's score and progress</li>
              <li>Supporting different categories or topics for quizzes</li>
            </ul>
            <p>Technologies used in the project:</p>
            <ul>
              <li>React - for creating the user interface and managing component states</li>
              <li>HTML/CSS - for the structure and styles of the interface</li>
              <li>Trivia API - for retrieving quiz questions and answers</li>
            </ul>
            <a href="https://main--dashing-florentine-f28dd1.netlify.app/">Link to the project</a>
          </div>
          <div className="portfolio-item3 cards">
            <h3>WeatherApp</h3>
            <p>A simple weather application that provides current weather information.</p>
            <p>Main features:</p>
            <ul>
              <li>Displaying current weather condition (temperature)</li>
              <li>Providing weather forecasts for upcoming days</li>
              <li>Allowing users to search for weather information by location (city, country)</li>
            </ul>
            <p>Technologies used in the project:</p>
            <ul>
              <li>React - for creating the user interface</li>
              <li>HTML/CSS - for the structure and styles of the interface</li>
              <li>OpenWeatherMap API - for retrieving weather data</li>
            </ul>
            <a href="https://main--jovial-pika-8291a0.netlify.app/">Link to the project</a>
          </div>
        </section>

        <section id="contact" className="section4">
          <h2>Contacts</h2>
          <div className='boxs'>
            <a href='tel:+996702295084'><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg></a>
            <a href='https://web.telegram.org/a/'><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-telegram" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg></a>
            <a href='https://www.linkedin.com/in/maza-marlis-a95133265/'><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg></a>
            <a href='mailto:almazmarlisov7@gmail.com'><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 My portfolio</p>
      </footer>
    </div>
  );
}

export default App;
