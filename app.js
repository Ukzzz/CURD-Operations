const express = require('express');
const app = express();
const path = require('path'); 
const connectDB = require('./db');
const USER = require('./Model/user'); // <-- fixed parenthesis
const methodOverride = require('method-override');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));

connectDB();

app.get('/', async (req, res) => {
  res.render('home'); // home.ejs
});

// Handle form submission
app.post('/read', async (req, res) => {
  try {
    const user = new USER(req.body);
    await user.save();
    res.redirect('/read'); // redirect to read after creation
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});
// Show the form
app.get('/read', async (req, res) => {
  const users = await USER.find();
  res.render('read', { users }); // read.ejs
});

//Delete 
app.delete('/read/:id', async (req, res) => {
  try {
    const user = await USER.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.redirect('/read'); // redirect to read page after deletion
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});
// Edit user
app.get('/edit/:id', async (req, res) => {
  try {
    const user = await USER.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render('edit', { user });
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.put('/edit/:id', async (req, res) => {
  try {
    const user = await USER.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.redirect('/read'); // redirect back to users list after update
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});