import { postHandler } from './route'; 

export default function handler(req, res) {
    if (req.method === 'POST') {
        return postHandler(req, res); // Call postHandler for POST requests
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
