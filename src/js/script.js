
const _BASE_URL = 'http://62.113.117.229:5000/api'

const baseHeaders = {'Content-Type': 'application/json'}

export function login(email, password) {
	const body = JSON.stringify({email, password})
	fetch(`${_BASE_URL}/login`, {method: 'POST', body, headers: baseHeaders})
	.then(res => res.json())
	.then(data => {
		if(!data.error){
			localStorage.setItem('auth_token', data.auth_token)
		}
	})
}

export function register(email, password)  {
	const body = JSON.stringify({email, password})
	fetch(`${_BASE_URL}/register`, {method: 'POST', body, headers: baseHeaders})
	.then(res => res.json())
	.then(data => {
		if(!data.error){
			localStorage.setItem('auth_token', data.auth_token)
		} else {
			return data.message
		}
	}).catch(err => {
		return err
	})
}

function calculateArcans(birthday, gender, name) {
	const body = JSON.stringify({birthday, gender, name})
	fetch(`${_BASE_URL}/arcanas`, {method: 'POST', body, headers: baseHeaders})
	.then(res => res.json())
	.then(data => {
		localStorage.setItem('arcanas', JSON.stringify(data))
	})
}

export async function calculateFate(birthday, gender, name) {
	const body = JSON.stringify({birthday, gender, name})
	calculateArcans(birthday, gender, name)
	fetch(`${_BASE_URL}/calculate/fate`, {method: 'POST', body, headers: baseHeaders})
	.then(res => res.json())
	.then(data => {
		localStorage.setItem('fate', JSON.stringify(data))
		localStorage.setItem('fateUserInfo', JSON.stringify({birthday, name}))
	}).finally(() => {
		window.location.href = 'calculators.html'
	})
}

export function calculateYears(birthday, gender, name) {

	const body = JSON.stringify({birthday, gender, name})
	calculateArcans(birthday, gender, name)
	fetch(`${_BASE_URL}/calculate/years`, {method: 'POST', body, headers: baseHeaders})
	.then(res => res.json())
	.then(data => {
		localStorage.setItem('years', JSON.stringify(data))
		localStorage.setItem('yearsUserInfo', JSON.stringify({birthday, name}))
	}).finally(() => {
		window.location.href = 'prognosis.html'
	})

	
}

export function getData() {
	fetch(`${_BASE_URL}/user/data`, {method: 'GET'})
	.then(res => res.json())
	.then(data => {
		return data
	})
}