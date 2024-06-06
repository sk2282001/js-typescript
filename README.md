# js-typescript

// document.addEventListener("DOMContentLoaded", function () {
// const newProductBtn = document.getElementById("newProductBtn");
// const editModal = document.getElementById("editModal");
// const newProductModal = document.getElementById("newProductModal");
// const saveChangesBtn = document.getElementById("saveChanges");
// const saveNewProductBtn = document.getElementById("saveNewProduct");
// const closeModalBtns = document.querySelectorAll(".close");
// const searchInput = document.getElementById("searchInput");

// newProductBtn.addEventListener("click", openNewProductModal);
// saveChangesBtn.addEventListener("click", saveChanges);
// saveNewProductBtn.addEventListener("click", saveNewProduct);
// document.addEventListener("click", handleDocumentClick);
// closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));
// searchInput.addEventListener("input", handleSearch);
// fetchProducts(0, 10);
// });

// function openNewProductModal() {
// const newProductModal = document.getElementById("newProductModal");
// newProductModal.style.display = "block";
// }

// function closeModal() {
// this.closest(".modal").style.display = "none";
// }
// // <p>Product ID: <span>${product.id}</span></p>
// function addProductHTML(product) {
//     const container = document.querySelector(".values");
//     const productHTML = `
// <div class="product" id="product-${product.id}">
// <img src="${product.images && product.images[0] ? product.images[0] : 'https://via.placeholder.com/150'}" alt="Product Image">
// <h3>Product Name: <span class="product-title">${product.title}</span></h3>
//     <h3>Product Brand: <span class="product-brand">${product.brand}</span></h3>
// <h3>Price: <span class="product-price">$${product.price}</span></h3>
//     <button class="edit" data-id="${product.id}">EDIT</button>
// <button class="delete" data-id="${product.id}">DELETE</button>
// </div>`;
// container.insertAdjacentHTML('beforeend', productHTML);
// }

// function fetchProducts(skip, limit, searchQuery = '') {
// let url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
// if (searchQuery) {
// url += `&q=${searchQuery}`;
// }
// fetch(url)
// .then(response => response.json())
// .then(data => {
// displayProducts(data.products);
// renderPagination(data.total, skip, limit, searchQuery);
// })
// .catch(error => {
// console.error("Error fetching the products:", error);
// });
// }

// function displayProducts(products) {
// const container = document.querySelector(".values");
// container.innerHTML = "";
// products.forEach(product => {
// addProductHTML(product);
// });
// }

// function deleteProduct(productId) {
// fetch(`https://dummyjson.com/products/${productId}`, {
// method: "DELETE"
// })
// .then(response => response.json())
// .then(() => {
// const productElement = document.getElementById(`product-${productId}`);
// if (productElement) {
// productElement.remove();
// } else {
// console.error(`Product element with ID product-${productId} not found.`);
// }
// })
// .catch(error => {
// console.error("Error deleting the product:", error);
// });
// }

// function openEditModal(id, title, brand, price) {
// const editModal = document.getElementById("editModal");
// document.getElementById("editId").value = id;
// document.getElementById("editTitle").value = title;
// document.getElementById("editBrand").value = brand;
// document.getElementById("editPrice").value = price;
// editModal.style.display = "block";
// }

// function saveChanges() {
// const id = document.getElementById("editId").value;
// const title = document.getElementById("editTitle").value;
// const brand = document.getElementById("editBrand").value;
// const price = document.getElementById("editPrice").value;

// if (!id || !title || !brand || !price) {
// console.error("One or more fields are undefined");
// return;
// }

// const productElement = document.getElementById(`product-${id}`);
// productElement.querySelector(".product-title").textContent = title;
// productElement.querySelector(".product-brand").textContent = brand;
// productElement.querySelector(".product-price").textContent = `$${price}`;

// closeModal.call(this);
// }

// function saveNewProduct() {
// const title = document.getElementById("newTitle").value;
// const brand = document.getElementById("newBrand").value;
// const price = document.getElementById("newPrice").value;

