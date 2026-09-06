import { nanoid } from "nanoid"

import urlModel from "../models/url.model.js"

export const createShortUrl = async (req, res) => {
  const originalUrl = req.body.originalUrl

  if (!originalUrl) {
    return res.status(400).json({ message: "Invalid Original Url Required" })
  }
  
  let shortCode
  let shortUrl 
  let existingCode
  try {
    const url = new URL(originalUrl)
    if (url.protocol === "http:" || url.protocol === "https:") { 

    } else {
      return res.status(400).json({message: "invalid url"})
    }

  } catch (error) {
    return res.status(400).json({ message: "invalid url" })
  }

  try {

    do {
        shortCode = nanoid(6)

        existingCode = await urlModel.findOne({
          shortCode
        })
      } while (existingCode)

    shortUrl = req.protocol + "://" + req.get("host") + "/api/urls/" + shortCode


    const savedUrl = await urlModel.create({
        originalUrl: originalUrl,
        shortCode: shortCode,
        shortUrl: shortUrl,
      })

      return res
        .status(201)
        .json({
          message: "Create short url successfully",
          originalUrl: savedUrl.originalUrl,
          shortUrl: savedUrl.shortUrl,
          shortCode: savedUrl.shortCode,
          createdAt: savedUrl.createdAt,
        })
  } catch (error) {
    return res.status(500).json({message: "Database Error"})
  }
}

export const redirectUrl = async (req, res) => {
  const shortCode = req.params.shortCode

  try {
    
    const urlRecord = await urlModel.findOne({shortCode})
  
    if(!urlRecord) {
      return res.status(404).json({message: "This record is not available"})
    }
  
    return res.redirect(urlRecord.originalUrl)
  } catch (error) {
    return res.status(500).json({message: "Database error"})
  }

}
