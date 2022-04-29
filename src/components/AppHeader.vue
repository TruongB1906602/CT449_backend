<template>
	<nav class="navbar navbar-expand navbar-dark bg-dark">
		
		<a href="/" class="navbar-brand">TNT.sport</a>

		

		<div v-if="!currentUser" class="navbar-nav ml-auto">
			<li class="nav-item">
				<router-link :to="{ name: 'register' }" class="nav-link"
					>Đăng ký </router-link
				>
			</li>
			
			<li class="nav-item">
				<router-link :to="{ name: 'login' }" class="nav-link"
					>Đăng nhập</router-link
				>
			</li>
		</div>
		

		<div v-if="currentUser" class="navbar-nav ml-auto">
			<li class="nav-item">
				<router-link :to="{ name: 'navbar' }" class="nav-link">{{
					currentUser.username
				}}</router-link>
			</li>
			<li class="nav-item">
				<a class="nav-link" @click.prevent="handleLogout">Đăng xuất</a>
			</li>
		</div>
		
	</nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
	computed: {
		...mapState(useAuthStore, {
			currentUser: "user",
		}),
	},
	methods: {
		...mapActions(useAuthStore, ["logout", "loadAuthState"]),

		handleLogout() {
			this.logout();
			this.$router.push({ name: "login" });
		},
	},
	created() {
		this.loadAuthState();
	},
};
</script>


<style scoped>
.navbar{
	height: 50px;
    
}
.nav-link{
	font-size: 16px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.navbar-brand{
	font-size:35px;
    font-family:Georgia, 'Times New Roman', Times, serif;
	margin-left: 30px;
    
}
</style>>
