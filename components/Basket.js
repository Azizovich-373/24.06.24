
    const dialog_basket = document.createElement('dialog')
    const close_basket = document.createElement('button')
    const box_basket = document.createElement('div')
    const basket = document.createElement('div')
    const total_box = document.createElement('div')
    const box_buy = document.createElement('div')
    const close_img = document.createElement('img')
    const left_basket = document.createElement('div')
    const right_basket = document.createElement('div')
    const img_basket = document.createElement('img')
    const nav_left = document.createElement('div')
    const name_prod = document.createElement('h3')
    const grid_prod = document.createElement('div')
    const mines = document.createElement('button')
    const many = document.createElement('div')
    const plus = document.createElement('button')
    const price = document.createElement('p')
    const remove = document.createElement('button')
    const hr = document.createElement('hr')
    const total_h = document.createElement('h4')
    const total = document.createElement('h5')
    const buy = document.createElement('button')

    dialog_basket.classList.add('dialog')
    close_basket.classList.add('close')
    box_basket.classList.add('box_basket')
    basket.classList.add('basket')
    total_box.classList.add('total_box')
    box_buy.classList.add('box_buy')
    left_basket.classList.add('left_basket')
    right_basket.classList.add('right_basket')
    img_basket.classList.add('img_basket')
    nav_left.classList.add('nav_left')
    name_prod.classList.add('name_prod')
    grid_prod.classList.add('grid_prod')
    mines.classList.add('mines')
    many.classList.add('many')
    plus.classList.add('plus')
    price.classList.add('price')
    remove.classList.add('remove')
    total_h.classList.add('total_h')
    total.classList.add('total')
    buy.classList.add('buy')
    name_prod.innerHTML = 'Cozy Blanket'
    mines.innerHTML = '-'
    many.innerHTML = '1'
    plus.innerHTML = '+'
    price.innerHTML = '$300'
    remove.innerHTML = 'Remove'
    total_h.innerHTML = 'Итого'
    total.innerHTML = '$300'
    buy.innerHTML = 'Перейти к оформлению'
    close_img.src = 'http://gillbachbahn.bahnwiki.org/images/thumb/3/32/SYMB_SCHLIESSEN.png/50px-SYMB_SCHLIESSEN.png'
    img_basket.src = 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'

    dialog_basket.append(close_basket, box_basket, total_box, box_buy)
    close_basket.append(close_img)
    box_basket.append(basket)
    basket.append(left_basket,right_basket)
    left_basket.append(img_basket,nav_left)
    nav_left.append(name_prod,grid_prod)
    grid_prod.append(mines,many,plus)
    right_basket.append(price,remove)
    total_box.append(total_h,total)
    box_buy.append(buy)

    const body = document.body

    body.append(dialog_basket)