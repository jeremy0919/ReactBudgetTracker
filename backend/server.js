const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 5000;
const PRODUCTS_FILE = 'products.json';

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Create a new product
app.post('/api/products', async (req, res) => {
  try {
    const { Product, Cost, Category, GUID, productGUID, ListID } = req.body.obj;
    console.log(req.body)
    // Read existing products from file
    let products = [];
    try {
      const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
      products = JSON.parse(data);
    } catch (error) {
      console.error('Error reading products file:', error);
    }

    // Add the new product
    const newProduct = { Product, Cost, Category, GUID, productGUID, ListID };
    products.push(newProduct);

    // Write updated products to file
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





app.post('/api/newUser', async (req, res) => {
  try {
    const { UserName, Password, Email, Language, Budget, GUID } = req.body.obj;
    console.log(req.body);
    const list = ["All"]
    // Read existing users from file
    let USERS = [];
    try {
      const data = await fs.readFile('users.json', 'utf8');
      USERS = JSON.parse(data);
    } catch (error) {
      console.error('Error reading users file:', error);
    }

    // Check if the user already exists
    const userExists = USERS.find(user => user.UserName === UserName);

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Add the new user
    const newUser = { UserName, Password, Email, Language, Budget,list, GUID };
    USERS.push(newUser);

    // Write updated users to file
    await fs.writeFile('users.json', JSON.stringify(USERS, null, 2));

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/findUser', async (req, res) => { // changed from get to post, might need to double check
  try {
    const data = await fs.readFile('users.json', 'utf8');
    const USERS = JSON.parse(data);
    const { UserName, Password } = req.body.obj;

    const foundAccount = USERS.find(user => user.UserName === UserName && user.Password === Password);
    if (foundAccount) {
      return res.status(200).json(foundAccount);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading users file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/ReturnUser', async (req, res) => { 
  try {
    const data = await fs.readFile('users.json', 'utf8');
    const USERS = JSON.parse(data);
    const { GUID } = req.body.obj;
    console.log(GUID)
    const foundAccount = USERS.find(user => user.GUID === GUID);
    console.log(foundAccount)
    if (foundAccount) {
      return res.status(200).json(foundAccount);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading users file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/ModifyUser', async (req, res) => { 
  try {
    const data = await fs.readFile('users.json', 'utf8');
    const USERS = JSON.parse(data);
    const { UserName, Password, GUID, Email, Language, Budget } = req.body.obj;

    const foundAccountIndex = USERS.findIndex(user => user.GUID === GUID);

    if (foundAccountIndex !== -1) { // user found
      // Update user information
      USERS[foundAccountIndex].Budget = Budget;
      USERS[foundAccountIndex].UserName = UserName;
      USERS[foundAccountIndex].Password = Password;
      USERS[foundAccountIndex].Email = Email;
      USERS[foundAccountIndex].Language = Language;

      // Write updated data back to the file
      await fs.writeFile('users.json', JSON.stringify(USERS, null, 2));

      return res.status(200).json({ message: 'User information updated successfully' });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading users file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/GetUserName', async (req, res) => { 
  try {
    const data = await fs.readFile('users.json', 'utf8');
    const USERS = JSON.parse(data);
    const { GUID } = req.body.obj;

    const foundAccountIndex = USERS.findIndex(user => user.GUID === GUID);

    if (foundAccountIndex !== -1) { // user found

     const data = USERS[foundAccountIndex].UserName;


      // Write updated data back to the file
      return res.status(200).json({ data });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading users file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/updateBudget', async (req, res) => {
  try {
    const { GUID, budget } = req.body.obj;
    // Read the content of the users.json file
    const data = await fs.readFile('users.json', 'utf8');
    const users = JSON.parse(data);

    // Find the user with the specified username
    const userIndex = users.findIndex(user => user.GUID === GUID);
    if (userIndex !== -1) {
      // Update the budget for the user
      users[userIndex].Budget = budget;

      // Write the updated data back to the file
      await fs.writeFile('users.json', JSON.stringify(users, null, 2));

      return res.status(200).json({ message: 'Budget updated successfully' });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating budget:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/MakeList', async (req, res) => {
  try {
    const { GUID, NewList } = req.body.obj;

    
    // Read the content of the users.json file
    const data = await fs.readFile('users.json', 'utf8');
    const users = JSON.parse(data);

    // Find the user with the specified username
    const userIndex = users.findIndex(user => user.GUID === GUID);
    
    if (userIndex !== -1) {
      // Retrieve the current list of the user
      const currentList = users[userIndex].list || [];

      // Add the new item to the list
      currentList.push(NewList);

      // Update the list for the user
      users[userIndex].list = currentList;

      // Write the updated data back to the file
      await fs.writeFile('users.json', JSON.stringify(users, null, 2));

      return res.status(200).json({ message: 'List updated successfully' });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/Getbudget', async (req, res) => {
  try {
   
    const { GUID } = req.body.obj;

    // Read the content of the users.json file
    const data = await fs.readFile('users.json', 'utf8');
    const users = JSON.parse(data);

    // Find the user with the specified username
    const userIndex = users.findIndex(user => user.GUID === GUID);

    if (userIndex !== -1) {
      // Update the budget for the user
      const data =  users[userIndex].Budget 
      // Write the updated data back to the file
  
      return res.status(200).json(data );
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating budget:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/getUserList', async (req, res) => { // changed from get to post, might need to double check
  try {
    const data = await fs.readFile('users.json', 'utf8');
    const USERS = JSON.parse(data);
    const { GUID } = req.body.obj;

    const foundAccount = USERS.find(user => user.GUID === GUID);
    if (foundAccount) {
      return res.status(200).json(foundAccount.list);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error reading users file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/delete', async (req, res) => {
  try {
    const { GUID, productGUID } = req.body.obj;

    // Read existing products from file
    let products = [];
    try {
      const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
      products = JSON.parse(data);
    } catch (error) {
      console.error('Error reading products file:', error);
    }

    // Find the index of the product to delete
    const index = products.findIndex((item) => {
      return (
        item.GUID === GUID &&
        item.productGUID === productGUID
      );
    });

    // Delete the object if found
    if (index !== -1) {
      products.splice(index, 1);

      // Write updated products to file
      await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));

      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/deleteItems', async (req, res) => {
  try {
    const { GUID, ListName } = req.body.obj;

    // Read existing products from file
    let products = [];
    try {
      const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
      products = JSON.parse(data);
    } catch (error) {
      console.error('Error reading products file:', error);
    }

    // Find the index of the product to delete
    const index = products.findIndex((item) => {
      return (
        item.GUID === GUID &&
        item.ListID === ListName
      );
    });

    // Delete the object if found
    if (index !== -1) {
      products.splice(index, 1);

      // Write updated products to file
      await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));

      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/DeleteList', async (req, res) => {
  try {
    const { GUID, listName } = req.body.obj;
    console.log(req.body.obj)
    console.log(listName)
    // Read existing products from file
    let users = [];
    try {
      const data = await fs.readFile('users.json', 'utf8');
      users = JSON.parse(data);
    } catch (error) {
      console.error('Error reading users file:', error);
    }

    // Find the user by GUID
    const userIndex = users.findIndex(item => item.GUID === GUID);
    console.log(users[userIndex].list);
    // Delete the value from list if user is found
    if (userIndex !== -1) {
      const listIndex = users[userIndex].list.findIndex(item => item === listName);
      console.log(listIndex)
      if (listIndex !== -1) {
        users[userIndex].list.splice(listIndex, 1);

        // Write updated users to file
        await fs.writeFile('users.json', JSON.stringify(users, null, 2));

        res.status(200).json({ message: 'Value deleted successfully' });
      } else {
        res.status(404).json({ error: 'Value not found in list' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting value:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/RemoveList', async (req, res) => {
  try {
    const { GUID, ListName } = req.body.obj;

    // Read existing products from file
    let products = [];
    try {
      const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
      products = JSON.parse(data);
    } catch (error) {
      console.error('Error reading products file:', error);
    }

    // Find the product with the matching GUID and ListID
    const productIndex = products.findIndex((item) => {
      return (
        item.GUID === GUID &&
        item.ListID === ListName
      );
    });

    // Update the ListID of the product if found
    if (productIndex !== -1) {
      // Update the ListID to 'All'
      products[productIndex].ListID = 'All';

      // Write updated products to file
      await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));

      res.status(200).json({ message: 'Product list updated successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// Get all products
app.post('/api/list', async (req, res) => {
  try {
    const { GUID, listName} = req.body.obj;// Assuming you're sending the index of the object to delete
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    
    const products = JSON.parse(data);
    const filteredProductsByName = products.filter(product => product.GUID === GUID);

    if(filteredProductsByName){
    // Check if ListID is provided in the request query
    if (listName === "All") {
      
      return res.json(filteredProductsByName); // returns all if all is called
    } else if (listName) {
      const filteredProducts = filteredProductsByName.filter(product => product.ListID.trim() === listName.trim());
      return res.json(filteredProducts); // returns filtered list
    } 
    else {
      return   res.json(filteredProductsByName); // all
    }
  }
  } catch (error) {
    console.error('Error reading products file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/SortedList', async (req, res) => {
  try {
    const { GUID, Method} = req.body.obj;
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    console.log(GUID)
    console.log(Method)
    const products = JSON.parse(data);
    const filteredProductsByName = products.filter(product => product.GUID === GUID);

    if(filteredProductsByName){
    // Check if ListID is provided in the request query
      if(Method === "AlphabeticalAscending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => a.Product.localeCompare(b.Product));
        return res.json(sortedProducts); 
      }
      if(Method === "CostAscending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => parseFloat(a.Cost) - parseFloat(b.Cost));
        return res.json(sortedProducts); 
      }
      if(Method === "AlphabeticalDescending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => b.Product.localeCompare(a.Product));
        return res.json(sortedProducts); 
      }
      if(Method === "CostDescending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => parseFloat(b.Cost) - parseFloat(a.Cost));
        return res.json(sortedProducts); 
      }
      if(Method === "ListAscending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => a.ListID.localeCompare(b.ListID));
        return res.json(sortedProducts); 
      }
      if(Method === "ListDescending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => b.ListID.localeCompare(a.ListID));
        return res.json(sortedProducts); 
      }
      if(Method === "CategoryAscending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => a.Category.localeCompare(b.Category));
        return res.json(sortedProducts); 
      }
      if(Method === "CategoryDescending"){
        const sortedProducts = filteredProductsByName.sort((a, b) => b.Category.localeCompare(a.Category));
        return res.json(sortedProducts); 
      }
   
    // returns filtered list
    } 
  } catch (error) {
    console.error('Error reading products file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/products', async (req, res) => {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    
    const products = JSON.parse(data);
    // Check if ListID is provided in the request query
 
    return res.status(200).json(products);// returns all if all is called
  } catch (error) {
    console.error('Error reading products file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/TotalList', async (req, res) => {
  try {
    const { GUID, listName } = req.body.obj;
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    const products = JSON.parse(data);

    // Filter products by GUID
    const filteredProductsByName = products.filter(product => product.GUID === GUID);

    if (filteredProductsByName.length > 0) {
      // Check if ListID is provided in the request
      if (listName === "All") {
        // Return an array of costs for all products matching the username
        const costs = filteredProductsByName.map(product => parseInt(product.Cost));
        return res.json(costs);
      } else if (listName) {
        // Filter products by listName
        const filteredProducts = filteredProductsByName.filter(product => product.ListID === listName);
        // Return an array of costs for products matching the listName
        const costs = filteredProducts.map(product => parseInt(product.Cost));
        return res.json(costs);
      } else {
        return res.json([]); // Return an empty array if no listName provided
      }
    } else {
      return res.json([]); // Return an empty array if no products found for the user
    }
  } catch (error) {
    console.error('Error reading products file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/TotalCategory', async (req, res) => {
  try {
    const { GUID, listName } = req.body.obj;
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    const products = JSON.parse(data);
    console.log(listName)
    // Filter products by username
    const filteredProductsByName = products.filter(product => product.GUID === GUID);

    if (filteredProductsByName.length > 0) {
      // Check if ListID is provided in the request
      if (listName) {
        // Filter products by listName
        const filteredProducts = filteredProductsByName.filter(product => product.Category === listName);
        // Return an array of costs for products matching the listName
        const costs = filteredProducts.map(product => parseInt(product.Cost));
        return res.json(costs);
      } else {
        return res.json([]); // Return an empty array if no listName provided
      }
    } else {
      return res.json([]); // Return an empty array if no products found for the user
    }
  } catch (error) {
    console.error('Error reading products file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/Category', async (req, res) => {
  try {
    const { GUID } = req.body.obj;
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    const products = JSON.parse(data);
    
    // Filter products by username
    const filteredProductsByName = products.filter(product => product.GUID === GUID);

    if (filteredProductsByName.length > 0) {
      // Extract unique categories
      const categories = Array.from(new Set(filteredProductsByName.map(product => product.Category.trim())));
      
      return res.json(categories);
    } else {
      return res.json([]); // Return an empty list if no products found for the user
    }
  } catch (error) {
    console.error('Error reading products file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
