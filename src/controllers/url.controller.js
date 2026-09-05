import { nanoid } from "nanoid"

import urlModel from "../models/url.model.js"

export const createShortUrl = async (req, res) => {
  const originalUrl = req.body.originalUrl

  if (!originalUrl) {
    return res.status(400).json({ message: "Invalid Original Url Required" })
  }

  try {
    const url = new URL(originalUrl)
    if (url.protocol === "http:" || url.protocol === "https:") {
      const shortCode = nanoid(6)
      const shortUrl =
        req.protocol + "://" + req.get("host") + "/api/urls/" + shortCode

      const savedUrl = await urlModel.create({
        originalUrl: originalUrl,
        shortCode: shortCode,
        shortUrl: shortUrl,
      })

      return res
        .status(201)
        .json({
          message: "Create short url successfully",
          OriginalUrlUrl: savedUrl.originalUrl,
          ShortUrl: savedUrl.shortUrl,
          ShortCode: savedUrl.shortCode,
          CreatedAt: savedUrl.createdAt,
        })
    }

    return res.status(400).json({ message: "invalid url" })
  } catch (error) {
    return res.status(400).json({ message: "invalid url" })
  }
}

export const redirectUrl = async () => {}
