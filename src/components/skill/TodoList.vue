<template>
	<div>
		<h1>代辦事項清單</h1>
		<input type="text" v-model="todo" @keyup.enter="addList" />
		<div>
			<ul class="todoBox">
				<li class="todo" v-for="(item, idx) in todoList" :key="item">
					{{ item }}
					<input type="text" v-show="isEdit" />
					<button @click="del(idx)">刪除</button>
					<button>編輯</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VueComponentsTodoList',

	data() {
		return {
			todo: '',
			todoList: [],
			isEdit: true,
		};
	},

	mounted() {},

	methods: {
		addList(val) {
			if (val.target.value && this.todoList.indexOf(val.target.value) == -1) {
				this.todoList.push(val.target.value.trim());
				this.todo = '';
			}
		},
		del(idx) {
			this.todoList.splice(idx, 1);
		},
	},
};
</script>

<style lang="scss" scoped>
.todoBox .todo {
	text-decoration: none;
}
</style>
