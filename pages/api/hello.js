const svg = `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>`;

export default function handler(req, res) {
    res.setHeader("content-type", "image/svg+xml");

    res.status(200).send(svg);

    // res.status(200).json({ name: "John Doe" });
}
