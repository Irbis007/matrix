
const _BASE_URL = 'http://62.113.117.229:5000/api'

const baseHeaders = {'Content-Type': 'application/json'}

export function login(email, password) {
	const body = JSON.stringify({email, password})
	console.log(body)
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

export function calculateArcans(birthday, gender, name) {
	const body = JSON.stringify({birthday, gender, name})
	fetch(`${_BASE_URL}/arcanas`, {method: 'POST', body,})
	.then(res => res.json())
	.then(data => {
		return data
	})
}

export async function calculateFate(birthday, gender, name) {
	const body = JSON.stringify({birthday, gender, name})
	const response = fetch(`${_BASE_URL}/calculate/fate`, {method: 'POST', body, headers: baseHeaders})
	.then(res => res.json())
	.then(data => {
		return data
	})
	return response
}

export function calculateYears(birthday, gender, name) {
	const body = JSON.stringify({birthday, gender, name})
	fetch(`${_BASE_URL}/calculate/years`, {method: 'POST', body, headers: baseHeaders})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		return data
	})
}

export function getData() {
	fetch(`${_BASE_URL}/user/data`, {method: 'GET'})
	.then(res => res.json())
	.then(data => {
		return data
	})
}