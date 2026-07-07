const express = require('express');
const app = express();
const PORT = 5000;

// Middleware: Yeh client se aane wale JSON text ko JavaScript Object banata hai
app.use(express.json());

// static files (frontend HTML) serve karne ke liye
app.use(express.static(__dirname));

// Temporary Data Storage (Database ki jagah Array)
let expenses = [
    { id: 1, description: "Fries", amount: 60 },
    { id: 2, description: "Bus Fare", amount: 150 }
];

// 1. GET Endpoint: Saare expenses bhejne ke liye
app.get('/api/expenses', (req, res) => {
    // Response: Status 200 aur data JSON format mein send kar rahe hain
    res.status(200).json(expenses);
});

// 2. POST Endpoint: Naya expense receive aur validate karne ke liye
app.post('/api/expenses', (req, res) => {
    const { description, amount } = req.body; // Input Handling (Data extract karna)

    // --- VALIDATION START ---
    // Rule 1: Description khali nahi honi chahiye
    if (!description || description.trim() === "") {
        return res.status(400).json({ error: "The expense description is required!" });
    }

    // Rule 2: Amount hamesha number ho aur 0 se badi ho
    if (typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ error: "Please enter a valid amount (the amount must be greater than 0)." });
    }
    // --- VALIDATION END ---

    // Agar validation pass ho gayi, toh naya object banayein
    const newExpense = {
        id: expenses.length + 1,
        description: description,
        amount: amount
    };

    // Database (Array) mein save karein
    expenses.push(newExpense);

    // Response: Status 201 (Created) aur success message JSON mein
    res.status(201).json({ message: "Expense successfully added!", data: newExpense });
});

// Server ko start karna
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});