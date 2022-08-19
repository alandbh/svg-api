import galleryService from "../../services/gallery-service.js";

export default function handlerGallery(req, res) {
    res.setHeader("content-type", "image/svg+xml");
    res.status(200).send(galleryService(req.query));
}
