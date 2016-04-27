
$(document).ready(function() {

    var html = $('#test').html();
    var data = {
        name: 'Чернавских Алина',
        photo: 'img/me.jpg',
        work_place: 'Мерчендайзер,помощник территориального менеджера',
        reason1: 'Меня привлекает это направление',
        reason2: 'Моя мечта-получить работу по душе (поэтому я здесь)',
        reason3: 'Не вдохновляет моя текущая работа',
        tel_num: '80500219661' ,
        vk_id: 'https://vk.com/id20504573',
        feedback: 'Обладаю коллекцией великолепных сохраненных картинок в ВК,для поднятия настроения'
    };

    var content = tmpl(html,data)

    $('body').append(content);
});// end ready
