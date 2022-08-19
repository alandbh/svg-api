import chartService from "../../services/idea-service.js";

export default function handlerIdea(req, res) {
    res.setHeader("content-type", "image/svg+xml");
    res.status(200).send(chartService(req.query));
}
