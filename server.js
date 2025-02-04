const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./api/openapi.json'); // Assuming you have your swagger docs in this file
const swaggerJsDoc = require('swagger-jsdoc');
// const Service = require('./services/Service')
// const NotificationHandler = require('./services/NotificationHandler')

// const plugins = require('./plugins/plugins')

const authRoutes = require('./routes/auth'); // Adjust the path if necessary
const customerRoutes = require('./routes/customer'); // Adjust the path if necessary
const meterRoutes = require('./routes/meter'); // Adjust the path if necessary
const transactionRoutes = require('./routes/transaction'); // Adjust the path if necessary
const tariffRoutes = require('./routes/tariff'); // Adjust the path if necessary
const paymentRoutes = require('./routes/payment'); // Adjust the path if necessary

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// Service.setDB(plugins.db)
// Service.setNotifier(NotificationHandler)

// NotificationHandler.setDB(plugins.db)
// NotificationHandler.setQueue(plugins.queue)

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));
//   if (process.env.LOG_LEVEL === 'verbose') {
//     console.log("Verbose logging enabled");
//   }
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  console.log("Starting server...");
  // console.log("Loaded environment variables:", process.env);
  console.log("MongoDB Connection:", process.env.MONGO_URI);
  
// Swagger configuration
// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Electric Power Vending System API',
//       version: '1.0.0',
//       description: 'API documentation for the Electric Power Vending System',
//       contact: {
//         name: 'Your Name',
//         email: 'your.email@example.com',
//       },
//       servers: ['http://localhost:3000'],
//     },
//   },
//   apis: ['./routes/*.js'], // Path to the API routes
// };


// // Initialize Swagger Docs
// // const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Set up Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/meters', meterRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/tariffs', tariffRoutes);

app.post('/customers', (req, res) => {
  // Your customer creation logic
  res.status(201).json({ message: 'Customer created' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

