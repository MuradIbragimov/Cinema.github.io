const listMovie = document.getElementById("movie");
const countSeats = document.getElementById("count");
const totalPrice = document.getElementById("total");
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
let selectedSeatsCount = 0; // Глобальная переменная для хранения количества выбранных мест
let price = 0;

function handleSeatClick(seat) {
    seat.addEventListener('click', () => {
        // Проверяем, имеет ли место класс 'selected'
        if (seat.classList.contains('selected')) {
            // Если имеет, то убираем класс 'selected' и возвращаем старый цвет
            seat.classList.remove('selected');
            seat.style.backgroundColor = ''; // Возвращаем старый цвет
            selectedSeatsCount--; // Уменьшаем счетчик выбранных мест
        } else {
            // Если не имеет, то добавляем класс 'selected' и меняем цвет на новый
            seat.classList.add('selected');
            selectedSeatsCount++; // Увеличиваем счетчик выбранных мест
        }
        // Обновляем общее количество и стоимость
        updateTotal();
    });
}

// Применяем обработчик к каждому месту
seats.forEach(seat => {
    handleSeatClick(seat);
});

// Функция для обновления общего количества и стоимости
function updateTotal() {
    countSeats.innerText = selectedSeatsCount;
    // Обновляем общую стоимость
    priceSum();
}

// Функция для суммирования цены
function priceSum() {
    // Сбрасываем текущую общую стоимость
    price = 0;

    // Перебираем все выбранные места
    seats.forEach(seat => {
        if (seat.classList.contains('selected')) {
            // Получаем цену фильма из списка
            const moviePrice = parseInt(listMovie.value);
            // Увеличиваем общую стоимость на цену выбранного места
            price += moviePrice;
        }
    });

    // Обновляем отображение общей стоимости на странице
    totalPrice.innerHTML = price;
}

// Вызываем функцию priceSum при изменении выбранного фильма
listMovie.addEventListener('change', priceSum);
