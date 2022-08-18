import galleryService from "./gallery-service.js";

export default function handler(req, res) {
    console.log(req.query);
    res.setHeader("content-type", "image/svg+xml");

    // const [g1 = 1, g2 = 1, g3 = 2, g4 = 4] = req.query;

    res.status(200).send(galleryService(req.query));

    // res.status(200).json({ name: "John Doe" });
}
