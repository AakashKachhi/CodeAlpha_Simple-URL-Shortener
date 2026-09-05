import express from "express"

import { createShortUrl,  redirectUrl } from "../controllers/url.controller.js"

const Router = express.Router()

Router.post("/", createShortUrl)
Router.get("/:shortCode", redirectUrl)

export default Router