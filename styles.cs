body {
    font-family: 'Arial', sans-serif;
    direction: rtl;
    background-color: #f0f8ff;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
}

h1 {
    text-align: center;
    font-size: 2em;
    color: #333;
}

input, select {
    width: calc(100% - 22px);
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    transition: border-color 0.3s;
}

input:focus, select:focus {
    border-color: #007bff;
    outline: none;
}

button {
    background-color: #28a745;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    width: 100%;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #218838;
}

button.red {
    background-color: #dc3545;
}

button.red:hover {
    background-color: #c82333;
}

button.green {
    background-color: #007bff;
}

button.green:hover {
    background-color: #0069d9;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table, th, td {
    border: 1px solid #ccc;
}

th, td {
    padding: 12px;
    text-align: center;
    background-color: #f9f9f9;
}

th {
    background-color: #007bff;
    color: white;
}

tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

#suggestionsList {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: white;
    position: absolute;
    z-index: 10;
}

#suggestionsList li {
    padding: 10px;
    cursor: pointer;
}

#suggestionsList li:hover {
    background-color: #f0f0f0;
}
