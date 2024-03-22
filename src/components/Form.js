import { useState } from "react";

export default function Form({ onAddItems }) {
  // Controlled Elements technic to keep form state. Step 1
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Making sure that the description property is supplied
    if (!description) return;

    // Using the controlled elements to create a new Item object
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // Passing it up to App in order to update the 'items' state via the setItems method
    onAddItems(newItem);

    // Reset Form
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* Step 2: Let the Input field hold control of the value. Step 3: listen to the onChange event. */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />{" "}
      <button>Add</button>
    </form>
  );
}
