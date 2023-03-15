//// Define la clase Product con un constructor que inicializa las propiedades id, name, price y quantity.
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = 0;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    //Método para agregar un producto al carrito.
    addProduct(product) {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index >= 0) {
            this.products[index].quantity += product.quantity;
        } else {
            this.products.push(product);
        }
    }
    // Método para eliminar un producto del carrito.
    removeProduct(productId) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index >= 0) {
            this.products.splice(index, 1);
        }
    }
    // Método para calcular el total de la compra.
    getTotal() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    // Método para obtener la cantidad total de productos en el carrito.
    getCount() {
        return this.products.reduce((count, product) => count + product.quantity, 0);
    }
}

// Crea algunos productos de ejemplo utilizando la clase Product.
const products = [
    new Product('1', 'Hoodie', 23000),
    new Product('2', 'Pantalon', 15000),
    new Product('3', 'Sneaker', 55600),
    new Product('4', 'Cap', 11000)
];

// Función para ejecutar la aplicación.
function runShoppingCart() {
    // Crear una instancia del carrito de compras
    const cart = new ShoppingCart();

    // Crear una cadena de texto con las opciones válidas de productos
    let validOptions = 'Opciones válidas de productos:\n';
    products.forEach(product => validOptions += `${product.name} - ${product.id}\n`);

    // Muestra las opciones válidas de productos en una alerta
    alert(validOptions);

    // Bucle principal de la aplicación
    while (true) {
        // Muestra el menú de opciones y obtiene la selección del usuario.
        const option = prompt('Seleccione una opción:\n1. Agregar producto al carrito\n2. Eliminar producto del carrito\n3. Ver el total de la compra\n4. Ver los productos en el carrito\n5. Ver el total de productos y el total de la compra\n6. Finalizar compra\n7. Salir');

        // Ejecuta la acción seleccionada por el usuario.
        if (option === '1') {
            // Solicitar al usuario el ID del producto que desea agregar al carrito.
            const productId = prompt('Ingrese el id del producto que desea agregar al carrito:');
            // Busca el producto por su ID.
            const product = products.find(product => product.id === productId);
            // Si el producto existe, solicita la cantidad que desea agregar y agrega el mismo al carrito.
            if (product) {
                const quantity = prompt('Ingrese la cantidad de productos que desea agregar al carrito:');
                product.quantity = Number(quantity);
                cart.addProduct(product);
                alert('Producto agregado al carrito.');
            } else {
                alert('Producto no encontrado.');
            }
        } else if (option === '2') {
            // Solicitar al usuario el ID del producto que desea eliminar del carrito y lo elimina.
            const productId = prompt('Ingrese el id del producto que desea eliminar del carrito:');
            cart.removeProduct(productId);
            alert('Producto eliminado del carrito.');
        } else if (option === '3') {
            // Muestra el total de la compra.
            const total = cart.getTotal();
            alert(`El total de la compra es: ${total}`);
        } else if (option === '4') {
            // Muestra los productos que estan cargados en el carrito.
            let message = 'Productos en el carrito:\n';
            cart.products.forEach(product => message += `${product.name} - ${product.quantity}\n`);
            alert(message);
        } else if (option === '5') {
            // Muestra el total de productos y el total de la compra.
            const count = cart.getCount();
            const total = cart.getTotal();
            alert(`Total de productos: ${count}\nTotal de la compra: $${total}`);
        } else if (option === '6') {
            // Muestra el total de productos y el total de la compra y finaliza la compra.
            const count = cart.getCount();
            const total = cart.getTotal();
            alert(`Total de productos: ${count}\nTotal de la compra: $${total}`);
            break
        } else if (option === '7') {
            break;
        } else {
            alert('Opción inválida.');
        }
    }
}

// Ejecutar la aplicación
runShoppingCart();
