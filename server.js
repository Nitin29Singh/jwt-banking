const express = require("express");
const authRoutes = require("./routes/authRoutes");
const bankRoutes = require("./routes/bankRoutes");

const app = express();
app.use(express.json());

app.use("/", authRoutes);
app.use("/", bankRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
