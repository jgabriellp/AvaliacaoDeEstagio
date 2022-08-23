var db = openDatabase("MeuBanco", "2.0", "MyBase", 4048)
db.transaction(function(criar) {
	criar.executeSql("CREATE TABLE users (ID PRYMARY KEY, email TEXT, senha TEXT)")
})

function testaEmail(x, login) {

	if (x.length > 0) {
		login = "deu tudo certo"
		console.log(login)
		return login
	} else {
		login = "email não cadastrado"
		console.log(login)
		return login
	}
}

function testaSenha(x, key) {

	if (x.length > 0) {
		key = "deu tudo certo"
		console.log(key)
		return key
	} else {
		key = "senha incorreta"
		console.log(key)
		return key
	}
}

function capturar() {
	let email = document.getElementById("email").value
	let senha = document.getElementById("senha").value

	var login = ""
	var key = ""

	db.transaction(t => t.executeSql(
		"select email from users where email='" + email + "'", [], (t, result) => testaEmail(result.rows, login)
		)
	)

	db.transaction(s => s.executeSql(
		"select senha from users where senha='" + senha + "'", [], (s, resultS) => testaSenha(resultS.rows, key)
		)
	)

	if ((login == "deu tudo certo") && (key == "deu tudo certo")) {
		console.log("você logou com sucesso")
	} else if ((login == "deu tudo certo") && (key != "deu tudo certo")) {
		console.log(key)
	}else if ((login != "deu tudo certo") && (key == "deu tudo certo")) {
		console.log(login)
	} else {
		console.log("faça seu cadastro")
	}

}
