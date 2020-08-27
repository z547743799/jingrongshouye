package main

import (
	"github.com/z547743799/jinrongshouye/bootstrap"
	"github.com/z547743799/jinrongshouye/webapp/routes"
)

func newApp() *bootstrap.Bootstrapper {
	app := bootstrap.New("--", "Ji")
	app.Bootstrap()
	app.Configure(routes.Configure)
	return app
}

func main() {
	app := newApp()
	app.Listen(":8080")
}
