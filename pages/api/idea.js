import chartService from "./idea-service.js";

export default function handler(req, res) {
    console.log(req.query);
    res.setHeader("content-type", "image/svg+xml");

    res.status(200).send(chartService(req.query));
}
