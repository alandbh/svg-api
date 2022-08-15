const svg2 = `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>`;

import chartService from "./service.js";

export default function handler(req, res) {
    console.log(req.query);
    res.setHeader("content-type", "image/svg+xml");

    // const [g1 = 1, g2 = 1, g3 = 2, g4 = 4] = req.query;

    res.status(200).send(chartService(req.query));

    // res.status(200).json({ name: "John Doe" });
}
