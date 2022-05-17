import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div>
        <h1>The testimony Hub</h1>
        <Testimony 
          name="Jhon Doe"
          imageURL="jhondoe"
          country="USA"
          testimony="When I learned to program I felt that I discovered super power, however, my learning journey has been full of ups and downs because there are so many resources and learning path to take that sometimes I found myself trying to learn many different technologies and library at the same time. Until I met Ivan who coach me to learn and master one thing at a time."
          profession="Software Enginner"
          company="Amazon Prime"
        />
        <Testimony 
          name="Blake Smith"
          imageURL="Blake"
          country="Puerto Rico"
          testimony="I take my job seriously and my team are like a family, if they have a good performance I do too. that is why I always think about them, support them and try to have bonuses and snacks all the time."
          profession="Team Manager"
          company="Brown Co."
        />
        <Testimony 
          name="Smith James"
          imageURL="James"
          country="Germany"
          testimony="My job is very impoertan, because a single digit can cause a massive impact in a company's financial aspect. That is why I respect my job, always being early, separating life and work, and being healthy to have an outstanding performance at what I do."
          profession="Accountant"
          company="Google Cloud"
        />
      </div>
    </div>
  );
}

export default App;
