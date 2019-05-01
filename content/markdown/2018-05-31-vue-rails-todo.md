---
title: Vue.js + Ruby on RailsでTodoリストアプリを作る。
subtitle:
date: 2018年05月31日
tags:
  - Vue.js
  - Ruby on Rails
---

# 完成図

<img src="/images/tasks.png">

# コンセプト

フロントエンドとサーバサイドを完全に分ける。よって Rails の Webpacker を用いた Vue.js の使用はしない。

# 環境

Mac なので基本 homebrew でインストールしている。
環境でこけるのが一番萎えるので慎重に。

- Mac OS X
- node 10.0.0
- npm 5.6.0
- Vue 2.9.3
- Rails 5.1.6

# 早速 Todo リストアプリ作ろう。

サーバーサイドとフロントエンドを分けるので、それぞれフォルダも分かれます。

## まずはサーバサイドから

まずはサーバサイドから作ります。単純な CRUD 機能(Create Read Update Delete)が出来ることを目指しましょう。但し今回は Update は省略しています。

APi モードで rails new します。

```
$ rails new server --api
```

Todo リストアプリを作るので、「task」というモデルを作り、タスクを保存したり削除したり出来るようにします。タスクが持つ column は string 型の「text」だけとします。DB のマイグレーションも忘れず行う。

```
$ rails generate model task text:string
$ rails db:migrate
```

次にコントローラーを作ります。

```
$ rails g controller api::tasks
```

tasks_controller.rb の中身を以下のようにします。

```ruby :api/tasks_controller.rb
class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render json: "create new task.\n", status: 200
    else
      render json: "fail to create.\n", status: 500
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: "destroy a task.\n"
  end

  private
    def task_params
      params.require(:task).permit(:text)
    end
end

```

最後にルーティングを設定します。

```ruby :config/routes.rb
Rails.application.routes.draw do
  namespace :api, { format: 'json' } do
    resources :tasks
  end
end
```

これによりルーティングは以下のようになります。

```
$ rake routes
       Prefix Verb   URI Pattern                   Controller#Action
    api_tasks GET    /api/tasks(.:format)          api/tasks#index {:format=>/json/}
              POST   /api/tasks(.:format)          api/tasks#create {:format=>/json/}
 new_api_task GET    /api/tasks/new(.:format)      api/tasks#new {:format=>/json/}
edit_api_task GET    /api/tasks/:id/edit(.:format) api/tasks#edit {:format=>/json/}
     api_task GET    /api/tasks/:id(.:format)      api/tasks#show {:format=>/json/}
              PATCH  /api/tasks/:id(.:format)      api/tasks#update {:format=>/json/}
              PUT    /api/tasks/:id(.:format)      api/tasks#update {:format=>/json/}
              DELETE /api/tasks/:id(.:format)      api/tasks#destroy {:format=>/json/}
```

ターミナルから curl でテストしてみましょう。

まず Rails サーバを立てます。

```
$ rails s
```

別ターミナルで、curl から rails サーバへリクエストを送ります。
まずは新しいタスクを作ってみましょう。

```
$ curl http://localhost:3000/api/tasks -X POST -d 'task[text]=洗濯する'
create new task.
```

次はそれを GET してみます。

```
$ curl http://localhost:3000/api/tasks
[{"id":1,"text":"洗濯する","created_at":"2018-05-31T15:05:34.862Z","updated_at":"2018-05-31T15:05:34.862Z"}]
```

最後にそれを削除してみます。

```
$ curl http://localhost:3000/api/tasks/1 -X DELETE
destroy a task.
```

これでサーバ側は（だいたい）完成です。後からちょっと修正します。

## 次はフロントエンド

次はフロント側を Vue.js で作っていきます。
vue-cli で雛形を作っていきましょう。今回はテンプレとして webpack-simple を使います。

```
$ vue init webpack-simple client
$ cd client
$ npm install
$ npm run dev
```

まずは GET メソッドを送ってタスクを入手できるようにしましょう。
src/app.js を以下のように変更します。

```js :src/app.js
<template>
  <div id="app">
    <ul id="task-list">
      <li class="task" v-for="task in tasks"><p>{{ task.text }}</p></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const hostName = 'localhost:3000';
const path = '/api/tasks'

export default {
  name: 'app',
  data () {
    return {
      tasks: [],
    }
  },
  methods: {
    getTasks: function() {
      axios.get(`http://${hostName}${path}`)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.getTasks();
  }
}
</script>

