package routes

import (
	"github.com/kataras/iris/mvc"
	"github.com/z547743799/jinrongshouye/bootstrap"
	"github.com/z547743799/jinrongshouye/controller"
)

// Configure registers the necessary routes to the app.
func Configure(b *bootstrap.Bootstrapper) {
	index := mvc.New(b.Party("/"))
	index.Handle(new(controller.IndexController))
}
