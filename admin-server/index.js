const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// MongoDB configuration
const uri = "mongodb+srv://admin-dashboard:Covid19@cluster0.86m92hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let cardsCollection;
let newsCollection;
let topsellingCollection;
let recentsalesCollection;
let recentactivityCollection;

// Function to connect to MongoDB and get the collection
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Initialize collections
    cardsCollection = client.db("AdminDashboard").collection("cards");
    newsCollection = client.db("AdminDashboard").collection("news");
    topsellingCollection = client.db("AdminDashboard").collection("topselling");
    recentsalesCollection = client.db("AdminDashboard").collection("recentsales");
    recentactivityCollection = client.db("AdminDashboard").collection("recentactivity");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process if connection fails
  }
}

// Call the function to connect to the database
connectToDatabase();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET endpoint to fetch data from the 'cards' collection
app.get('/cards', async (req, res) => {
    try {
      const cards = await cardsCollection.find({}).toArray();
      res.status(200).json(cards); // 200 OK status
    } catch (error) {
      console.error("Error fetching card data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // GET endpoint to fetch data from the 'news' collection
  app.get('/news', async (req, res) => {
    try {
      const news = await newsCollection.find({}).toArray();
      res.status(200).json(news); // 200 OK status
    } catch (error) {
      console.error("Error fetching news data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // GET endpoint to fetch data from the 'topselling' collection
  app.get('/topselling', async (req, res) => {
    try {
      const topselling = await topsellingCollection.find({}).toArray();
      res.status(200).json(topselling); // 200 OK status
    } catch (error) {
      console.error("Error fetching topselling data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // GET endpoint to fetch data from the 'recentsales' collection
  app.get('/recentsales', async (req, res) => {
    try {
      const recentsales = await recentsalesCollection.find({}).toArray();
      res.status(200).json(recentsales); // 200 OK status
    } catch (error) {
      console.error("Error fetching recentsales data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // GET endpoint to fetch data from the 'recentactivity' collection
  app.get('/recentactivity', async (req, res) => {
    try {
      const recentactivity = await recentactivityCollection.find({}).toArray();
      res.status(200).json(recentactivity); // 200 OK status
    } catch (error) {
      console.error("Error fetching recentactivity data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

// POST endpoint to insert data into the 'cards' collection
app.post("/upload", async (req, res) => {
  try {
    const data = req.body;
    const result = await cardsCollection.insertOne(data);
    res.status(201).json(result); // 201 Created status
  } catch (error) {
    console.error("Error inserting card data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST endpoint to insert data into the 'news' collection
app.post("/upload/news", async (req, res) => {
  try {
    const data = req.body;
    const result = await newsCollection.insertOne(data);
    res.status(201).json(result); // 201 Created status
  } catch (error) {
    console.error("Error inserting news data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// POST endpoint to insert data into the 'topselling' collection
app.post("/upload/topselling", async (req, res) => {
    try {
      const data = req.body;
      const result = await topsellingCollection.insertOne(data);
      res.status(201).json(result); // 201 Created status
    } catch (error) {
      console.error("Error inserting topselling data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // POST endpoint to insert data into the 'recentsales' collection
app.post("/upload/recentsales", async (req, res) => {
    try {
      const data = req.body;
      const result = await recentsalesCollection.insertOne(data);
      res.status(201).json(result); // 201 Created status
    } catch (error) {
      console.error("Error inserting recentsales data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  // POST endpoint to insert data into the 'recentactivity' collection
app.post("/upload/recentactivity", async (req, res) => {
    try {
      const data = req.body;
      const result = await recentactivityCollection.insertOne(data);
      res.status(201).json(result); // 201 Created status
    } catch (error) {
      console.error("Error inserting recentactivity data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


// Define other routes similarly for 'topselling', 'recentsales', and 'recentactivity'

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// const express = require('express');
// const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
// const cors = require('cors');

// // Initialize Express app
// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware setup
// app.use(cors());
// app.use(express.json()); // For parsing JSON request bodies

// // MongoDB configuration
// const uri = "mongodb+srv://admin-dashboard:Covid19@cluster0.86m92hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// let adminDash;

// // Function to connect to MongoDB and get the collection
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");
//     adminDash = client.db("AdminDashboard").collection("cards");
//     adminDash = client.db("AdminDashboard").collection("news");
//     adminDash = client.db("AdminDashboard").collection("cardstopselling");
//     adminDash = client.db("AdminDashboard").collection("recentsales");
//     adminDash = client.db("AdminDashboard").collection("recentactivity");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//     process.exit(1); // Exit the process if connection fails
//   }
// }

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // POST endpoint to insert a book
// app.post("/upload", async (req, res) => {
//   try {
//     const data = req.body;
//     const result = await bookCollection.insertOne(data);
//     res.status(201).json(result); // 201 Created status
//   } catch (error) {
//     console.error("Error inserting book:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })