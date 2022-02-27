## InterfaceHN

Интерфейс для сайта Hacker News предлогается создать в качестве тестового задания на Avito.

Я вижу дизайн подобного сайт достаточно минималестичным и лаконичным, чтобы пользователь был сконцетрирован только на информации из статей, а навигация по сайту была достаточна интуитивна.
### В приложении 2 страницы:
* `на 1 странице` производится вывод списка 100 самых свежих статей с Hacker News, каждую минуту происходит автоматическое обновление списка, так же есть возможность ручного обновления. Сортировка списка статей по дате, самые свежие сверху.
* `на 2 странице` отображается выбраная статья из списка, содержащая: заголовок новости (при нажатии происходит переход по ссылке на новость), имя автора, дату, счётчик коментариев, список коментариев в виде дерева, кнопка для возврата к списку новостей находящаяся в заголовке старницы "Hacker News". Каждую минуту происходит автоматическое обновление списка коментариев, так же есть возможность ручного обновления.
## Preview app:
![Иллюстрация к проекту](https://github.com/dedaMazai/github_parser/raw/master/Preview.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



### `npm install`

The command to install the npm_modules folder is required to launch the application.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
