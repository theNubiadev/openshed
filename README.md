# Openshed

Openshed is an app for buying foods online and making restaurant reservations.

## Features

- Browse and purchase a variety of foods online
- Make reservations at your favorite restaurants
- User-friendly interface
- Secure payment options

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/openshed.git
  ```
2. Navigate to the project directory:
  ```bash
  cd openshed
  ```
3. Install dependencies:
  ```bash
  npm install
  ```

## Usage

1. Start the development server:
  ```bash
  npm start
  ```
2. Open your browser and go to `http://localhost:3000`

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact us at support@openshed.com.

    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASAP Food</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            padding: 20px;
            background-color: #6B4226;
            color: #fff;
        }

        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }

        .food-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
            background: url('https://via.placeholder.com/1500x800/FFCC99/333?text=Jollof+Rice+Background') no-repeat center center fixed;
            background-size: cover;
            animation: fade 5s infinite alternate;
        }

        @keyframes fade {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0.8;
            }
        }

        .food-item {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
            width: 250px;
            transition: transform 0.3s;
        }

        .food-item:hover {
            transform: translateY(-10px);
        }

        .food-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .food-item h3 {
            margin: 10px 0;
            font-size: 1.2rem;
            color: #6B4226;
        }

        .order-button {
            display: inline-block;
            background-color: #3B8D25;
            color: #fff;
            padding: 10px 15px;
            margin-bottom: 15px;
            border: none;
            border-radius: 5px;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .order-button:hover {
            background-color: #316F1D;
        }

        .footer {
            text-align: center;
            padding: 15px;
            background-color: #6B4226;
            color: #fff;
        }
    </style>
</head>

<body>
    <header class="header">
        <h1>ASAP Food</h1>
        <p>Delicious Nigerian Cuisine Delivered Quickly</p>
    </header>

    <main>
        <div class="food-container">
            <!-- Food Items -->
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Amala and Ewedu">
                <h3>Amala and Ewedu</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Jollof Rice">
                <h3>Jollof Rice</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Chicken and Rice">
                <h3>Chicken and Rice</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Pounded Yam and Egusi">
                <h3>Pounded Yam and Egusi</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Efo Riro">
                <h3>Efo Riro</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Moi Moi">
                <h3>Moi Moi</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Ofada Rice">
                <h3>Ofada Rice</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Pepper Soup">
                <h3>Pepper Soup</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Akara and Pap">
                <h3>Akara and Pap</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Suya">
                <h3>Suya</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Egusi Soup">
                <h3>Egusi Soup</h3>
                <button class="order-button">Order</button>
            </div>
            <div class="food-item">
                <img src="https://via.placeholder.com/300x200" alt="Ewa Agoyin">
                <h3>Ewa Agoyin</h3>
                <button class="order-button">Order</button>
            </div>
            <!-- Add More Food Items Up to 20 -->
        </div>
    </main>

    <footer class="footer">
        <p>&copy; 2025 ASAP Food. All Rights Reserved.</p>
    </footer>
</body>

</html>
