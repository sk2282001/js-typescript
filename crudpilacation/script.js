document.addEventListener("DOMContentLoaded", function () {
    const newProductBtn = document.getElementById("newProductBtn");
    const editModal = document.getElementById("editModal");
    const newProductModal = document.getElementById("newProductModal");
    const saveChangesBtn = document.getElementById("saveChanges");
    const saveNewProductBtn = document.getElementById("saveNewProduct");
    const closeModalBtns = document.querySelectorAll(".close");
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", handleSearchInput);

    newProductBtn.addEventListener("click", openNewProductModal);
    saveChangesBtn.addEventListener("click", saveChanges);
    saveNewProductBtn.addEventListener("click", saveNewProduct);
    document.addEventListener("click", handleDocumentClick);
    closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));
    fetchProducts();
});

function handleSearchInput(event) {
    const searchQuery = event.target.value.trim();
    if (searchQuery === "") {
        fetchProducts(1); // Fetch products for the first page if search query is empty
    } else {
        fetchProducts(1, 10, searchQuery); // Fetch products based on search query for the first page
    }
}


// Other functions remain the same...


function openNewProductModal() {
    const newProductModal = document.getElementById("newProductModal");
    newProductModal.style.display = "block";
}

function closeModal() {
    this.closest(".modal").style.display = "none";
}

function addProductHTML(product) {
    const container = document.querySelector(".products");
    const productHTML = `
        <div class="product" id="product-${product.id}">
            <img src="${product.images && product.images[0] ? product.images[0] : 'https://via.placeholder.com/150'}" alt="Product Image">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>Brand: ${product.brand}</p>
                <p>Price: $${product.price}</p>
            </div>
            <button class="edit" data-id="${product.id}">Edit</button>
            <button class="delete" data-id="${product.id}">Delete</button>
        </div>`;
    container.insertAdjacentHTML('beforeend', productHTML);
}

function displayProducts(data) {
    const container = document.querySelector(".products");
    container.innerHTML = "";
    if (Array.isArray(data.products)) {
        data.products.forEach(product => {
            addProductHTML(product);
        });
    } else {
        addProductHTML(data);
    }
}

function handleSearchInput(event) {
    const searchQuery = event.target.value.trim();
    if (searchQuery === "") {
        fetchProducts();
    }
}
function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput !== "") {
        fetch(`https://dummyjson.com/products/search?q=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                displayProducts(data);
            })
            .catch(error => {
                console.error("Error searching for products:", error);
            });
    }
}

function handleDocumentClick(event) {
    if (event.target.classList.contains("edit")) {
        const productId = event.target.dataset.id;
        const productElement = document.getElementById(`product-${productId}`);
        const title = productElement.querySelector(".product-info h3").textContent;
        const brand = productElement.querySelector(".product-info p:nth-of-type(1)").textContent.split(":")[1].trim();
        const price = parseFloat(productElement.querySelector(".product-info p:nth-of-type(2)").textContent.split("$")[1].trim());
        openEditModal(productId, title, brand, price);
    } else if (event.target.classList.contains("delete")) {
        const productId = event.target.dataset.id;
        deleteProduct(productId);
    }
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
    // Implement saving changes logic here
    closeModal.call(this);
}

function saveNewProduct() {
    // Implement saving new product logic here
    closeModal.call(this);
}
