var db = openDatabase("MeuBanco", "2.0", "MyBase", 4048)
db.transaction(function(criar) {
	criar.executeSql("CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)")
})

let login = ""
let key = ""
let res = "deu tudo certo"

function testa(x, email, senha) {

	if (x.length > 0) {
		document.getElementById("email").value = ""
		document.getElementById("senha").value = ""
		login = "deu tudo certo"
		//alert("Você logou com sucesso!")
		console.log(login)

		db.transaction(s => s.executeSql(
			"select senha from users where senha='" + senha + "'", [], (s, resultS) => testaSenha(resultS.rows)
		))

	} else {
		document.getElementById("email").value = ""
		document.getElementById("senha").value = ""
		alert("Email incorreto.")
		console.log("Email ou senha incorreto(s).")
	}
}

function testaSenha(x) {
	if (x.length > 0) {
		document.getElementById("email").value = ""
		document.getElementById("senha").value = ""
		alert("Você logou com sucesso!")
	} else {
		document.getElementById("senha").value = ""
		alert("Senha incorreta.")
	}
}

function capturar() {
	var email = document.getElementById("email").value
	var senha = document.getElementById("senha").value

	db.transaction(t => t.executeSql(
		"SELECT email, senha FROM users WHERE (email LIKE '%" + email + "%') AND (senha LIKE '%" + senha + "%')",
		[], 
		(t, result) => testa(result.rows, email, senha)
	))

}