// if (!title || !brand || !price) {
// console.error("One or more fields are undefined");
// return;
// }

// fetch("https://dummyjson.com/products/add", {
// method: "POST",
// headers: {
// "Content-Type": "application/json"
// },
// body: JSON.stringify({
// title: title,
// brand: brand,
// price: price
// })
// })
// .then(response => response.json())
// .then(newProduct => {
// addProductHTML(newProduct);
// closeModal.call(this);
// })
// .catch(error => {
// console.error("Error adding the product:", error);
// });
// }

// function handleDocumentClick(event) {
// if (event.target.classList.contains("edit")) {
// const productId = event.target.dataset.id;
// const productElement = document.getElementById(`product-${productId}`);
// const title = productElement.querySelector(".product-title").textContent;
// const brand = productElement.querySelector(".product-brand").textContent;
// const price = parseFloat(productElement.querySelector(".product-price").textContent.replace("$", ""));
// openEditModal(productId, title, brand, price);
// } else if (event.target.classList.contains("delete")) {
// const productId = event.target.dataset.id;
// deleteProduct(productId);
// }
// }

// function handleSearch(event) {
// const searchQuery = event.target.value.trim();
// // fetchProducts(0, 10, searchQuery);
// if (searchQuery !== "") {
// fetchProducts(0, 10, searchQuery);
// // addProductHTML(searchQuery)
// } else {
// fetchProducts(0, 10);
// }
// }

// function renderPagination(totalCount, skip, limit, searchQuery) {
// const pages = Math.ceil(totalCount / limit);
// const paginationContainer = document.querySelector(".pagination");
// paginationContainer.innerHTML = "";

// const prevButton = document.createElement("button");
// prevButton.textContent = "Previous";
// prevButton.addEventListener("click", () => {
// const newSkip = Math.max(skip - limit, 0);
// fetchProducts(newSkip, limit, searchQuery);
// });
// paginationContainer.appendChild(prevButton);

// for (let i = 0; i < pages; i++) {
// const button = document.createElement("button");
// button.textContent = i + 1;
// button.addEventListener("click", () => {
// const newSkip = i _ limit;
// fetchProducts(newSkip, limit, searchQuery);
// });
// if (i _ limit === skip) {
// button.classList.add("active");
// }
// paginationContainer.appendChild(button);
// }

// const nextButton = document.createElement("button");
// nextButton.textContent = "Next";
// nextButton.addEventListener("click", () => {
// const newSkip = skip + limit;
// fetchProducts(newSkip, limit, searchQuery);
// });
// paginationContainer.appendChild(nextButton);
// }

// document.addEventListener("DOMContentLoaded", function () {
// const newProductBtn = document.getElementById("newProductBtn");
// const editModal = document.getElementById("editModal");
// const newProductModal = document.getElementById("newProductModal");
// const saveChangesBtn = document.getElementById("saveChanges");
// const saveNewProductBtn = document.getElementById("saveNewProduct");
// const closeModalBtns = document.querySelectorAll(".close");
// const searchInput = document.getElementById("searchInput");

// newProductBtn.addEventListener("click", openNewProductModal);
// saveChangesBtn.addEventListener("click", saveChanges);
// saveNewProductBtn.addEventListener("click", saveNewProduct);
// document.addEventListener("click", handleDocumentClick);
// closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));
// searchInput.addEventListener("input", handleSearch);
// fetchProducts(0, 10);
// });

// function openNewProductModal() {
// newProductModal.style.display = "block";
// }

// function closeModal() {
// this.closest(".modal").style.display = "none";
// }

