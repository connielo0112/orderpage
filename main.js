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
      "https://www.ihergo.com/photo/product/11/750_11_1620725353848.jpg",
    name: "鹹酥雞",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://i.beauty321.com/816x/https://il.beauty321.com/gallery/gallery/31731/photo-5e8ee702d5cca.jpg",
    name: "蘿蔔糕",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://d3l76hx23vw40a.cloudfront.net/recipe/gy36-031.jpg",
    name: "四季豆",
    price: 60
  },
  {
    id: "product-4",
    imgUrl:
      "https://picdn.gomaji.com/uploads/stores/312/142312/232114/IMG_0309.jpg",
    name: "雞蛋豆腐",
    price: 60
  },
  {
    id: "product-5",
    imgUrl:
      "https://img.ltn.com.tw/Upload/food/page/2014/12/02/141202-152-3-gDo0n.jpg",
    name: "炸湯圓",
    price: 220
  },
  {
    id: "product-6",
    imgUrl:
      "https://d31pvszaz82ppm.cloudfront.net/82909853-30b0-43c2-bce9-6e48b6f440d4_480.jpg",
    name: "炸魷魚",
    price: 220
  },
  {
    id: "product-7",
    imgUrl:
      "https://nash.tw/wp-content/uploads/DSC_4327_%E7%BB%93%E6%9E%9C-1-scaled.jpg",
    name: "綜合套餐 B",
    price: 170
  },
  {
    id: "product-8",
    imgUrl:
      "https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202004/5E8F0A1C395F91586432540.jpeg",
    name: "豪華套餐 A",
    price: 260
  },
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
            <h4 class="card-title">${product.name}</h4>
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
