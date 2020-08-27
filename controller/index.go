package controller

import (
	"github.com/kataras/iris"
)

type IndexController struct {
	Ctx iris.Context
}

func (c *IndexController) Get() {

	c.Ctx.View("index.html")
}

func (c *IndexController) GetBy(page string) {

	c.Ctx.View(page + ".html")
}
