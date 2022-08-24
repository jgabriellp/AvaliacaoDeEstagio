var db = openDatabase("MeuBanco", "2.0", "MyBase", 4048)
db.transaction(function(criar) {
	criar.executeSql("CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)")
})

let login = ""
let key = ""
let res = "deu tudo certo"

function testaEmail(x) {

	if (x.length > 0) {
		login = "deu tudo certo"
		key = "deu tudo certo"
		console.log(login, key)
	} else {
		console.log("email ou senha incorreto(s)")
	}
}

function capturar() {
	var email = document.getElementById("email").value
	var senha = document.getElementById("senha").value

	db.transaction(t => t.executeSql(
		"SELECT email, senha FROM users WHERE (email LIKE '%" + email + "%') AND (senha LIKE '%" + senha + "%')",
		[], 
		(t, result) => testaEmail(result.rows)
	))

}
