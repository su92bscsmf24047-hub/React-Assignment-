import ProductCard from "./components/ProductCard.jsx";
import LikeButton from "./components/LikeButton.jsx";
import StudentList from "./components/StudentList.jsx";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">class Task </h1>

      {/* Task 1: Reusable component with props */}
      <section className="section">
        <h2>Task 1: ProductCard (Props)</h2>
        <div className="card-row">
          <ProductCard title="Wireless Headphones" price={4999} category="Electronics" />
          <ProductCard title="Running Shoes" price={3499} category="Footwear" />
        </div>
      </section>

      {/* Task 2: useState + event handling */}
      <section className="section">
        <h2>Task 2: LikeButton (useState)</h2>
        <LikeButton />
      </section>

      {/* Task 3: List + conditional rendering */}
      <section className="section">
        <h2>Task 3: Student Results</h2>
        <StudentList />
      </section>
    </div>
  );
}

export default App;
