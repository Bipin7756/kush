const Item = require('../models/Item');

async function getItemsByBrand(req, res) {
    const { brand } = req.params;
  
    try {
      const items = await Item.find({ brand }); 
  
      if (items.length === 0) {
        return res.status(404).json({ message: 'No items found for the given brand.' });
      }
  
      res.status(200).json(items);
    } catch (error) {
      console.error('Error retrieving items by brand:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

async function getItemsByCategory(req, res) {
  const { category } = req.params;

  try {
    const items = await Item.find({ category }); 

    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found for the given category.' });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error('Error retrieving items by category:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}

async function uploadItem(req, res) {
    try {
      const { brand, category } = req.body;
      const images = req.files.map((file) => file.path);
  
      const newItem = new Item({
        brand,
        category,
        images,
      });
  
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