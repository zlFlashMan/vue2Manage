<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="answerManage"><i class="el-icon-date"></i>学生答题管理</el-menu-item>
					<el-menu-item index="graphicManage"><i class="el-icon-upload"></i>图文管理</el-menu-item>
					<el-menu-item index="messageManage"><i class="el-icon-edit"></i>在线留言管理</el-menu-item>
					<el-menu-item index="schoolManage"><i class="el-icon-menu"></i>学校管理</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
</style>
