const Item = require('../models/Item');


// Retrieve items from MongoDB by brand
async function getItemsByBrand(req, res) {
    const { brand } = req.params;
  
    try {
      const items = await Item.find({ brand }); // Query items by brand
  
      if (items.length === 0) {
        return res.status(404).json({ message: 'No items found for the given brand.' });
      }
  
      res.status(200).json(items);
    } catch (error) {
      console.error('Error retrieving items by brand:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }


// Retrieve items from MongoDB by category
async function getItemsByCategory(req, res) {
  const { category } = req.params;

  try {
    const items = await Item.find({ category }); // Query items by category

    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found for the given category.' });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error('Error retrieving items by category:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}

// Handle item upload logic, including saving item to MongoDB, managing images, etc.

async function uploadItem(req, res) {
    try {
      const { brand, category } = req.body;
      const images = req.files.map((file) => file.path);
  
      // Create a new item object
      const newItem = new Item({
        brand,
        category,
        images,
      });
  
      // Save the item to MongoDB
      await newItem.save();
  
      res.status(200).json({ message: 'Item uploaded successfully.' });
    } catch (error) {
      console.error('Error uploading item:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
  

module.exports = {
  getItemsByBrand,
  getItemsByCategory,
  uploadItem,
};