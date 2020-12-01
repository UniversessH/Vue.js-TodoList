<template>
  <div>
    <header>
      <section>
        <v-app-bar color="#26C6DA" dense dark>
          <v-toolbar-title>Todo-List</v-toolbar-title>
        </v-app-bar>
        <v-text-field
          type="text"
          v-model="todo"
          @keyup.enter="addTodo"
          hint="按下Enter添加你的待办事件"
          placeholder="   Add Todo"
        />
      </section>
    </header>
    <section>
      <h2>
        正在进行:<span>{{ todoLen }}</span>
      </h2>
      <ol>
        <li
          v-for="(item, index) in todoList"
          v-bind:key="index"
          v-if="item.done === false"
        >
          <v-container>
            <v-col cols="12">
              <v-card class="mx-auto" max-width="1200" align="center">
                <div class="section">
                  <div class="box">
                    <input
                      type="checkbox"
                      class="checkbox"
                      @change="changeTodo(index, true)"
                    />
                  </div>
                  <v-card-text>
                    <span class="text">{{ item.todo }}</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      class="ma-2"
                      color="#F44336"
                      @click="deleteTodo(index, true)"
                      small
                    >
                      DELETE
                      <v-icon color="#E1F5FE" right small> mdi-cancel </v-icon>
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-col>
          </v-container>
        </li>
      </ol>
      <br/><br/>
      <h2>
        已经完成:<span>{{ todoList.length - todoLen }}</span>
      </h2>
      <ul>
        <li
          v-for="(item, index) in todoList"
          v-bind:key="index"
          v-if="item.done === true"
        >
          <v-container>
            <v-col cols="12">
              <v-card class="mx-auto" max-width="1200" align="center">
                <div class="section">
                  <div class="box">
                    <input
                      type="checkbox"
                      class="checkbox"
                      checked="checked"
                      @change="changeTodo(index, false)"
                    />
                  </div>
                  <v-card-text>
                    <span class="text">{{ item.todo }}</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      class="ma-2"
                      color="#F44336"
                      @click="deleteTodo(index, false)"
                      small
                    >
                      DELETE
                      <v-icon color="#E1F5FE" right small> mdi-cancel </v-icon>
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-col>
          </v-container>
        </li>
      </ul>
    </section>
    <br /><br />
    <v-footer padless outlined>
      <v-col class="text-center" cols="12">
        <strong>Copyright@2020 Universess All Rights Reserved </strong><a @click="clearAll"><strong>ClearAll</strong></a>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "pageBody",
  data() {
    return {
      todo: "",
      todoList: [],
      todoLen: 0,
    };
  },
  methods: {
    addTodo() {
      const todoObj = {
        todo: this.todo,
        done: false,
      };
      this.todoList.push(todoObj);
      this.todoLen++;
      this.todo = "";
    },
    changeTodo(index, done) {
      if (done) {
        this.todoLen--;
        this.todoList[index].done = true;
      } else {
        this.todoLen++;
        this.todoList[index].done = false;
      }
    },
    deleteTodo(index, done) {
      if (done) {
        this.todoLen--;
      }
      this.todoList.splice(index, 1);
    },
    clearAll() {
      this.todoList = [];
      this.todoLen = 0;
    },
  },
};
</script>