// function addProductHTML(product) {
// const container = document.querySelector(".values");
// const productHTML = `
//         <div class="product" id="product-${product.id}">
//             <img src="${product.images && product.images[0] ? product.images[0] : 'https://via.placeholder.com/150'}" alt="Product Image">
//             <h3>Product Name: <span class="product-title">${product.title}</span></h3>
//             <h3>Product Brand: <span class="product-brand">${product.brand}</span></h3>
//             <h3>Price: <span class="product-price">$${product.price}</span></h3>
//             <button class="edit" data-id="${product.id}">EDIT</button>
//             <button class="delete" data-id="${product.id}">DELETE</button>
//         </div>`;
// container.insertAdjacentHTML('beforeend', productHTML);
// }

// function fetchProducts(skip, limit, searchQuery = '') {
// let url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
// if (searchQuery) {
// url += `&q=${searchQuery}`;
// }
// fetch(url)
// .then(response => response.json())
// .then(data => {
// displayProducts(data.products);
// renderPagination(data.total, skip, limit, searchQuery);
// })
// .catch(error => {
// console.error("Error fetching the products:", error);
// });
// }

// function displayProducts(products) {
// const container = document.querySelector(".values");
// container.innerHTML = "";
// products.forEach(product => {
// addProductHTML(product);
// });
// }

// function deleteProduct(productId) {
// fetch(`https://dummyjson.com/products/${productId}`, {
// method: "DELETE"
// })
// .then(response => response.json())
// .then(() => {
// const productElement = document.getElementById(`product-${productId}`);
// if (productElement) {
// productElement.remove();
// } else {
// console.error(`Product element with ID product-${productId} not found.`);
// }
// })
// .catch(error => {
// console.error("Error deleting the product:", error);
// });
// }

// function openEditModal(id, title, brand, price) {
// document.getElementById("editId").value = id;
// document.getElementById("editTitle").value = title;
// document.getElementById("editBrand").value = brand;
// document.getElementById("editPrice").value = price;
// editModal.style.display = "block";
// }

// function saveChanges() {
// const id = document.getElementById("editId").value;
// const title = document.getElementById("editTitle").value;
// const brand = document.getElementById("editBrand").value;
// const price = document.getElementById("editPrice").value;

// if (!id || !title || !brand || !price) {
// console.error("One or more fields are undefined");
// return;
// }

// const productElement = document.getElementById(`product-${id}`);
// productElement.querySelector(".product-title").textContent = title;
// productElement.querySelector(".product-brand").textContent = brand;
// productElement.querySelector(".product-price").textContent = `$${price}`;

// closeModal.call(this);
// }

// function saveNewProduct() {
// const title = document.getElementById("newTitle").value;
// const brand = document.getElementById("newBrand").value;
// const price = document.getElementById("newPrice").value;

// if (!title || !brand || !price) {
// console.error("One or more fields are undefined");
// return;
// }

// fetch("https://dummyjson.com/products/add", {
// method: "POST",
// headers: {
// "Content-Type": "application/json"
// },
// body: JSON.stringify({
// title: title,
// brand: brand,
// price: price
// })
// })
// .then(response => response.json())
// .then(newProduct => {
// addProductHTML(newProduct);
// closeModal.call(this);
// })
// .catch(error => {
// console.error("Error adding the product:", error);
// });
// }

// function handleDocumentClick(event) {
// if (event.target.classList.contains("edit")) {
// const productId = event.target.dataset.id;
// const productElement = document.getElementById(`product-${productId}`);
// const title = productElement.querySelector(".product-title").textContent;
// const brand = productElement.querySelector(".product-brand").textContent;
// const price = parseFloat(productElement.querySelector(".product-price").textContent.replace("$", ""));
// openEditModal(productId, title, brand, price);
// } else if (event.target.classList.contains("delete")) {
// const productId = event.target.dataset.id;
// deleteProduct(productId);
// }
// }

// function handleSearch(event) {
// const searchQuery = event.target.value.trim();
// fetchProducts(0, 10, searchQuery);
// }

// function renderPagination(totalCount, skip, limit, searchQuery) {
// const pages = Math.ceil(totalCount / limit);
// const paginationContainer = document.querySelector(".pagination");
// paginationContainer.innerHTML = "";

