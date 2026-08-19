// Create an empty array
let items = [];

// Create
function createItem(item) {
    items.push(item);
    console.log(`"${item}" added successfully.`);
}

// read
function readItems() {
    console.log("Items List:");
    
    if (items.length === 0) {
        console.log("No items found.");
        return;}

    items.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });
}

// Update
function updateItem(index, newValue) {
    if (index >= 0 && index < items.length) {
        items[index] = newValue;
        console.log(`Item at index ${index} updated successfully.`);
    } else {
        console.log("Invalid index.");
    }
}

// Delete
function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        console.log(`Item at index ${index} deleted successfully.`);
    } else {
        console.log("Invalid index.");
    }
}



createItem("Laptop");
createItem("Phone");
createItem("Tablet");

readItems();

updateItem(1, "Smartphone");

readItems();

deleteItem(0);

readItems();
