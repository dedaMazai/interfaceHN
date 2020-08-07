## API Github Dashboard
Данное приложение, по поиску самых популярных репозиториев на github, предлогается создать в качестве тестового задания в Avito.
Мне показалась интересной поставленная задача, поэтому я тоже попробовал его реализовать. И предложить своё виденье на дизайн, выввод и хранение репозиториев, а так же Paginator.
### В приложении 2 страницы:
* `на 1 странице` производится поиск репозиториев и вывод списка найденых по 10, и Paginator для перехода к следующим 10 найденым репозиториям, при обновлении страницы данные поиска сохраняются. Сортировка списка репозиториев по колличеству звезд.
* `на 2 странице` отображается карточка выбраного репозитория из списка, при обновлении страницы данные сохраняются.
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

