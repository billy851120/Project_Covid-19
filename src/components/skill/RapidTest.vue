<template>
	<div v-if="isShow" class="container mt-3">
		<div class="row">
			<div class="col">
				<!-- @change="getCity" -->
				<select
					style="font-size: 1.3rem"
					class="sel me-2 mb-3"
					v-model="CountyCho"
					@change="SwitchData(CountyCho)"
					ref="CountryCN"
				>
					<option
						v-for="item in CountyList"
						:key="item.countycode01"
						:value="item.countyname"
					>
						{{ item.countyname }}
					</option>
				</select>

				<select
					style="font-size: 1.3rem"
					class="sel"
					v-model="CityCho"
					@change="getData"
				>
					<option v-for="item in CityList" :key="item">
						{{ item }}
					</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<p>來源資料時間 {{ dataSwitch2[0]['來源資料時間'] }}</p>

				<div
					class="d-flex p-5 mb-4 hov"
					style="border: 1px solid #000"
					v-for="item in dataSwitch2"
					:key="item['醫事機構代碼']"
				>
					<div class="me-auto">
						<h2 style="font-weight: 800">
							{{ item['醫事機構名稱'] }}
						</h2>
						<p>
							<i style="color: #62b353" class="fa-solid fa-phone"></i>
							{{ item['醫事機構電話'] }}
						</p>
						<p>
							<i style="color: #f22" class="fa-solid fa-location-dot"></i>
							{{ item['醫事機構地址'] }}
						</p>
					</div>
					<div style="width: 200px" class="me-5 d-flex flex-column">
						<h4 class="mt-auto">
							快篩數量 :
							<span style="font-size: 2.3rem">{{
								item['快篩試劑截至目前結餘存貨數量']
							}}</span>
						</h4>
						<a
							class="btn btn-primary hov_show"
							style="
								visibility:hidden
								color: #fff;
								text-decoration: none;
								width: 150px;
							"
							:href="GoogleMapURL + item['醫事機構地址']"
							target="_blank"
							>導航</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<div
			style="height: 100vh"
			class="d-flex justify-content-center align-items-center"
		>
			<div
				style="
					width: 8rem;
					height: 8rem;
					border-width: 2.25em;
					color: #91a1b17a;
					margin-bottom: 230px;
				"
				class="spinner-border"
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>
</template>

<script>
// https://data.gov.tw/dataset/101905 代碼服務－縣市清單
// https://data.gov.tw/dataset/102011 代碼服務－鄉鎮市區清單(戶政)

import axios from 'axios';

