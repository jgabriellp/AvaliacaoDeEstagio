var db = openDatabase("MeuBanco", "2.0", "MyBase", 4048)
db.transaction(function(criar) {
	criar.executeSql("CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)")
})

function teste(x) {
	var string = ""

	if (x.length > 0) {
		string = "Esse email já foi cadastrado"
		console.log(string)
		document.getElementById("email").value = ""
		document.getElementById("senha").value = ""
		alert(string)
	} else {
		let email = document.getElementById("email").value
		let senha = document.getElementById("senha").value
	
		db.transaction(function(armazenar) {
			armazenar.executeSql("INSERT INTO users (email, senha) VALUES (?, ?)", [email, senha])
		})

		alert("Email cadastrado com sucesso!")
	}
}

function capturar() {
	let email = document.getElementById("email").value
	let senha = document.getElementById("senha").value
	console.log(email)
	console.log(senha)

	db.transaction(t => t.executeSql(
		"select email from users where email='" + email + "'", [], (t, result) => teste(result.rows)
		)
	)
}
