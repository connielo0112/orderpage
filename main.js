// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "師園滷味",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "冰咖啡",
    price: 180
  },
  {
    id: "product-5",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "冰拿鐵",
    price: 220
  },
  {
    id: "product-6",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "冰可可",
    price: 220
  },
  {
    id: "product-7",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "冰可樂",
    price: 120
  },
  {
    id: "product-8",
    imgUrl:
      "https://1.bp.blogspot.com/-jUldvEFBoWo/YOwvXfmoIdI/AAAAAAAGEDA/xxhBFKoZANoCXYFOFhaUfrnAiLBwwAhUACPcBGAsYHg/s800/12.jpg",
    name: "咖喱飯",
    price: 520
  }
];
// ======= 請從這裡開始 =======
//1.將菜單資料放到menu
function displayＭenu(products) {
  let content = ''

  products.forEach(function (product) {
    content += `
    <div class ="grid">
      <div class="col-3 d-flex justify-content-center">
        <div class="card">
          <img src="${product.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <button class="btn btn-primary order-btn" id="${product.id}">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    `
    menu.innerHTML = content
  })
}

displayＭenu(productData)

//2. 按下「加入購物車」按鈕後，購物車清單會新增一列資料
menu.addEventListener('click', function (orderFood) {

  const target = event.target
  if (!target.classList.contains('order-btn')) {
    return
  }

  let product = null
  for (const data of productData) {
    if (data.id === target.id) {
      product = data
      break
    }
  }


  const list = document.createElement('li')
  list.classList.add('list-group-item')
  list.textContent = `${product.name} X 1`
  cart.appendChild(list)

  let totalamount = totalAmount.textContent
  let totalAmountInitValue = '--'
  if (totalamount === totalAmountInitValue) {
    totalamount = 0
  } else {
    totalamount = Number(totalamount)
  }
  totalAmount.textContent = totalamount + product.price

})

//3. 送出訂單會跳出收據
button.addEventListener('click', function checkout(event) {
  const alertMessage = `感謝您的購買！\n總金額：${totalAmount.textContent}元`

  alert(alertMessage)
  totalAmountBox.textContent = totalAmountInitValue
  cart.innerHTML = ''
})