export default {
	name: 'LearningRapidTest',

	data() {
		return {
			RapidData: null,
			CountyCho: '基隆市',
			CountyList: [
				{
					countycode: 'C',
					countyname: '基隆市',
					countycode01: '10017',
				},
				{
					countycode: 'A',
					countyname: '臺北市',
					countycode01: '63000',
				},
				{
					countycode: 'F',
					countyname: '新北市',
					countycode01: '65000',
				},
				{
					countycode: 'G',
					countyname: '宜蘭縣',
					countycode01: '10002',
				},
				{
					countycode: 'H',
					countyname: '桃園市',
					countycode01: '68000',
				},
				{
					countycode: 'O',
					countyname: '新竹市',
					countycode01: '10018',
				},
				{
					countycode: 'J',
					countyname: '新竹縣',
					countycode01: '10004',
				},
				{
					countycode: 'K',
					countyname: '苗栗縣',
					countycode01: '10005',
				},
				{
					countycode: 'B',
					countyname: '臺中市',
					countycode01: '66000',
				},
				{
					countycode: 'N',
					countyname: '彰化縣',
					countycode01: '10007',
				},
				{
					countycode: 'M',
					countyname: '南投縣',
					countycode01: '10008',
				},
				{
					countycode: 'I',
					countyname: '嘉義市',
					countycode01: '10020',
				},
				{
					countycode: 'Q',
					countyname: '嘉義縣',
					countycode01: '10010',
				},
				{
					countycode: 'P',
					countyname: '雲林縣',
					countycode01: '10009',
				},
				{
					countycode: 'D',
					countyname: '臺南市',
					countycode01: '67000',
				},
				{
					countycode: 'E',
					countyname: '高雄市',
					countycode01: '64000',
				},

				{
					countycode: 'X',
					countyname: '澎湖縣',
					countycode01: '10016',
				},
				{
					countycode: 'W',
					countyname: '金門縣',
					countycode01: '09020',
				},
				{
					countycode: 'T',
					countyname: '屏東縣',
					countycode01: '10013',
				},
				{
					countycode: 'V',
					countyname: '臺東縣',
					countycode01: '10014',
				},
				{
					countycode: 'U',
					countyname: '花蓮縣',
					countycode01: '10015',
				},
				{
					countycode: 'Z',
					countyname: '連江縣',
					countycode01: '09007',
				},
			],
			CityList: [],
			CityCho: '',
			dataSwitch1: [],
			dataSwitch2: [],
			GoogleMapURL: 'https://www.google.com.tw/maps/place/',
			isShow: true,
		};
	},
	mounted() {
		axios // 全台塊篩資訊
			.get(
				'https://data.nhi.gov.tw/Datasets/Download.ashx?rid=A21030000I-D03001-001&l=https://data.nhi.gov.tw/resource/Nhi_Fst/Fstdata.csv'
			)
			.then((res) => {
				var data = JSON.parse(this.csvJSON(res.data));
				this.RapidData = data;
				this.SwitchData(this.CountyCho);
			});
	},
	beforeUpdate() {},
	updated() {},
	//
	methods: {
		csvJSON(csv) {
			var lines = csv.split('\n');

			var result = [];

			var headers = lines[0].split(',');

			for (var i = 1; i < lines.length; i++) {
				var obj = {};
				var currentline = lines[i].split(',');

				for (var j = 0; j < headers.length; j++) {
					obj[headers[j]] = currentline[j];
				}

				result.push(obj);
			}

			//return result; //JavaScript object
			return JSON.stringify(result); //JSON
		},
		SwitchData(cho) {
			let data = [];
			var chose = cho;
			var filtered = this.RapidData.filter(function (val, idx) {
				if (val['醫事機構地址'] && val['醫事機構地址'].indexOf(chose) != -1) {
					return val;
				}
			});
			filtered.map((val, idx) => {
				data.push(val);
			});
			this.dataSwitch1 = data;

			this.getCity();
			this.getData();
		},
		getCity() {
			let city = ['市', '區', '鄉', '鎮'];
			let check = '';
			let check2 = '';
			let check3 = '';
			let newList = [];

			// console.log(this.dataSwitch1);
			this.dataSwitch1.map((val, idx) => {
				check = val['醫事機構地址'].substring(0, 6);
				check3 = val['醫事機構地址'].substring(3, 6);

				// console.log(check);
				let check4 = 0;

				for (let i = 0; i < city.length; i++) {
					if (check3.indexOf(city[i]) != -1 && !check4) {
						check4++;

						if (newList.indexOf(check2) == -1 && check2 != '') {
							newList.push(check2);
						}
						// console.log(check.indexOf(city[i]) + 1);

						check2 = check.substring(3, check.indexOf(city[i]) + 1);
					}
				}
			});
			this.CityList = newList;
			this.CityCho = this.CityList[0];
		},
		getData() {
			this.isShow = !this.isShow;
			setTimeout(() => {
				this.isShow = !this.isShow;
			}, 500);
			var filtered = this.dataSwitch1.filter((val, idx) => {
				if (val['醫事機構地址'].indexOf(this.CityCho) != -1) {
					return val;
				}
			});
			this.dataSwitch2 = filtered;
		},
	},
	components: {
		// Gmap: googleMap,
	},
};
</script>

<style lang="scss" scoped>
.hov:hover {
	box-shadow: 3px 1px 10px 0px #ddd;
	cursor: pointer;
}
.hov:hover .hov_show {
	visibility: visible !important;
}
.sel {
	padding: 3px 21px;
	border-radius: 12px;
}
</style>
;
