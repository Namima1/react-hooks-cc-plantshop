import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const handleSearch = (query) => setSearchQuery(query.toLowerCase());

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery)
  );

  const addNewPlant = (newPlant) => setPlants([...plants, newPlant]);

  return (
    <main>
      <NewPlantForm onAddPlant={addNewPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