```

axios を使ってサーバにリクエストを送るので axios をインストールします。

```
npm install axios
```

axios で異なるオリジンに対してリクエストを送ると、クロスドメイン対応と pre-flight の対応が必要になります。OPTIONS メソッドで Pre-flight というリクエストが送られます。（あまり詳しくないので[ここを参考](https://qiita.com/shimpeiws/items/0cd53ac9da3a7fd645b9)にしました。これに対応するためにサーバ側を少し変更します。

まずクロスドメインに対応するために、
rack-cors モジュールをインストールし、

```
gem 'rack-cors'
```

config/initializers/cors.rb を以下にようにします。

```ruby :config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

config/routes.rb に options リクエストが来た時のルーティングを追加します。

```ruby :config/routes.rb
match '*path' => 'options_request#preflight', via: :options
```

controller/options_request_controller.rb に以下を追加します。

```ruby :controller/options_request_controller.rb
class OptionsRequestController < ApplicationController
  ACCESS_CONTROL_ALLOW_METHODS = %w(GET OPTIONS).freeze
  ACCESS_CONTROL_ALLOW_HEADERS = %w(Accept Origin Content-Type Authorization).freeze

  def preflight
    set_preflight_headers!
    head :ok
  end

  private

  def set_preflight_headers!
    response.headers['Access-Control-Max-Age'] = ACCESS_CONTROL_MAX_AGE
    response.headers['Access-Control-Allow-Headers'] = ACCESS_CONTROL_ALLOW_HEADERS.join(',')
    response.headers['Access-Control-Allow-Methods'] = ACCESS_CONTROL_ALLOW_METHODS.join(',')
  end
end

```

さて、これで task をサーバから GET できるようになったと思います。
データは予め curl で post して下さい。

次にデータを POST するために form を追加しましょう。
form の値を newTask というデータに bind したので、data に追加します。
form に入力した値を axios でリクエストするメソッドを methods の中に追加します。

まとめると以下のコードになります。

```js :src/app.js
<template>
  <div id="app">
    <form v-on:submit.prevent="postTask">
      <input id="new-task-form" type="text" v-model="newTask" placeholder="やりたいことは...">
    </form>
    <ul id="task-list">
      <li class="task" v-for="task in tasks"><p>{{ task.text }}</p></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const hostName = 'localhost:3000';
const path = '/api/tasks'

export default {
  name: 'app',
  data () {
    return {
      tasks: [],
      newTask: '',
    }
  },
  methods: {
    getTasks: function() {
      axios.get(`http://${hostName}${path}`)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postTask: function() {
      axios.post(`http://${hostName}${path}`,
          `task[text]=${this.newTask}`
        )
        .then((response) => {
          this.getTasks();
          this.newTask = '';
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteTask: function(id) {
      axios.delete(`http://${hostName}${path}/${id}`)
        .then((response) => {
          this.getTasks();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.getTasks();
  }
}
</script>

```

最後に task を DELETE するためのボタンを追加し、ボタンが押された時に axios で DELETE を送るメソッドを追加します。ついでに scss でスタイリングを行うと以下のようなコードになります。

```js :src/app.js
<template>
  <div id="app">
    <form v-on:submit.prevent="postTask">
      <input id="new-task-form" type="text" v-model="newTask" placeholder="やりたいことは...">
    </form>
    <ul id="task-list">
      <li class="task" v-for="task in tasks"><p>{{ task.text }}</p><button class="delete-button" v-on:click="deleteTask(task.id)">×</button></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const hostName = 'localhost:3000';
const path = '/api/tasks'

export default {
  name: 'app',
  data () {
    return {
      tasks: [],
      newTask: '',
    }
  },
  methods: {
    getTasks: function() {
      axios.get(`http://${hostName}${path}`)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postTask: function() {
      axios.post(`http://${hostName}${path}`,
          `task[text]=${this.newTask}`
        )
        .then((response) => {
          this.getTasks();
          this.newTask = '';
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteTask: function(id) {
      axios.delete(`http://${hostName}${path}/${id}`)
        .then((response) => {
          this.getTasks();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted: function() {
    this.getTasks();
  }
}
</script>

<style lang="scss">

$list-item-height:   30px;

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#new-task-form {
  width: 100%;
  height: $list-item-height;
}

#task-list {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: $list-item-height;
  border-bottom: dashed 1px gray;

  p {
    margin: 0;
    padding-left: 10px;
  }
}

.delete-button {
  width: 20px;
  height: 20px;
  margin: 0 8px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 50%;
}

</style>

```

これで、完成です！UPDATE 機能はまだ実装していないので、実装してみると勉強になると思います。