// const prevButton = document.createElement("button");
// prevButton.textContent = "Previous";
// prevButton.addEventListener("click", () => {
// const newSkip = Math.max(skip - limit, 0);
// fetchProducts(newSkip, limit, searchQuery);
// });
// paginationContainer.appendChild(prevButton);

// for (let i = 0; i < pages; i++) {
// const button = document.createElement("button");
// button.textContent = (i + 1).toString();
// button.addEventListener("click", () => {
// const newSkip = i _ limit;
// fetchProducts(newSkip, limit, searchQuery);
// });
// if (i _ limit === skip) {
// button.classList.add("active");
// }
// paginationContainer.appendChild(button);
// }

// const nextButton = document.createElement("button");
// nextButton.textContent = "Next";
// nextButton.addEventListener("click", () => {
// const newSkip = skip + limit;
// fetchProducts(newSkip, limit, searchQuery);
// });
// paginationContainer.appendChild(nextButton);
// }



// document.addEventListener("DOMContentLoaded", function () {
//     const newProductBtn = document.getElementById("newProductBtn");
//     const editModal = document.getElementById("editModal");
//     const newProductModal = document.getElementById("newProductModal");
//     const saveChangesBtn = document.getElementById("saveChanges");
//     const saveNewProductBtn = document.getElementById("saveNewProduct");
//     const closeModalBtns = document.querySelectorAll(".close");
//     const searchInput = document.getElementById("searchInput") as HTMLInputElement;

//     if (newProductBtn) {
//         newProductBtn.addEventListener("click", openNewProductModal);
//     }

//     if (saveChangesBtn) {
//         saveChangesBtn.addEventListener("click", saveChanges);
//     }

//     if (saveNewProductBtn) {
//         saveNewProductBtn.addEventListener("click", saveNewProduct);
//     }

//     document.addEventListener("click", handleDocumentClick);

//     if (closeModalBtns) {
//         closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));
//     }

//     if (searchInput) {
//         searchInput.addEventListener("input", handleSearch);
//     }

//     fetchProducts(0, 10);
// });

// function openNewProductModal() {
//     const newProductModal = document.getElementById("newProductModal");
//     if (newProductModal) {
//         newProductModal.style.display = "block";
//     }
// }

// function closeModal(this: HTMLElement) {
//     const modal = this.closest(".modal") as HTMLElement;
//     if (modal) {
//         modal.style.display = "none";
//     }
// }

// function addProductHTML(product: { id: number, title: string, brand: string, price: number, images?: string[] }) {
//     const container = document.querySelector(".values");
//     if (!container) return;
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

// function fetchProducts(skip: number, limit: number, searchQuery: string = '') {
//     let url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
//     if (searchQuery) {
//         url += `&q=${searchQuery}`;
//     }
//     fetch(url)
//         .then(response => response.json())
//         .then((data: { products: { id: number, title: string, brand: string, price: number, images?: string[] }[], total: number }) => {
//             displayProducts(data.products);
//             renderPagination(data.total, skip, limit, searchQuery);
//         })
//         .catch(error => {
//             console.error("Error fetching the products:", error);
//         });
// }

// function displayProducts(products: { id: number, title: string, brand: string, price: number, images?: string[] }[]) {
//     const container = document.querySelector(".values");
//     if (!container) return;
//     container.innerHTML = "";
//     products.forEach(product => {
//         addProductHTML(product);
//     });
// }

// function deleteProduct(productId: number) {
//     fetch(`https://dummyjson.com/products/${productId}`, {
//         method: "DELETE"
//     })
//         .then(response => response.json())
//         .then(() => {
//             const productElement = document.getElementById(`product-${productId}`);
//             if (productElement) {
//                 productElement.remove();
//             } else {
//                 console.error(`Product element with ID product-${productId} not found.`);
//             }
//         })
//         .catch(error => {
//             console.error("Error deleting the product:", error);
//         });
// }

