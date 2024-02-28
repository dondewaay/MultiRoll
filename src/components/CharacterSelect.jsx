import { useState } from "react";

const CharacterSelect = ({
  selectedCharacter,
  setSelectedCharacter,
  characters,
  setCharacters,
}) => {
  const [newCharacterName, setNewCharacterName] = useState("");
  const [newCharacterClass, setNewCharacterClass] = useState("");
  const [characterCounter, setCharacterCounter] = useState(1); // Initialize counter

  const handleNewCharacterNameChange = (event) => {
    setNewCharacterName(event.target.value);
  };

  const handleNewCharacterClassChange = (event) => {
    setNewCharacterClass(event.target.value);
  };

  const createNewCharacter = () => {
    if (newCharacterName.trim() === "" || newCharacterClass.trim() === "") {
      alert("Please enter name and class for the new character.");
      return;
    }
    const newCharacter = {
      id: characterCounter.toString(), // Use counter as ID
      name: newCharacterName.trim(),
      class: newCharacterClass.trim(),
    };
    setCharacters([...characters, newCharacter]);
    setSelectedCharacter(newCharacter.id); // Automatically select the newly created character
    setNewCharacterName("");
    setNewCharacterClass("");
    setCharacterCounter(characterCounter + 1); // Increment counter
  };

  return (
    <div>
      <select
        value={selectedCharacter}
        onChange={(e) => setSelectedCharacter(e.target.value)}
      >
        <option value="">Select Character</option>
        {characters.map((character) => (
          <option key={character.id} value={character.id}>
            {character.name}
          </option>
        ))}
      </select>
      <div>
        <h2>Create New Character:</h2>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={newCharacterName}
            onChange={handleNewCharacterNameChange}
          />
        </div>
        <div>
          <label>Class: </label>
          <input
            type="text"
            value={newCharacterClass}
            onChange={handleNewCharacterClassChange}
          />
        </div>
        <button onClick={createNewCharacter}>Create Character</button>
      </div>
    </div>
  );
};

export default CharacterSelect;
