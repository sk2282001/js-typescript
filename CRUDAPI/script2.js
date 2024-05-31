// document.addEventListener("DOMContentLoaded", function() {
//     const newProductBtn = document.getElementById("newProductBtn");
//     const editModal = document.getElementById("editModal");
//     const newProductModal = document.getElementById("newProductModal");
//     const saveChangesBtn = document.getElementById("saveChanges");
//     const saveNewProductBtn = document.getElementById("saveNewProduct");

//     newProductBtn.addEventListener("click", openNewProductModal);
//     saveChangesBtn.addEventListener("click", saveChanges);
//     saveNewProductBtn.addEventListener("click", saveNewProduct);
//     document.addEventListener("click", handleDocumentClick);
//     window.onclick = handleWindowClick;
//     fetchProducts();
// });

// function openNewProductModal() {
//     const newProductModal = document.getElementById("newProductModal");
//     newProductModal.style.display = "block";
// }

// function closeModal(modal) {
//     modal.style.display = "none";
// }

// //<p>Product ID: <span>${product.id}</span></p>
// function addProductHTML(product) {
//     const container = document.querySelector(".values");
//     const productHTML = `
//         <div class="product" id="product-${product.id}">
//             <img src="${product.images && product.images[0] ? product.images[0] : 'https://via.placeholder.com/150'}" alt="Product Image">
//             <h3>Product Name: <span class="product-title">${product.title}</span></h3>
//             <h3>Product Brand: <span class="product-brand">${product.brand}</span></h3>
//             <h3>Price: <span class="product-price">$${product.price}</span></h3>
//             <button class="edit" data-id="${product.id}">EDIT</button>
//             <button class="delete" data-id="${product.id}">DELETE</button>
//         </div>`;
//     container.insertAdjacentHTML('beforeend', productHTML);
// }

// function fetchProducts() {
//     fetch("https://dummyjson.com/products")
//         .then(response => response.json())
//         .then(data => {
//             displayProducts(data.products);
//         })
//         .catch(error => {
//             console.error("Error fetching the products:", error);
//         });
// }

// function displayProducts(products) {
//     const container = document.querySelector(".values");
//     container.innerHTML = "";
//     products.forEach(product => {
//         addProductHTML(product);
//     });
// }

// function deleteProduct(productId) {
//     fetch(`https://dummyjson.com/products/${productId}`, {
//         method: "DELETE"
//     })
//     .then(response => response.json())
//     .then(() => {
//         const productElement = document.getElementById(`product-${productId}`);
//         if (productElement) {
//             productElement.remove();
//         } else {
//             console.error(`Product element with ID product-${productId} not found.`);
//         }
//     })
//     .catch(error => {
//         console.error("Error deleting the product:", error);
//     });
// }

// function openEditModal(id, title, brand, price) {
//     const editModal = document.getElementById("editModal");
//     document.getElementById("editId").value = id;
//     document.getElementById("editTitle").value = title;
//     document.getElementById("editBrand").value = brand;
//     document.getElementById("editPrice").value = price;
//     editModal.style.display = "block";
// }

// function saveChanges() {
//     const id = document.getElementById("editId").value;
//     const title = document.getElementById("editTitle").value;
//     const brand = document.getElementById("editBrand").value;
//     const price = document.getElementById("editPrice").value;

//     console.log(id);
//     console.log(title);
//     console.log(brand);
//     console.log(price);

//     if (!id || !title || !brand || !price) {
//         console.error("One or more fields are undefined");
//         return;
//     }

//     fetch(`https://dummyjson.com/products/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: title,
//             brand: brand,
//             price: price
//         })
//     })
//     .then(response => response.json())
//     .then(updatedProduct => {
//         const productElement = document.getElementById(`product-${id}`);
//         productElement.querySelector(".product-title").textContent = updatedProduct.title;
//         productElement.querySelector(".product-brand").textContent = updatedProduct.brand;
//         productElement.querySelector(".product-price").textContent = `$${updatedProduct.price}`;
//         saveNewProduct(updatedProduct)
//         closeModal(editModal);
//     })
//     .catch(error => {
//         console.error("Error updating the product:", error);
//     });
// }

// function saveNewProduct() {
//     const title = document.getElementById("newTitle").value;
//     const brand = document.getElementById("newBrand").value;
//     const price = document.getElementById("newPrice").value;

//     console.log(title);
//     console.log(brand);
//     console.log(price);

//     if (!title || !brand || !price) {
//         console.error("One or more fields are undefined");
//         return;
//     }

//     fetch("https://dummyjson.com/products/add", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: title,
//             brand: brand,
//             price: price
//         })
//     })
//     .then(response => response.json())
//     .then(newProduct => {
//         addProductHTML(newProduct);
//         // closeModal(document.getElementById("newProductModal"));
//     })
//     .catch(error => {
//         console.error("Error adding the product:", error);
//     });
// }

