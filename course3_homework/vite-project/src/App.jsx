import "./App.css";

const Title = (props) => {
  const { title } = props;
  return <h2 style={{ color: "white", marginBottom: "5px" }}>{title}</h2>;
};

const Description = (props) => {
  const { text } = props;
  return <p style={{ color: "white", fontSize: "14px" }}>{text}</p>;
};

const FoodList = (props) => {
  const { foods } = props;
  return (
    <p style={{ color: "white", fontSize: "14px" }}>
      <strong>Meals:</strong> {foods.join(", ")}
    </p>
  );
};

const DayTile = (props) => {
  const { description, day, meals } = props;

  const containerStyle = {
    padding: "20px",
    borderRadius: "8px",
    margin: "20px",
    backgroundColor: "red",
    
  };

  const hrStyle = {
    width: "50%",
    margin: "20px auto",
    border: "1px solid #ccc",
  };

  return (
    <div style={containerStyle}>
      <Title title={day} />
      <Description text={description} />
      {Object.entries(meals).map(([meal, items], index) => (
        <div key={index}>
          <h4 style={{ color: "white", marginBottom: "5px" }}>{meal}</h4>
          <FoodList foods={items} />
        </div>
      ))}
      <hr style={hrStyle} />
    </div>
  );
};

const days = [
  {
    day: "Monday",
    description: "Monday's Shopping List: ",
    meals: {
      Breakfast: ["Omelette"],
      Lunch: ["Pizza"],
      Dinner: ["Pasta"],
    },
  },
  {
    day: "Tuesday",
    description: "Tuesday's Shopping List: ",
    meals: {
      Breakfast: ["Cereal"],
      Lunch: ["Sandwich"],
      Dinner: ["Fish"],
    },
  },
  {
    day: "Wednesday",
    description: "Wednesday's Shopping List: ",
    meals: {
      Breakfast: ["Yogurt"],
      Lunch: ["Lasagna"],
      Dinner: ["Salad"],
    },
  },
  {
    day: "Thursday",
    description: "Thursday's Shopping List: ",
    meals: {
      Breakfast: ["Pancakes"],
      Lunch: ["Stew"],
      Dinner: ["Roast"],
    },
  },
  {
    day: "Friday",
    description: "Friday's Shopping List: ",
    meals: {
      Breakfast: ["Bacon and Eggs"],
      Lunch: ["Chicken with Rice"],
      Dinner: ["Noodles"],
    },
  },
  {
    day: "Saturday",
    description: "Saturday's Shopping List: ",
    meals: {
      Breakfast: ["Smoothie"],
      Lunch: ["Burger"],
      Dinner: ["Sushi"],
    },
  },
  {
    day: "Sunday",
    description: "Sunday's Shopping List: ",
    meals: {
      Breakfast: ["Pancakes"],
      Lunch: ["Grilled Cheese"],
      Dinner: ["Spaghetti"],
    },
  },
];


// Main App component
function App() {
  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div style={rowStyle}>
      {days.map((day, index) => (
        <DayTile
          key={index}
          day={day.day}
          description={day.description}
          meals={day.meals}
        />
      ))}
    </div>
  );
}

export default App;
