import React, { useState, useEffect } from 'react'; // Import useEffect
import styled from 'styled-components';
import SearchResult from './components/SearchResults/SearchResult';

export const BASE_URL = "http://localhost:9000";

export default function App() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState([]);
  const [selectbutton, setSelectbutton] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log(json);
        setData(json);
        setFilter(json); // So you have something to render initially

        setLoading(false);
      } catch (e) {
        setError("Failed to fetch data");
      }
    };

    fetchData(); 

  }, []); 

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;

  // const temp=[
  //   {
  //   "name": "Boilded Egg",
  //   "price": 10,
  //   "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   "image": "/images/egg.png",
  //   "type": "breakfast"
  // },
  // ]


  const serechfood = (e) => {
    const  serechvalye=e.target.value;
    // console.log(serechvalye);
    const filteredData1= data?.filter((food) =>
      food.name.toLowerCase().includes(serechvalye.toLowerCase())
    );
    setFilter(filteredData1);


  }

 const filterData = (type) => {
  let filteredData;

  if (type === "All") {
    filteredData = data;
  } else {
    filteredData = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
  }

  setFilter(filteredData);
  setSelectbutton(type);
};


const filterbtns = [
  { name: "All", type: "All" },
  { name: "Breakfast", type: "breakfast" },
  { name: "Lunch", type: "lunch" },
  { name: "Dinner", type: "dinner" },
];  



 

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo image" />
        </div>
        <div className="search">
          <input onChange={serechfood} placeholder="Search food" />
        </div>
      </TopContainer>

      <FilterContainer>
        {filterbtns.map((btn) => (
           <Button key={btn.name} onClick={() => filterData(btn.type)}>
           {btn.name}
          </Button>
          ))}
      </FilterContainer>

        {/* <Button onClick={()=>filterData("All" )}>All</Button>
        <Button onClick={()=>filterData("BreakFast" )}>BreakFast</Button>
        <Button onClick={()=>filterData("Lunch" )}>Lunch</Button>
        <Button onClick={()=>filterData("Dinner" )}>Dinner</Button> */}

      
      
    </Container>
    
    <SearchResult data={filter}/>
    </>
  );
}

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0<= width <= 768px) {
    flex-direction: column;
    height  : 120px; 
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: #FF4343;
  border-radius: 5px;
  border: none;
  padding: 6px 12px; /* Corrected padding shorthand */
  gap: 10px;
  color: white; /* Corrected color value */
  cursor: pointer; /* Added cursor pointer for better UX */
`;

