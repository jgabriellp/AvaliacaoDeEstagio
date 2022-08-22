var db = openDatabase("MeuBanco", "2.0", "MyBase", 4048)
db.transaction(function(criar) {
	criar.executeSql("CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)")
})

function capturar() {
	let email = document.getElementById("email").value
	let senha = document.getElementById("senha").value
	console.log(email)
	console.log(senha)

	db.transaction(function(armazenar) {
		armazenar.executeSql("INSERT INTO users (email, senha) VALUES (?, ?)", [email, senha])
	})
}