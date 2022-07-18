# Интернет магазин одежды и аксессуаров "Brand"
Фиктивный сервер для магазина одежды и аксессуаров "Brand"

## Установка проекта:
npm install | yarn install

## Запуск сервера:
npm run serve | yarn serve

## API
1. Каталог: http://localhost:3030/api/catalog
    - каталог женский|мужской|детский|аксессуары: http://localhost:3030/api/catalog/?page=men|women|kids|accessories
    - коллекции: http://localhost:3030/api/catalog/?collection=название_коллекции"
    - каталог по категории: http://localhost:3030/api/catalog/?categories=["type|category",[...]]
    - каталог по бренду: http://localhost:3030/api/catalog/?brands=["название_бренда",[...]]
    - каталог по цвету: http://localhost:3030/api/catalog/?colors=["цвет",[...]]
    - поиск по каталогу: http://localhost:3030/api/catalog/?filter=["любое_слово_более_двух_букв",[...]]
    - сортировка каталога: http://localhost:3030/api/catalog/?sortBy={"поле":"способ_сортировки",[...]}
2. Категории: http://localhost:3030/api/catalog/categories/
3. Бренды: http://localhost:3030/api/catalog/brands/
4. Палитра цветов: http://localhost:3030/api/catalog/colors/
5. Отзывы: http://localhost:3030/api/reviews/
6. Списки:
    - города: http://localhost:3030/api/lists/cities/
    - регионы: http://localhost:3030/api/lists/regions/
7. Корзина:
    - список товаров: http://localhost:3030/api/cart/
    - добавить товар: http://localhost:3030/api/cart/ (post)
    - увеличить количество товара: http://localhost:3030/api/cart/ (put)
    - убрать/уменьшить количество товара: http://localhost:3030/api/cart/ (delete)
    - очистить: http://localhost:3030/api/cart/clear/ (delete)