// function handleDocumentClick(event) {
//     if (event.target.classList.contains("edit")) {
//         const productId = event.target.dataset.id;
//         const productElement = document.getElementById(`product-${productId}`);
//         const title = productElement.querySelector(".product-title").textContent;
//         const brand = productElement.querySelector(".product-brand").textContent;
//         const price = parseFloat(productElement.querySelector(".product-price").textContent.replace("$", ""));
//         openEditModal(productId, title, brand, price);
//     } else if (event.target.classList.contains("delete")) {
//         const productId = event.target.dataset.id;
//         deleteProduct(productId);
//     }
// }

// function handleWindowClick(event) {
//     const editModal = document.getElementById("editModal");
//     const newProductModal = document.getElementById("newProductModal");
//     if (event.target == editModal) {
//         closeModal(editModal);
//     } else if (event.target == newProductModal) {
//         closeModal(newProductModal);
//     }
// }


document.addEventListener("DOMContentLoaded", function() {
    const newProductBtn = document.getElementById("newProductBtn");
    const editModal = document.getElementById("editModal");
    const newProductModal = document.getElementById("newProductModal");
    const saveChangesBtn = document.getElementById("saveChanges");
    const saveNewProductBtn = document.getElementById("saveNewProduct");
    const closeModalBtns = document.querySelectorAll(".close");

    newProductBtn.addEventListener("click", openNewProductModal);
    saveChangesBtn.addEventListener("click", saveChanges);
    saveNewProductBtn.addEventListener("click", saveNewProduct);
    document.addEventListener("click", handleDocumentClick);
    closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));
    fetchProducts();
});

function openNewProductModal() {
    const newProductModal = document.getElementById("newProductModal");
    newProductModal.style.display = "block";
}

function closeModal() {
    this.closest(".modal").style.display = "none";
}

function addProductHTML(product) {
    const container = document.querySelector(".values");
    const productHTML = `
        <div class="product" id="product-${product.id}">
            <img src="${product.images && product.images[0] ? product.images[0] : 'https://via.placeholder.com/150'}" alt="Product Image">
            <p>Product ID: <span>${product.id}</span></p>
            <h3>Product Name: <span class="product-title">${product.title}</span></h3>
            <h3>Product Brand: <span class="product-brand">${product.brand}</span></h3>
            <h3>Price: <span class="product-price">$${product.price}</span></h3>
            <button class="edit" data-id="${product.id}">EDIT</button>
            <button class="delete" data-id="${product.id}">DELETE</button>
        </div>`;
    container.insertAdjacentHTML('beforeend', productHTML);
}

function fetchProducts() {
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
            displayProducts(data.products);
        })
        .catch(error => {
            console.error("Error fetching the products:", error);
        });
}

function displayProducts(products) {
    const container = document.querySelector(".values");
    container.innerHTML = "";
    products.forEach(product => {
        addProductHTML(product);
    });
}

function deleteProduct(productId) {
    fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {
        const productElement = document.getElementById(`product-${productId}`);
        if (productElement) {
            productElement.remove();
        } else {
            console.error(`Product element with ID product-${productId} not found.`);
        }
    })
    .catch(error => {
        console.error("Error deleting the product:", error);
    });
}

function openEditModal(id, title, brand, price) {
    const editModal = document.getElementById("editModal");
    document.getElementById("editId").value = id;
    document.getElementById("editTitle").value = title;
    document.getElementById("editBrand").value = brand;
    document.getElementById("editPrice").value = price;
    editModal.style.display = "block";
}

function saveChanges() {
    const id = document.getElementById("editId").value;
    const title = document.getElementById("editTitle").value;
    const brand = document.getElementById("editBrand").value;
    const price = document.getElementById("editPrice").value;

    console.log(id);
    console.log(title);
    console.log(brand);
    console.log(price);

    if (!id || !title || !brand || !price) {
        console.error("One or more fields are undefined");
        return;
    }

    // Update the existing product in the UI
    const productElement = document.getElementById(`product-${id}`);
    productElement.querySelector(".product-title").textContent = title;
    productElement.querySelector(".product-brand").textContent = brand;
    productElement.querySelector(".product-price").textContent = `$${price}`;

    closeModal.call(this);
    console.log(this)
}

function saveNewProduct() {
    const title = document.getElementById("newTitle").value;
    const brand = document.getElementById("newBrand").value;
    const price = document.getElementById("newPrice").value;

    console.log(title);
    console.log(brand);
    console.log(price);

    if (!title || !brand || !price) {
        console.error("One or more fields are undefined");
        return;
    }

    fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            brand: brand,
            price: price
        })
    })
    .then(response => response.json())
    .then(newProduct => {
        addProductHTML(newProduct);
        closeModal.call(this);
    })
    .catch(error => {
        console.error("Error adding the product:", error);
    });
}

function handleDocumentClick(event) {
    if (event.target.classList.contains("edit")) {
        const productId = event.target.dataset.id;
        const productElement = document.getElementById(`product-${productId}`);
        const title = productElement.querySelector(".product-title").textContent;
        const brand = productElement.querySelector(".product-brand").textContent;
        const price = parseFloat(productElement.querySelector(".product-price").textContent.replace("$", ""));
        openEditModal(productId, title, brand, price);
    } else if (event.target.classList.contains("delete")) {
        const productId = event.target.dataset.id;
        deleteProduct(productId);
    }
}
