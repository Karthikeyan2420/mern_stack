// Get elements from the DOM
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');
const jsonInput = document.getElementById('jsonInput');
const output = document.getElementById('output');

/// Save JSON data to localStorage
saveButton.addEventListener('click', () => 
{
  const jsonData = jsonInput.value;
  
  try
  {
    // Parse the input to ensure it's valid JSON
    // Save the JSON data in localStorage
    localStorage.setItem('jsonData', JSON.stringify(JSON.parse(jsonData)));

    alert('JSON data saved successfully!');
  }

  catch (error) 
  {
    alert('Invalid JSON format. Please enter valid JSON.');
  }
});

 /// Retrieve JSON data from localStorage
retrieveButton.addEventListener('click', () => 
  {
  const retrievedData = localStorage.getItem('jsonData');

  if (retrievedData)
    {
    // Parse and display the retrieved JSON data
    output.textContent = JSON.stringify(JSON.parse(retrievedData)); 
  } 
  else 
  {
    output.textContent = 'No JSON data found in localStorage.';
  }
});

/// Update JSON data in localStorage
updateButton.addEventListener('click', () =>
  {
  const jsonData = jsonInput.value;

  try 
  {
    // Parse the input to ensure it's valid JSON
    const parsedData = JSON.parse(jsonData);

    // Check if data already exists in localStorage
    const existingData = localStorage.getItem('jsonData');

    if (existingData) 
      {
      // Update the existing data
      localStorage.setItem('jsonData', JSON.stringify(parsedData));

      alert('JSON data updated successfully!');
    }
     else 
     {
      alert('No existing JSON data found to update. Please save data first.');
    }
  } 

  catch (error)
  {
    alert('Invalid JSON format. Please enter valid JSON.');
  }
});

/// Delete JSON data from localStorage
deleteButton.addEventListener('click', () =>
  {
  // Check if data exists in localStorage
  const existingData = localStorage.getItem('jsonData');

  if (existingData)
    {
    localStorage.removeItem('jsonData');
    output.textContent = ''; // Clear displayed data

    alert('JSON data deleted successfully!');
  }
   else 
   {
    alert('No JSON data found to delete.');
  }
});
