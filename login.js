var db = openDatabase("MeuBanco", "2.0", "MyBase", 4048)
//db.transaction(function(criar) {
//	criar.executeSql("CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)")
//})

function capturar() {
	let email = document.getElementById("email").value
	let senha = document.getElementById("senha").value
	console.log(email)
	console.log(senha)

	var r = []

	var sql = "SELECT email FROM users"
	console.log(sql)

	db.transaction(t => t.executeSql(
		'SELECT u.email FROM users u ', [], (t, result) => console.log(result.rows)
	))

	//db.transaction(function(login) {
	//	let lo = login.executeSql(sql)
	//	console.log(lo)
	//})

}
