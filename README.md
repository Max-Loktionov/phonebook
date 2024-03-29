# Phonebook

React homework template Этот проект был создан при помощи Create React App. Для
знакомства и настройки дополнительных возможностей обратись к документации.

Подготовка нового проекта Убедись что на компьютере установлена LTS-версия
Node.js. Скачай и установи её если необходимо. Склонируй этот репозиторий.
Измени имя папки с react-homework-template на имя своего проекта. Создай новый
пустой репозиторий на GitHub. Открой проект в VSCode, запусти терминал и свяжи
проект с GitHub-репозиторием по инструкции. Установи базовые зависимости проекта
командой npm install. Запусти режим разработки, выполнив команду npm start.
Перейди в браузере по адресу http://localhost:3000. Эта страница будет
автоматически перезагружаться после сохранения изменений в файлах проекта.
Деплой Для настройки деплоя проекта необходимо выполнить несколько
дополнительных шагов по настройке твоего репозитория. Зайди во вкладку Settings
и в подсекции Actions выбери выбери пункт General.

GitHub actions settings

Пролистай страницу до последней секции, в которой выбери опции как на следующем
изображении и нажми Save. Без этих настроек у сборки будет недостаточно прав для
автоматизации процесса деплоя.

GitHub actions settings

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку gh-pages, каждый раз когда обновляется ветка
main. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле package.json отредактировать поле homepage, заменив
your_username и your_repo_name на свои, и отправить изменения на GitHub.

"homepage": "https://your_username.github.io/your_repo_name/" Далее необходимо
зайти в настройки GitHub-репозитория (Settings > Pages) и выставить раздачу
продакшн версии файлов из папки /root ветки gh-pages, если это небыло сделано
автоматически.

GitHub Pages settings

Статус деплоя Статус деплоя крайнего коммита отображается иконкой возле его
идентификатора.

Желтый цвет - выполняется сборка и деплой проекта. Зеленый цвет - деплой
завершился успешно. Красный цвет - во время линтинга, сборки или деплоя
произошла ошибка. Более детальную информацию о статусе можно посмотреть кликнув
по иконке, и в выпадающем окне перейти по ссылке Details.

Deployment status

Живая страница Через какое-то время, обычно пару минут, живую страницу можно
будет посмотреть по адресу указанному в отредактированном свойстве homepage.

Если открывается пустая страница, убедись что во вкладке Console нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (404). Скорее всего у
тебя неправильное значение свойства homepage в файле package.json.

Маршрутизация Если приложение использует библиотеку react-router-dom для
маршрутизации, необходимо дополнительно настроить компонент <BrowserRouter>,
передав в пропе basename точное название твоего репозитория. Слеши в начале и
конце строки обязательны.

<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
Как это работает
How it works

После каждого пуша в ветку main GitHub-репозитория, запускается специальный
скрипт (GitHub Action) из файла .github/workflows/deploy.yml. Все файлы
репозитория копируются на сервер, где проект инициализируется и проходит линтинг
и сборку перед деплоем. Если все шаги прошли успешно, собранная продакшн версия
файлов проекта отправляется в ветку gh-pages. В противном случае, в логе
выполнения скрипта будет указано в чем проблема.