// function openEditModal(id: number, title: string, brand: string, price: number) {
//     const editModal = document.getElementById("editModal");
//     if (!editModal) return;
//     (document.getElementById("editId") as HTMLInputElement).value = id.toString();
//     (document.getElementById("editTitle") as HTMLInputElement).value = title;
//     (document.getElementById("editBrand") as HTMLInputElement).value = brand;
//     (document.getElementById("editPrice") as HTMLInputElement).value = price.toString();
//     editModal.style.display = "block";
// }

// function saveChanges() {
//     const id = +(document.getElementById("editId") as HTMLInputElement).value;
//     const title = (document.getElementById("editTitle") as HTMLInputElement).value;
//     const brand = (document.getElementById("editBrand") as HTMLInputElement).value;
//     const price = +(document.getElementById("editPrice") as HTMLInputElement).value;

//     if (!id || !title || !brand || !price) {
//         console.error("One or more fields are undefined");
//         return;
//     }

//     const productElement = document.getElementById(`product-${id}`);
//     if (!productElement) return;
//     productElement.querySelector(".product-title")!.textContent = title;
//     productElement.querySelector(".product-brand")!.textContent = brand;
//     productElement.querySelector(".product-price")!.textContent = `$${price}`;

//     closeModal.call(this);
// }

// function saveNewProduct() {
//     const title = (document.getElementById("newTitle") as HTMLInputElement).value;
//     const brand = (document.getElementById("newBrand") as HTMLInputElement).value;
//     const price = +(document.getElementById("newPrice") as HTMLInputElement).value;

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
//         .then(response => response.json())
//         .then(newProduct => {
//             addProductHTML(newProduct);
//             closeModal.call(this);
//         })
//         .catch(error => {
//             console.error("Error adding the product:", error);
//         });
// }

// function handleDocumentClick(event: MouseEvent) {
//     if ((event.target as HTMLElement).classList.contains("edit")) {
//         const productId = +(event.target as HTMLElement).dataset.id!;
//         const productElement = document.getElementById(`product-${productId}`);
//         if (!productElement) return;
//         const title = productElement.querySelector(".product-title")!.textContent!;
//         const brand = productElement.querySelector(".product-brand")!.textContent!;
//         const price = parseFloat(productElement.querySelector(".product-price")!.textContent!.replace("$", ""));
//         openEditModal(productId, title, brand, price);
//     } else if ((event.target as HTMLElement).classList.contains("delete")) {
//         const productId = +(event.target as HTMLElement).dataset.id!;
//         deleteProduct(productId);
//     }
// }

// function handleSearch(event: Event) {
//     const searchQuery = (event.target as HTMLInputElement).value.trim();
//     if (searchQuery !== "") {
//         fetchProducts(0, 10, searchQuery);
//     } else {
//         fetchProducts(0, 10);
//     }
// }

// function renderPagination(totalCount: number, skip: number, limit: number, searchQuery: string) {
//     const pages = Math.ceil(totalCount / limit);
//     const paginationContainer = document.querySelector(".pagination") as HTMLDivElement;
//     paginationContainer.innerHTML = "";
//     const prevButton = document.createElement("button");
//     prevButton.textContent = "Previous";
//     prevButton.addEventListener("click", () => {
//         const newSkip = Math.max(skip - limit, 0);
//         fetchProducts(newSkip, limit, searchQuery);
//     });
//     paginationContainer.appendChild(prevButton);

//     for (let i = 0; i < pages; i++) {
//         const button = document.createElement("button");
//         button.textContent = (i + 1).toString();
//         button.addEventListener("click", () => {
//             const newSkip = i * limit;
//             fetchProducts(newSkip, limit, searchQuery);
//         });
//         if (i * limit === skip) {
//             button.classList.add("active");
//         }
//         paginationContainer.appendChild(button);
//     }

//     const nextButton = document.createElement("button");
//     nextButton.textContent = "Next";
//     nextButton.addEventListener("click", () => {
//         const newSkip = skip + limit;
//         fetchProducts(newSkip, limit, searchQuery);
//     });
//     paginationContainer.appendChild(nextButton);
// }